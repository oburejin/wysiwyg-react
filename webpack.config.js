
var path = require('path');

module.exports = (env) => {
    return require('./config/webpack.config.' + env + '.js')({env: env});
}