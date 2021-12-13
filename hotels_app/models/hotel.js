const mongoose = require('mongoose')

const HotelSchema = new mongoose.Schema(
    {
      name: {
          type: String,
          required: true,
          unique: true
      },
      location: {
          type: String,
      },
      rating: {
          type: Number,
          max: 5
      },
      vacancies: {
          type: Boolean,
      },
      tags:[
          'Best Hotel 2020'
      ],
      rooms: [
          {
              roomNumber: Number,
              size: String,
              price: Number,
              booked: Boolean
            },
        ],
    },
    {timestamps: true}
    
)

const Hotel = mongoose.model('Hotel', HotelSchema)

module.exports = Hotel