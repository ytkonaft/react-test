import openSocket from 'socket.io-client';
const  socket = openSocket('http://localhost:3000');

const subscribe = (callback) => {
  socket.on('data', data => {
    callback(data)
  })
  socket.emit('connection');
}

const unSubscribe = () => {
    console.log('disconnect')
    socket.emit('disconnect');
  }

export { subscribe, unSubscribe };