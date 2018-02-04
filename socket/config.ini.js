import fs from 'fs';
import prompt from 'prompt';
import colors from 'colors';

const DIR = './socket/config/';
const PATH_CONFIG = 'server.js';

// Commands
// npm run config:ini
// Y - Yes. Rewrite and continue
// N - No. Not rewrite and continue
// S - Stop. Not rewrite and Stop
const confirmationHelp = '(Y|N|S)';

let schema = {
    properties: {
        port: {
            description: 'Server socket port',
            message: 'Port must be integer',
            type: 'integer',
            default: 3000
        },
        host: {
            description: 'Server socket hostname',
            default: '127.0.0.1'
        }
    }
};


if (!fs.existsSync(DIR)){
    fs.mkdirSync(DIR);
}

createSocketConfiguration();

/**
 * @returns {void}
 */
function createSocketConfiguration() {
    let path = DIR + PATH_CONFIG;

    console.log(colors.green('==================== CREATE SOCKET CONFIGURATION ===================='));

    prompt.start();
    prompt.get(schema, function (err, responses) {
        let data = prepareSocketConfiguration(responses);
        writeFile(path, data, (status, msg) => {
            console.log(getTitle(status) + ': ' + msg);
        });
    });
}

/**
 *
 * @param {Object} data
 * @returns {string}
 */
function prepareSocketConfiguration(data) {
    return `
        /**
         *
         * @type {{port: number, host: string, clientConnect: function}}
         */
        export const socketConfig = {
            port: ${data['port']},
            host: '${data['host']}',
            clientConnect: () => {
                return 'http://' + socketConfig.host + ':' + socketConfig.port;
            }
        };
    `;
}

/**
 *
 * @param {boolean} status 1 - success 2 - error, 3 - warning
 * @returns {string}
 */
function getTitle(status) {
    let title;
    switch (status) {
        case 3:
            title = colors.yellow('warning');
            break;
        case 2:
            title = colors.red('error');
            break;
        case 1:
        default:
            title = colors.green('success');
            break;
    }
    return title;
}

/**
 * @param {boolean} status 1 - success 2 - error, 3 - warning
 * @param {string} msg
 * @callback listenerDone
 */

/**
 *
 * @param {string} path
 * @param {string} data
 * @param {listenerDone} listener
 * @returns {void}
 */
function writeFile(path, data, listener) {
    fs.exists(path, (exists) => {
        if (exists) {
            let schema = {
                properties: {
                    confirm: {
                        description: colors.white('The configuration has already exist. Do you really want continue and rewrite the file "' + path + '" ' + confirmationHelp),
                        message: 'You need confirm this action. Please set value Y or N or S',
                        type: 'string',
                        required: true
                    }
                }
            };

            prompt.start();
            prompt.get(schema, function (err, result) {
                switch (result['confirm'].toLowerCase()) {
                    case 'y':
                    case 'yes':
                        // File has already exist. Rewrite
                        _write(path, data, listener);
                        break;
                    case 'stop':
                    case 's':
                        // Stop generate configuration
                        listener(3, 'Configuration stopped');
                        break;
                    case 'no':
                    case 'n':
                    default:
                        // Skip and continue
                        listener(3, 'Configuration skipped');
                        break;
                }
            });
        } else {
            // File does not exist. Create a new
            _write(path, data, listener);
        }
    });
}

/**
 *
 * @param {string} path
 * @param {string} data
 * @param {listenerDone} listener
 * @private
 */
function _write(path, data, listener) {
    fs.writeFile(path, data, 'utf8', (error) => {
        if (error) {
            listener(2, error);
            return;
        }
        listener(1, path);
    });
}