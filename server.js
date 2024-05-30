const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const connectDB = require('./config/db');
const stateRoutes = require('./routes/stateRoutes');
const handleSocketConnection = require('./sockets/stateSocket');
const logger = require('./utils/logger');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://192.168.100.4:3000", // Replace with your local IP address
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  }
});

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json());
app.use(logger); // Optional logger middleware

// Routes
app.use('/api', stateRoutes);

// Socket.io
handleSocketConnection(io);

const PORT = process.env.PORT || 5000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
