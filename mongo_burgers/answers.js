// create 5 burgers (at least 3 should be beef)
db.burger.insert(
    {
      meat: 'beef',
      cheese: false,
      toppings: ['ketchup' ,'onions' ,'pickles']
    }
)
db.burger.insert(
    {
      meat: 'beef',
      cheese: true,
      toppings: ['ketchup' ,'mayo' ,'pickles']
    }
)
db.burger.insert(
    {
      meat: 'turkey',
      cheese: false,
      toppings: ['ketchup' ,'sauteed onions' ,'pickles']
    }
)
db.burger.insert(
    {
      meat: 'beyond burger',
      cheese: true,
      toppings: ['ketchup' ,'onions' ,'pickles']
    }
)
db.burger.insert(
    {
      meat: 'chicken',
      cheese: false,
      toppings: ['ketchup' ,'green pepper','pickles']
    }
    )

// find all the burgers

db.burger.find().pretty()

// show just the meat of each burger

db.burger.find({}, {meat: 1, _id:0}).pretty()

// show just the toppings of each burger

db.burger.find({}, {toppings:1, _id:0}).pretty()

// show everything but the cheese

db.burger.find({}, {cheese:0, _id:0}).pretty()

// find all the burgers with beef

db.burger.find({}, {meat: 'beef', _id:0}).pretty()

// find all the burgers that are not beef

db.burger.find({meat:{$ne: 'beef'}, _id:0}).pretty()
db.burger.find({meat:{$ne: 'beef'}}).pretty()

// find the first burger with cheese

db.burger.findOne({cheese:true}).pretty()

// find one and update the first burger with cheese to have a property of 'double cheese'

db.burger.updateOne({cheese: true},{$set: { cheese: 'double cheese'}}).pretty()

// find the burger you updated to have double cheese

db.burger.find({cheese:'double cheese'}).pretty()

// find and update all the beef burgers to be 'veggie'

db.burger.updateMany({meat:'beef'}, {$set: {meat:'veggie'}}).pretty()

// delete one of your veggie burgers
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})

db.burger.deleteOne({meat:'veggie'}).pretty()
// or
db.burger.remove({meat:'veggie'}, {justOne: true}).pretty()

// drop the collection
//Expected Output
//true
db.burger.drop()
// drop the database
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }
db.dropDatabase()

//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database


//
// Change the name of the key cheese to 'pumpkinSpice'

db.burger.updateMany({},{$rename: {cheese:'pumpkinSpice'}})

// find all the burgers with ketchup (or another topping you used at least once)

db.burger.find({toppings: 'ketchup'}).pretty()

// find all the burgers with pickles (or a topping you used more than once) and remove the pickles

db.burger.updateMany({toppings: 'pickles'}, {$pull: {toppings: 'pickles'}}).pretty()

// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact

db.burger.updateMany({meat: 'beef'}, {$push: {toppings: 'eggs'}})

//Add a price to each burger, start with $5.00 for each burger 

db.burger.updateMany({}, {$set:{price:5}})
