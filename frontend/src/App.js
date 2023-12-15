// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation.js';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 


// import Product from './data/products.js;
import HomePage from './pages/HomePage.js';
import TopicsPage from './pages/TopicsPage.js';
import RestaurantsPage from './pages/RestaurantsPage.js';

// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design:
import AddRestaurantPageTable from './pages/AddRestaurantPageTable.js';
import EditRestaurantPageTable from './pages/EditRestaurantPageTable.js';



// If your schema requires SHORT data input, then use the TABLE design.
// import AddRestaurantPageForm from './pages/AddRestaurantPageForm.js';
// import EditRestaurantPageForm from './pages/EditRestaurantPageForm.js';


// Define the function that renders the content in Routes, using State.
function App() {

  const [restaurant, setRestaurant] = useState([])

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>
              Christian <i><img src="/favicon-32x32.png" className="App-logo" alt="App Logo"/> </i> Simonian
            </h1>

            <p>Welcome to my Portfolio website</p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}

                    <Route path="/topics" element={<TopicsPage  />} />
                    <Route path="/" element={<HomePage  />} />
                 
                     <Route path="/restaurants" element={<RestaurantsPage setRestaurant={setRestaurant} />} />
                     <Route path="/create" element={<AddRestaurantPageTable />} />   
                     <Route path="/update" element={<EditRestaurantPageTable restaurant={restaurant} />} />
                     

                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2023 Christian Simonian</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;