var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.send('<h1>Hello</h1>');
});

io.on('connection', socket => {
    console.log('a user connected');
    socket.on('chat message', msg => {
        console.log('message: ' + JSON.stringify(msg));
        io.emit('chat message', msg);
    });
    socket.on('add topic', topic => {
        console.log('topic: ' + topic);
        io.emit('add topic', topic);
    })
});

http.listen(3001, () => {
    console.log('listening on *:3001');
});