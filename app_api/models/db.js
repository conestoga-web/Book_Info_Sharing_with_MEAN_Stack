const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://password:username@cluster0-dzlor.mongodb.net/test?retryWrites=true&w=majority';

mongoose.Promise = global.Promise;
mongoose.connect(dbURI, {dbName: 'projectDB'});

mongoose.connection.on('connected', () => {
    //console.log(`Mongoose connected to ${dbURI}`);
    console.log(`Welcome to bookDB`);
});
mongoose.connection.on('error', err => {
    console.log(`Mongoose connection error: ${err}`);
});
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});
const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close( () => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};

// For nodemon restarts
process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
// For app termination
    process.on('SIGINT', () => {
        gracefulShutdown('app termination', () => {
            process.exit(0);
        });
    });
// For Heroku app termination
    process.on('SIGTERM', () => {
        gracefulShutdown('Heroku app shutdown', () => {
            process.exit(0);
        });
    });
});

const book = require('./book');
const user = require('./user');
