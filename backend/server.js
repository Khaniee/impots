const http = require('http');
const app = require('./app');
const dotenv = require('dotenv');

dotenv.config();

app.set('port', process.env.PORT || 3000);

const server = http.createServer(app);

server.listen(process.env.PORT || 3000, process.env.HOST || '127.0.0.1', function() {
    console.log(`Server started listen on : http://${process.env.HOST || '127.0.0.1'}:${server.address().port}`)
});
