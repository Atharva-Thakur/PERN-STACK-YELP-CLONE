import React from "react";
import Header from "../components/Header";
import AddRestaurant from "../components/AddRestaurant";
import RestaurantList from "../components/RestaurantList";
import SearchRestaurant from "../components/SearchRestaurant";
import UserRestaurants from "../components/UserRestaurants";

const Home = () => {
  return (
    <div>
      <Header />
      <h1>Search Restaurants</h1>
      <SearchRestaurant />
      <h1>Available Restaurants</h1>
      <UserRestaurants />
      <h1>Add a Restaurant</h1>
      <AddRestaurant />
    </div>
  );
};

export default Home;
