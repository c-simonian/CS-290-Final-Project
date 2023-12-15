import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoAddCircle } from "react-icons/io5";

import RestaurantList from '../components/RestaurantList';
import { Link } from 'react-router-dom';

function RestaurantsPage({ setRestaurant }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [restaurants, setRestaurants] = useState([]);

    // RETRIEVE the entire list of restaurants
    const loadRestaurants = async () => {
        const response = await fetch('/restaurants');
        const restaurants = await response.json();
        setRestaurants(restaurants);
    } 
    

    // UPDATE a single restaurant
    const onEditRestaurant = async restaurant => {
        setRestaurant(restaurant);
        redirect("/update");
    }


    // DELETE a single restaurant  
    const onDeleteRestaurant = async _id => {
        const response = await fetch(`/restaurants/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/restaurants');
            const restaurants = await getResponse.json();
            setRestaurants(restaurants);
        } else {
            console.error(`Sucessfully deleted Restaurant. = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the restaurants
    useEffect(() => {
        loadRestaurants();
    }, []);

    // DISPLAY the restaurants
    return (
        <>
            <h2>List of Restaurants</h2>
            <p>Enjoy the list of restaurants and ratings. Please feel free to add to the list.</p>
            <Link to="/create" style={{ textDecoration: 'none' }}>
                <IoAddCircle style={{ verticalAlign: 'middle', marginRight: '5px' }} />
                Add Restaurant</Link>
            <RestaurantList
                restaurants={restaurants} 
                onEdit={onEditRestaurant} 
                onDelete={onDeleteRestaurant} 
        
            />
        </>
    );
}

export default RestaurantsPage;