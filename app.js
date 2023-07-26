const express = require('express');
const bodyParser = require('body-parser');
const app = express();  
const http = require('http');
const server = http.createServer(app); 
const {Server} = require("socket.io");
const io = new Server(server);
const port = 5000;

// Thiết lập body-parsers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());


app.use(express.json());
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', 'views')

io.on("connection", function(client){
    console.log("có người kết nối");
    var room; //phòng chat

    //tham gia chat 
    client.on("join", function(data){
        room = data;
        client.join(room);
    })
    client.on("message", function(data){
        io.to(room).emit("thread", data)
    })
})

app.get('/chat', (req, res) => {
    return res.render("chat.ejs");
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})