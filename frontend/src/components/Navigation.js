import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// Change the function names and links
// to fit your portfolio topic.

function Navigation() {
  return (
    <nav className="global">
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <NavLink to="/">Home </NavLink>
        <NavLink to="/topics">Topics</NavLink>
        <NavLink to="/restaurants">Restaurants</NavLink>
    </nav>
  );
}
export default Navigation;
