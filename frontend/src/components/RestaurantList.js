import React from 'react';
import Restaurant from './Restaurant';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function RestaurantList({ restaurants, onDelete, onEdit }) {
    return (
        <table id="restaurant">
            <caption>List of Restaurants </caption> 
            <thead>
                <tr>
                    <th>Delete</th>
                    <th>Edit</th>
                    <th>Name</th>
                    <th>Cuisine</th>
                    <th>Location</th>
                    <th>Rating</th>
                    <th>Review Date</th>
                </tr>
            </thead>
            <tbody>
                {restaurants.map((restaurant, i) => 
                    <Restaurant
                        restaurant={restaurant} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />)}
            </tbody>
        </table>
    );
}

export default RestaurantList;
