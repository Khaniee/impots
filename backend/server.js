const http = require('http');
const app = require('./app');

app.set('port', process.env.PORT || 3000);

const server = http.createServer(app);

server.listen(process.env.PORT || 3000, function() {
    console.log('Listen on port : http://localhost:3000')
});
