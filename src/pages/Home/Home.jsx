import React, { useEffect, useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreRestaurent from '../../components/ExploreRestaurent/ExploreRestaurent';

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);

  // Fetching restaurant data from API
  useEffect(() => {
    fetch('http://localhost:3000/restaurents')
      .then(response => response.json())
      .then(data => setRestaurants(data))
      .catch(error => console.error('Error fetching restaurants:', error));
  }, []);

  return (
    <div>
      <Header />
      <ExploreRestaurent />
      <div className='restaurant-list'>
        {restaurants.map(restaurant => (
          <article key={restaurant.id} className='restaurant'>
            <img src={restaurant.image} alt={restaurant.name} className='restaurant-image' />
            <div className='restaurant-details'>
              <h2>{restaurant.name}</h2>
              <p>{restaurant.description}</p>
              <p><strong>Place:</strong> {restaurant.place}</p>
              <p><strong>Category:</strong> {restaurant.category}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Home;
