// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || 'localhost' || '127.0.0.1';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8088;

var cors_proxy = require('../lib/cors-anywhere.js');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    removeHeaders: ['cookie', 'cookie2'],
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
