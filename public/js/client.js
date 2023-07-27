var socket = io.connect('http://localhost:5000/');
const ip_name = document.getElementById('name');
const ip_room= document.getElementById('room');
const btn_join = document.getElementById('btn_join');

const ip_message = document.getElementById('ip_message');
const btn_send = document.getElementById('btn_send');

socket.on('connect', (socket)=>{
    console.log(data);
})

btn_join.addEventListener('click', ()=>{ 
    const room = ip_room.value
    socket.emit("join", room)
})

btn_send.addEventListener('click', ()=>{
    const message = ip_message.value
    socket.emit("message", message)
})

socket.on('thread', function(data){
    console.log(data);
}) 

