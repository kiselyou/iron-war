import SceneControls from './js/controls/SceneControls';

import PreLoader from './js/loader/PreLoader';
import {socketConfig} from './../socket/config';
import io from 'socket.io-client';

new PreLoader().load(() => {
	/**
	 * @type {Socket}
	 */
	const socket = io(socketConfig.clientConnect());
	
	socket.on('connect', () => {
		socket.on('entry', (playerId) => {
			
			const controls = new SceneControls(playerId, 'main-container-canvas');
			
			controls
				.init()
				.start()
				.addPlayerListener(() => {
					// Send info about current player to other players
					socket.emit('send-updated-player-info', {
						id: playerId,
						e: controls.player.ship.engine.getSocketInfo(),
						fly: controls.flyControls.getSocketInfo()
					});
				});
			
			socket.on('update-player-info', (data) => {
				let player = controls.getPlayer(data['id']);
				if (player) {
					player.ship.engine.setSocketInfo(data['e']);
					player.flyControls.setSocketInfo(data['fly']);
				}
			});
			
			// Set default parameters of current player and send it info to other players
			socket.emit('set-player-info', {
				
				p: controls.player.position,
				r: {
					x: controls.player.rotation.x,
					y: controls.player.rotation.y,
					z: controls.player.rotation.z,
					o: controls.player.rotation.order
				},
				l: controls.player.lookAt,
				sk: controls.player.shipKey,
			});
			
			// Add new players to scene and send information about current player
			socket.on('add-new-player', (playerInfo) => {
				controls.addPlayer(playerInfo);
				
				console.log('add-new-player', playerInfo);
				
				socket.emit('send-player-info', {
					to: playerInfo['id'], // send to specific player
					id: playerId,
					p: controls.player.position,
					r: {
						x: controls.player.rotation.x,
						y: controls.player.rotation.y,
						z: controls.player.rotation.z,
						o: controls.player.rotation.order
					},
					l: controls.player.lookAt,
					sk: controls.player.shipKey,
				});
			});
			
			socket.on('add-old-player', (playerInfo) => {
				// Add player to scene that has already exist in other browsers
				controls.addPlayer(playerInfo);
				
				console.log('add-old-player', playerInfo);
			});
			//
			// socket.on('remove-specific-player', (id) => {
			// 	controls.removePlayer(id);
			// });
			
			socket.on('disconnect', () => {
				alert('Lost connection to server');
				controls.player.enable(false);
			});
			
			// window.addEventListener('beforeunload', () => {
			// 	socket.emit('remove-player', playerId);
			// });
		});
	});
});