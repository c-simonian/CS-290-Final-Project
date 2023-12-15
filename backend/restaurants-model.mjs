// Models for the Restaurant Collection

// Import dependencies.
import mongoose, { now } from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error:'500: Server Error.' });
    } else  {
        console.log('200: Connected to MongoDB Restaurants collection.');
    }
});

// SCHEMA: Define the collection's schema.
const restaurantsSchema = mongoose.Schema({
	restaurantName:    { type: String, required: true },
	cuisine:     { type: String, required: true },
	location: { type: String, required: true },
    rating: {   type: Number, 
                required: true, 
                default: 1,
                min: [1, 'Please provide a rating 1-10.'],
                max: [10, 'Please provide a rating 1-10.']},
    reviewDate: {  type: Date, 
                    required: true, 
                    min: '2023-11-01',
                    default: Date.now}
});

// Compile the model from the schema 
// by defining the collection name "Restaurants".
const restaurants = mongoose.model('Restaurants', restaurantsSchema);


// CREATE model *****************************************
const createRestaurant = async (restaurantName, cuisine, location, rating, reviewDate) => {
    const restaurant = new restaurants({ 
        restaurantName: restaurantName, 
        cuisine: cuisine, 
        location: location,
        rating: rating,
        reviewDate: reviewDate
    });
    return restaurant.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveRestaurants = async () => {
    const query = restaurants.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveRestaurantByID = async (_id) => {
    const query = restaurants.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteRestaurantById = async (_id) => {
    const result = await restaurants.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateRestaurant = async (_id, restaurantName, cuisine, location, rating, reviewDate) => {
    const result = await restaurants.replaceOne({_id: _id }, {
        restaurantName: restaurantName,
        cuisine: cuisine,
        location: location,
        rating: rating,
        reviewDate: reviewDate
    });
    return { 
        _id: _id, 
        restaurantName: restaurantName,
        cuisine: cuisine,
        location: location,
        rating: rating,
        reviewDate: reviewDate
    }
}

// EXPORT the variables for use in the controller file.
export { createRestaurant, retrieveRestaurants, retrieveRestaurantByID, updateRestaurant, deleteRestaurantById }