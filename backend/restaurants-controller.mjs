// Controllers for the restaurants Collection

import 'dotenv/config';
import express from 'express';
import * as restaurants from './restaurants-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/restaurants', (req,res) => { 
    restaurants.createRestaurant(
        req.body.restaurantName, 
        req.body.cuisine, 
        req.body.location,
        req.body.rating,
        req.body.reviewDate
        )
        .then(restaurant => {
            console.log(`"${restaurant.restaurantName}" was added to the collection.`);
            res.status(201).json(restaurant);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Failed to add to collection. Please provide valid information.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/restaurants', (req, res) => {
    restaurants.retrieveRestaurants()
        .then(restaurants => { 
            if (restaurants !== null) {
                console.log(`Successfully retrieved all restaurants from the collection.`);
                res.json(restaurants);
            } else {
                res.status(404).json({ Error: 'No restaurants found in the collection.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Validation error. Failed to retrieve restaurants.' });
        });
});


// RETRIEVE by ID controller
app.get('/restaurants/:_id', (req, res) => {
    restaurants.retrieveRestaurantByID(req.params._id)
    .then(restaurant => { 
        if (restaurant !== null) {
            console.log(`"${restaurants.restaurantName}" retrieved successfully based on its ID.`);
            res.json(restaurant);
        } else {
            res.status(404).json({ Error: `No restaurant found with ID ${req.params._id}. Unable to retrieve.` });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Validation error. Please ensure data meets specified criteria.' });
    });

});


// UPDATE controller ************************************
app.put('/restaurants/:_id', (req, res) => {
    restaurants.updateRestaurant(
        req.params._id,
        req.body.restaurantName, 
        req.body.cuisine, 
        req.body.location,
        req.body.rating,
        req.body.reviewDate
    )
    .then(restaurant => {
        console.log(`"${restaurants.restaurantName}" was updated.`);
        res.json(restaurant);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Unable to update.' });
    });
});


// DELETE Controller ******************************
app.delete('/restaurants/:_id', (req, res) => {
    restaurants.deleteRestaurantById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} restaurants was deleted.`);
                res.status(200).send({ Success: 'Restaurant deleted.' });
            } else {
                res.status(404).json({ Error: `No restaurant found with ID ${req.params._id}. Unable to delete.` });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Internal server error. Unable to delete the restaurant.'});
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});