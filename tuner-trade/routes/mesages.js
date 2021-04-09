const express = require('express')
const messageRouter = express.Router()
const message = require('../models/message.js')
const Post = require('../models/')
const io = require('socket.io')



io.on('connection', (socket) => {

    // Get the last 10 messages from the database.
    Message.find().sort({createdAt: -1}).limit(10).exec((err, messages) => {
      if (err) return console.error(err);
  
      // Send the last messages to the user.
      socket.emit('init', messages);
    });
  
    // Listen to connected users for a new message.
    socket.on('message', (msg) => {
      // Create a message with the content and the name of the user.
      const message = new Message({
        content: msg.content,
        name: msg.name,
      });
  
      // Save the message to the database.
      message.save((err) => {
        if (err) return console.error(err);
      });
  
      // Notify all other users about a new message.
      socket.broadcast.emit('push', msg);
    });
  });


  io.use((socket, next) => {
    const username = socket.handshake.auth.username;
    if (!username) {
      return next(new Error("invalid username"));
    }
    socket.username = username;
    next();
  });
  
  io.on("connection", (socket) => {
    // fetch existing users
    const users = [];
    for (let [id, socket] of io.of("/").sockets) {
      users.push({
        userID: id,
        username: socket.username,
      });
    }
    socket.emit("users", users);
  
    // notify existing users
    socket.broadcast.emit("user connected", {
      userID: socket.id,
      username: socket.username,
    });
  
    // forward the private message to the right recipient
    socket.on("private message", ({ content, to }) => {
      socket.to(to).emit("private message", {
        content,
        from: socket.id,
      });
    });
  
    // notify users upon disconnection
    socket.on("disconnect", () => {
      socket.broadcast.emit("user disconnected", socket.id);
    });
  });