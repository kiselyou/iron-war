
        /**
         *
         * @type {{port: number, host: string, clientConnect: function}}
         */
        export const socketConfig = {
            port: 3000,
            host: '127.0.0.1',
            clientConnect: () => {
                return 'http://' + socketConfig.host + ':' + socketConfig.port;
            }
        };
    