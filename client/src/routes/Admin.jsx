import React from "react";
import Header from "../components/Header";
import AddRestaurant from "../components/AddRestaurant";
import RestaurantList from "../components/RestaurantList";
import SearchRestaurant from "../components/SearchRestaurant";

const Admin = () => {
  return (
    <div>
      <Header />
      <AddRestaurant />
      <RestaurantList />
      <SearchRestaurant />
    </div>
  );
};

export default Admin;
