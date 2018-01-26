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
	
	// Give specific id to form
	client.emit('entry', client.id);
	
	client.on('set-form-info', (data) => {
		players[client.id].copy(data);
		// Send to all except me
		client.broadcast.emit('add-new-form', players[client.id]);
	});

	client.on('send-form-info', (data) => {
		// Send to specific form
		players[client.id].copy(data);
		client.broadcast.to(data['to']).emit('add-old-form', players[client.id]);
	});
	
	client.on('send-updated-form-info', (data) => {
		players[client.id].copy(data);
		// Send to all except me
		client.broadcast.emit('update-form-info', data);
	});

	client.on('remove-form', (playerId) => {
		// Send to all except me
		client.broadcast.emit('remove-specific-form', playerId);
	});
	
	client.on('disconnect', () => {
		// Send to all except me
		client.broadcast.emit('remove-specific-form', client.id);
		delete players[client.id];
	});
});

server.listen(socketConfig.port, socketConfig.host);