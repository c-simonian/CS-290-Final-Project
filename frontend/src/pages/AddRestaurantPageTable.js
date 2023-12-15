import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddRestaurantPageTable = () => {

    const [restaurantName, setRestaurantName]  = useState('');
    const [cuisine, setCuisine]  = useState('');
    const [location, setLocation] = useState('');
    const [rating, setRating] = useState('');
    const [reviewDate, setReviewDate]  = useState('');
    
    const redirect = useNavigate();

    const addRestaurant = async () => {
        const newRestaurant = { restaurantName, cuisine, location, rating, reviewDate };
        const response = await fetch('/restaurants', {
            method: 'post',
            body: JSON.stringify(newRestaurant),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Sucessfully added a restaurant.`);
        } else {
            alert(`That input failed, due to missing data: = ${response.status}`);
        }
        redirect("/restaurants");
    };


    return (
        <>
        <article>
            <h2>Add a Restaurant</h2>
            <p>Paragraph about this page.</p>
            
            <table id="restaurants">
                <caption>Which Restaurant are you adding?</caption>
                <thead>
                    <tr>
                        <th>RestaurantName</th>
                        <th>Cuisine</th>
                        <th>Location</th>
                        <th>Rating</th>
                        <th>ReviewDate</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label htmlFor="restaurantName"></label>
                        <input
                            type="text"
                            placeholder="Cento Pasta Bar"
                            value={restaurantName}
                            onChange={e => setRestaurantName(e.target.value)} 
                            id="restaurantName" />
                    </td>

                    <td><label htmlFor="cuisine"></label>
                        <input
                            type="text"
                            value={cuisine}
                            placeholder="Italian"
                            onChange={e => setCuisine(e.target.value)} 
                            id="cuisine" />
                    </td>

                    <td><label htmlFor="location"></label>
                        <input
                            type="text"
                            placeholder="Los Angeles, CA"
                            value={location}
                            onChange={e => setLocation(e.target.value)} 
                            id="location" />
                    </td>

                    <td>
                    <label htmlFor="rating"></label>
                    <input
                        type="number"
                        value={rating}
                        placeholder="8"
                        onChange={e => setRating(e.target.value)} 
                        id="rating" />
                    </td>
                    
                    <td>
                    <label htmlFor="reviewDate"></label>
                    <input
                        type="date"
                        placeholder=""
                        value={reviewDate}
                        onChange={e => setReviewDate(e.target.value)} 
                        id="reviewDate" />
                    </td>

                    <td>
                    <label htmlFor="submit"></label>
                        <button
                            type="submit"
                            onClick={addRestaurant}
                            id="submit"
                        >Save</button>
                    </td>

                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddRestaurantPageTable;