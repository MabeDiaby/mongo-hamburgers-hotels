// Dependencies
const mongoose = require('mongoose');
const db = mongoose.connection
// Config
const mongoURI = 'mongodb://localhost:27017/hotel';

// Models
const Hotel = require('./models/hotel');
const hotelSeed = require('./models/seed');

mongoose
  .connect(mongoURI)
  .then(instance =>
    console.log(`Connected to db: ${instance.connections[0].name}`)
  )
  .catch(error => console.error('Connection failed', error));

  //   // Error / success
  db.on('error', err => console.log(err.message + ' is Mongod not running?'));
  db.on('connected', () => console.log('mongo connected: ', mongoURI));
  db.on('disconnected', () => console.log('mongo disconnected'));

// Hotel.create( hotelSeed, ( err , data ) => {
//   if ( err ) console.log ( err.message )
// console.log( "added provided hotel data" )
// }
// );

// Hotel.count({} , (err , data)=> {
//   if ( err ) console.log( err.message );
//    console.log ( `There are ${data} hotels in this database` );
// });

// Hotel.create(hotelSeed, (err, data) => {
//   if (err) throw err;

//   console.log('added provided data', data);
// });

// Hotel.count({}, (err, data) => {
//   if (err) throw err;

//   console.log(`There are ${data} hotels in this database.`);
// });

// mongoose.Promise = global.Promise
// const db = mongoose.connection

// // HOMEWORK : ------------------------------------

// CRUD


// C -  Create:
// Hotel.create(
//   {
//   name: 'Hiltons',
//   location: 'London, UK',
//   rating: 5,
//   vacancies: true,
//   rooms: [
//     {
//       roomNumber: 333,
//       size: 'King',
//       price: 1253,
//       booked: true 
//     },
//     {
//       roomNumber: 110,
//       size: "Twin",
//       price: 757,
//       booked: false,
//     },
//     {
//       roomNumber: 305,
//       size: "Queen",
//       booked: true,
//     },
//     {
//       roomNumber: 1111,
//       size: "Penthouse Condo",
//       price: 10200,
//       booked: false,
//     },
//   ],
//   tags: ['Best Hotel 2021'],
// },
//   (err, data) => {
//     if ( err ) {
//     console.log(data);
//     } else {
//       console.log("Success");
//     }
//   } 
//   )

Hotel.count({} , (err , data)=> {
  if ( err ) console.log( err.message );
  console.log ( `There are ${data} hotels in this database` );
});

// Read

// Hotel.find({},(err, data) => {
//    if(err) {
//       console.log(err.message);
//     }
//     console.log(data)
// })

// Hotel.find({},{name: 1},(err, data) => {
//    if(err) {
//       console.log(err.message);
//     }
//     console.log(data)
// })

// Hotel.find({name: 'Hiltons'},(err, data) => {
//    if(err) {
//       console.log(err.message);
//     }
//     console.log(data)
// })

// Hotel.find({vacancies: true}, {ratings: 0}, (err, data) => {
//    if(err) {
//       console.log(err.message);
//     }
//     console.log(data)
// })

// Delete

Hotel.deleteOne({name: 'Hotelicopter'}, (err , data) => {
  if(err) {
    console.log(err.message);
  }
  console.log(data)
})

Hotel.deleteOne({name: "Hilbert's Hotel"}, (err , data) => {
  if(err) {
    console.log(err.message);
  }
  console.log(data)
})

Hotel.findOneAndRemove({location: 'Colorado Rockies'}, (err , data) => {
    if(err) {
      console.log(err.message);
    }
    console.log(data)
})

Hotel.count({} , (err , data)=> {
  if ( err ) console.log( err.message );
  console.log ( `There are ${data} hotels in this database` );
});
