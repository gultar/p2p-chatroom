// import express from 'express'
// import Http from 'http'
// import { Server } from "socket.io";
// import IP from 'ip'
// import cors from 'cors'
// import ioClient from 'socket.io-client'
// import { argv } from 'process'

// const app = express();
// const PORT = argv[2] || 7777;
// const remotePORT = argv[3] || 4444
// let users = [];
// const connectionToP2P = ioClient(`http://0.0.0.0:${remotePORT}`)
// connectionToP2P.on('connection', ()=>{})

// connectionToP2P.on('peerAddresses', (addresses)=>{
//   console.log(addresses)
// })

// connectionToP2P.on('messageFromPeer', (thing)=>{
//   console.log('thing', thing)
// })

// connectionToP2P.emit('getPeerAddresses')

// const httpServer = Http.createServer(app)

// app.use(cors());

// const io = new Server(httpServer, {
//     cors: {
//         origin: "http://localhost:3000"
//     }
// });

// //Add this before the app.get() block
// io.on('connection', (socket) => {
//     console.log(`⚡: ${socket.id} user just connected!`);
//     socket.on('message', (data) => {
//       console.log(data);
//       io.emit('messageResponse', data);
//       connectionToP2P.emit('messageFromUser', data)
//     });
//       //Listens when a new user joins the server
//     socket.on('newUser', (data) => {
//       //Adds the new user to the list of users
//       users.push(data);
      
//       //Sends the list of users to the client
//       io.emit('newUserResponse', users);
//     });
//     socket.on('disconnect', () => {
//       //Updates the list of users when a user disconnects from the server
//       users = users.filter((user) => user.socketID !== socket.id);
//       console.log('🔥: A user disconnected');
//       io.emit('newUserResponse', users);
//     });
// });

// app.get('/api', (req, res) => {
//   res.json({
//     message: 'Hello world',
//   });
// });



// httpServer.listen(PORT, () => {
//   console.log(`Server listening on ${PORT}`);
// });

import run from "../../p2p-node/server.js"
const PORT = 3333;
run(PORT)