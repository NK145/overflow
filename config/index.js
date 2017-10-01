'use strict'

const defaultConfig = require('./default');
const development = require('./development');
const production = require('./production');

/**
 * Loads configuration based on NODE_ENV variable
 */
function loadConfig() {
    switch(process.env.NODE_ENV) {
        case 'development':
            return Object.assign({}, defaultConfig, development);
        break;
        case 'production':
            return Object.assign({}, defaultConfig, production);
        break;
        default:
            console.log('No NODE_ENV set. Will use default config');
            return defaultConfig;
    }
}

module.exports = loadConfig();
