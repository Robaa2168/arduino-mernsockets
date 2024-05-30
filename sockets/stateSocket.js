//sockets/stateSocket.js 
const stateController = require('../controllers/stateController');
const State = require('../models/State');

const handleSocketConnection = (io) => {
  io.on('connection', (socket) => {
    console.log('a user connected');

    // Send initial states to the newly connected client
    State.find().then(states => {
      states.forEach(state => {
        socket.emit('stateUpdated', { id: state._id, state: state.state });
      });
    });

    socket.on('updateState', async (data) => {
      const { id, state } = data;
      const updatedState = await State.findByIdAndUpdate(id, { state }, { new: true });
      io.emit('stateUpdated', { id: updatedState._id, state: updatedState.state });
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
  });
};

module.exports = handleSocketConnection;

