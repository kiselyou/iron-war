import SceneControls from './js/controls/SceneControls';

import {socketConfig} from './../socket/config';
import io from 'socket.io-client';

/**
 * @type {Socket}
 */
const socket = io(socketConfig.clientConnect());

socket.on('connect', () => {
	socket.on('entry', (playerId) => {
		
		const controls = new SceneControls(playerId, socket, 'main-container-canvas');
		controls
			.init()
			.start();
		
		// Send default parameters of current player
		socket.emit('update-player-info', {
			p: controls.player.position,
			r: controls.player.rotation,
			l: controls.player.lookAt,
			sk: controls.player.shipKey,
		});
		
		// Add new players to scene and send information about current player
		socket.on('add-new-player', (playerInfo) => {
			controls.addPlayer(playerInfo);
			socket.emit('send-player-info', {
				to: playerInfo['id'], // send to specific player
				p: controls.player.position,
				r: controls.player.rotation,
				l: controls.player.lookAt,
				sk: controls.player.shipKey,
			});
		});
		
		socket.on('add-old-player', (playerInfo) => {
			// Add player to scene that has already exist in other browsers
			controls.addPlayer(playerInfo);
		});
		
		socket.on('remove-specific-player', (id) => {
			controls.removePlayer(id);
		});
		
		socket.on('disconnect', () => {
			alert('Lost connection to server');
			controls.player.enable(false);
		});
		
		// window.addEventListener('beforeunload', () => {
		// 	socket.emit('remove-player', playerId);
		// });
	});
});