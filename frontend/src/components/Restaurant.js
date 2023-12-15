import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { FaRegEdit } from "react-icons/fa";
import { BsFillTrash3Fill } from "react-icons/bs";



function Restaurant({ restaurant, onEdit, onDelete }) {
    return (
        <tr>
            {/* Update these icons to something that matches your style. */}
            <td><BsFillTrash3Fill onClick={() => onDelete(restaurant._id)} /></td>
            <td><FaRegEdit onClick={() => onEdit(restaurant)} /></td>
                        
            <td title="What is the name of the Restaurant?">{restaurant.restaurantName}</td>
            <td title="What is cuisine?">{restaurant.cuisine}</td>
            <td title="Where is it located">{restaurant.location}</td>
            <td title="What would you rate it out of 10?">{restaurant.rating}</td>
            <td title="When did you visit?">{restaurant.reviewDate.slice(0,10)}</td>

        </tr>
    );
}

export default Restaurant;