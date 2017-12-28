// // sending to sender-client only
// socket.emit('message', "this is a test");
//
// // sending to all clients, include sender
// io.emit('message', "this is a test");
//
// // sending to all clients except sender
// socket.broadcast.emit('message', "this is a test");
//
// // sending to all clients in 'game' room(channel) except sender
// socket.broadcast.to('game').emit('message', 'nice game');
//
// // sending to all clients in 'game' room(channel), include sender
// io.in('game').emit('message', 'cool game');
//
// // sending to sender client, only if they are in 'game' room(channel)
// socket.to('game').emit('message', 'enjoy the game');
//
// // sending to all clients in namespace 'myNamespace', include sender
// io.of('myNamespace').emit('message', 'gg');
//
// // sending to individual socketid
// socket.broadcast.to(socketid).emit('message', 'for your eyes only');


import http from 'http';
import {socketConfig} from './config';
import PlayerInfo from './PlayerInfo';

const server = http.createServer();
/**
 *
 * @type {Object.<PlayerInfo>}
 */
let players = {};

/**
 * @type {Socket}
 */
const io = require('socket.io')(server);

io.on('connection', (client) => {
	
	players[client.id] = new PlayerInfo(client.id);
	
	// Give specific id to player
	client.emit('entry', client.id);
	
	client.on('update-player-info', (data) => {
		players[client.id].copy(data);
		// Send to all except me
		client.broadcast.emit('add-new-player', players[client.id]);
	});
	
	client.on('send-player-info', (data) => {
		// Send to specific player
		client.broadcast.to(data['to']).emit('add-old-player', data);
	});
	
	client.on('remove-player', (playerId) => {
		// Send to all except me
		client.broadcast.emit('remove-specific-player', playerId);
	});
	
	client.on('disconnect', () => {
		// Send to all except me
		client.broadcast.emit('remove-specific-player', client.id);
		delete players[client.id];
	});
});

server.listen(socketConfig.port, socketConfig.host);