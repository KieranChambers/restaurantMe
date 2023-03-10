import React, { useEffect, useState } from 'react';

const RestaurantHandler = ({ latitude, longitude }) => {
  const divStyle = {
    textAlign: 'left',
  };

  const [restaurants, setRestaurants] = useState([]);

  const radius = 5000;
  const type = 'restaurant';
  const rating = 4;

  const options = {
    method: 'GET',
    mode: 'cors',
  };

  const fetchRestaurantData = () => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&type=${type}&key=${process.env.REACT_APP_GOOGLE_PLACES_API_KEY}`,
      options
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        setRestaurants(data.results);
      });
  };

  useEffect(() => {
    fetchRestaurantData();
  });

  return (
    <div style={divStyle}>
      {restaurants.length > 0 && (
        <ul>
          {restaurants.map(
            restaurant =>
              restaurant.rating > rating &&
              restaurant.business_status === 'OPERATIONAL' && (
                <div key={restaurant.name}>
                  <div>
                    ⭐{restaurant.rating} - {restaurant.name} -{' '}
                    {restaurant.vicinity}
                  </div>
                </div>
              )
          )}
        </ul>
      )}
    </div>
  );
};

export default RestaurantHandler;
