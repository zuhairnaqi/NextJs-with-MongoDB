const mongoose = require('mongoose');

const connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        console.log('db is connected already');
        return;
    }
    console.log('process.env.MONGO_URI', process.env.MONGO_URI);
    const db = await mongoose.connect(process.env.MONGO_URI)
    connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;