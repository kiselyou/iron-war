/**
 *
 * @type {{port: number, host: string, clientConnect: (function())}}
 */
export const socketConfig = {
	port: 3000,
	host: 'localhost',
	clientConnect: () => {
		return 'http://' + socketConfig.host + ':' + socketConfig.port;
	}
};