import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";


export const EditRestaurantPageTable = ({ restaurant }) => {
 
    const [restaurantName, setRestaurantName]  = useState(restaurant.restaurantName);
    const [cuisine, setCuisine]                = useState(restaurant.cuisine);
    const [location, setLocation]              = useState(restaurant.location);
    const [rating, setRating]                  = useState(restaurant.rating);
    const [reviewDate, setReviewDate]          = useState(restaurant.reviewDate);
    
    const redirect = useNavigate();

    const editRestaurant = async () => {
        const response = await fetch(`/restaurants/${restaurant._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                restaurantName: restaurantName,
                cuisine: cuisine,
                location: location,
                rating: rating,
                reviewDate: reviewDate
            }),
            headers: {
                'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Successfully edited Restaurant`);
        } else {
            const errMessage = await response.json();
            alert(`Could not edit Restaurant. ${response.status}. ${errMessage.Error}`);
        }
        redirect("/restaurants");
    }

    return (
        <>
        <article>
            <h2>Edit a Restaurant</h2>
            <p>Paragraph about this page.</p>
            <table id="restaurants">
                <caption>Which Restaurant are you editing?</caption>
                <thead>
                    <tr>
                        <th>Restaurant Name</th>
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
                            placeholder="Restaurant Name"
                            value={restaurantName}
                            onChange={e => setRestaurantName(e.target.value)} 
                            id="restaurantName" />
                    </td>

                    <td><label htmlFor="cuisine"></label>
                        <input
                            type="text"
                            value={cuisine}
                            placeholder="Cuisine"
                            onChange={e => setCuisine(e.target.value)} 
                            id="cuisine" />
                    </td>

                    <td><label htmlFor="location"></label>
                        <input
                            type="text"
                            value={location}
                            placeholder="Location"
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
                            onClick={editRestaurant}
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
export default EditRestaurantPageTable;