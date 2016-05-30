var app = require('http').createServer(handler);
var io = require('socket.io')(app);

app.listen(3000);

function handler(req, res) {
    res.writeHead(200);
    res.end('server');
}

io.on('connection', function (socket) {

    socket.emit('current_time', {time: Date.now()});

    socket.on('user_ask', function (data) {
        socket.emit('user_answer', {answer: 'hello user'});
    });
});