import React, { useEffect, useContext, useState } from "react";
import { RestaurantsContext } from "../context/RestaurantsContext";
import { useHistory } from "react-router-dom";
import StarRating from "./StarRating";

const SearchRestaurant = () => {
  const { restaurants } = useContext(RestaurantsContext);
  let history = useHistory();
  const [searchRestaurant, setSearchRestaurant] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchPriceRange, setSearchPriceRange] = useState("");

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const restaurantName = restaurant.name.toLowerCase();
    const restaurantLocation = restaurant.location.toLowerCase();
    const restaurantPriceRange = restaurant.price_range.toString();

    const searchName = searchRestaurant.toLowerCase();
    const searchLoc = searchLocation.toLowerCase();
    const searchPrice = searchPriceRange.toString();

    return (
      (searchName === "" || restaurantName.includes(searchName)) &&
      (searchLoc === "" || restaurantLocation.includes(searchLoc)) &&
      (searchPrice === "" || restaurantPriceRange.includes(searchPrice))
    );
  });

  const handleRestaurantSelect = (id) => {
    history.push(`/restaurants/${id}`);
  };

  const renderRating = (restaurant) => {
    if (!restaurant.count) {
      return <span className="text-warning">0 reviews</span>;
    }
    return (
      <>
        <StarRating rating={restaurant.average_rating} />
        <span className="text-warning ml-1">({restaurant.count})</span>
      </>
    );
  };

  return (
    <div className="list-group">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name..."
          value={searchRestaurant}
          onChange={(e) => setSearchRestaurant(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Search by location..."
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
        />
        <select
              value={searchPriceRange}
              onChange={(e) => setSearchPriceRange(e.target.value)}
              className="custom-select my-1 mr-sm-2"
              placeholder="Search by price range..."
            >
              <option disabled>Price Range</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
        </select>
        {/* <input
          type="number"
          className="form-control"
          placeholder="Search by price range..."
          value={searchPriceRange}
          onChange={(e) => setSearchPriceRange(e.target.value)}
        /> */}
      </div>
      <table className="table table-hover table-dark">
        <thead>
          <tr className="bg-primary">
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Ratings</th>
          </tr>
        </thead>
        <tbody>
          {filteredRestaurants.length === 0 ? (
            <tr>
              <td colSpan="4">No matching restaurants found</td>
            </tr>
          ) : searchRestaurant.length === 0 && searchLocation.length === 0 && searchPriceRange.length ===0 ? (
            <tr>
              <td colSpan="4">Search something</td>
            </tr>
          ) :
           (
            filteredRestaurants.map((restaurant) => (
              <tr
                onClick={() => handleRestaurantSelect(restaurant.id)}
                key={restaurant.id}
              >
                <td>{restaurant.name}</td>
                <td>{restaurant.location}</td>
                <td>{"$".repeat(restaurant.price_range)}</td>
                <td>{renderRating(restaurant)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SearchRestaurant;
