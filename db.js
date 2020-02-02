const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let isConnected;
module.exports = connectToDatabase = () => {
 if (isConnected) {
   console.log('=> using existing database connection');
   return Promise.resolve();
 }
 console.log('=> using new database connection');
 const con = 'mongodb+srv://neelsgupta:Vopaktechnical@cluster-stzav.mongodb.net/test?retryWrites=true&w=majority';
 return mongoose.connect(con)
   .then(db => {
     isConnected = db.connections[0].readyState;
   });
};