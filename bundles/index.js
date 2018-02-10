import SceneControls from './js/controls/SceneControls';

import PreLoader from './js/loader/PreLoader';
import KeyboardControls from './js/keyboard/KeyboardControls';
import {socketConfig} from './../socket/config/server';
import io from 'socket.io-client';


import Folding from './admin/folding/Folding';
import Keyboard from './admin/keyboard/Keyboard';
import Size from './admin/Size';

let keyboard = new Keyboard()
	.setSize(new Size(12, 6, 4, 3));

let config = new KeyboardControls();
for (let property in config.fly) {
	if (config.fly.hasOwnProperty(property)) {
		keyboard.add(config.fly[property]['name'], config.fly[property]['description']);
	}
}

let folding = new Folding();
folding
	.add('Ship settings', 'cogs', null)
	.add('Keyboard controls', 'keyboard', keyboard)
	.drawIn('#block-panels');



let start = false;

new PreLoader().load(() => {
	/**
	 * @type {Socket}
	 */
	const socket = io(socketConfig.clientConnect());

	socket.on('connect', () => {
		socket.on('entry', (playerId) => {

			if (start) {

				const controls = new SceneControls(playerId, 'main-container-canvas');

				// console.log('SOCKET: Current Player is', controls.player, '=======================22=============================');

				controls
					.init()
					.start()
					.addPlayerListener(() => {
						// Send info about current form to other players
						socket.emit('send-updated-form-info', {
							id: playerId,
							p: controls.player.position,
							r: {
								x: controls.player.rotation.x,
								y: controls.player.rotation.y,
								z: controls.player.rotation.z,
								o: controls.player.rotation.order
							},
							e: controls.player.ship.engine.getSocketInfo(),
							fly: controls.flyControls.getSocketInfo(),
							sk: controls.player.shipKey,
						});
					})
					.shotListener((target, chargeIds) => {
						// Send shot info to other players
						socket.emit('send-shot-target', {
							id: playerId,
							t: target,
							c: chargeIds
						});
					});


				// Set default parameters of current form and send it info to other players
				socket.emit('set-form-info', {
					p: controls.player.position,
					r: {
						x: controls.player.rotation.x,
						y: controls.player.rotation.y,
						z: controls.player.rotation.z,
						o: controls.player.rotation.order
					},
					e: controls.player.ship.engine.getSocketInfo(),
					fly: controls.flyControls.getSocketInfo(),
					sk: controls.player.shipKey,
				});
			}

			// Set target shot from specific model
            socket.on('update-shot-target', (data) => {
                let player = controls.getPlayer(data['id']);
                player.shot(data['t'], data['c']);
            });

			socket.on('update-form-info', (data) => {
				let player = controls.getPlayer(data['id']);
				if (player) {
					player.setSocketInfo(data);
					player.ship.engine.setSocketInfo(data['e']);
					player.flyControls.setSocketInfo(data['fly']);
				}
			});
			
			// Add new players to scene
			socket.on('add-new-form', (playerInfo) => {
				controls.addPlayer(playerInfo);
				// send information about current form
				socket.emit('send-form-info', {
					to: playerInfo['id'], // send to specific form
					id: playerId,
					p: controls.player.position,
					r: {
						x: controls.player.rotation.x,
						y: controls.player.rotation.y,
						z: controls.player.rotation.z,
						o: controls.player.rotation.order
					},
					e: controls.player.ship.engine.getSocketInfo(),
					fly: controls.flyControls.getSocketInfo(),
					sk: controls.player.shipKey,
				});
			});
			
			socket.on('add-old-form', (playerInfo) => {
				// Add form to scene that has already exist in other browsers
				controls.addPlayer(playerInfo);
			});
			
			socket.on('remove-specific-form', (id) => {
				controls.destroyPlayer(id);
			});
			
			socket.on('disconnect', () => {
				alert('Lost connection to server');
				controls.player.enable(false);
			});
			
			// window.addEventListener('beforeunload', () => {
			// 	// socket.emit('remove-form', playerId);
			// });
		});
	});
});