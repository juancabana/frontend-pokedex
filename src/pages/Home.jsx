import React from "react";
import Navbar from "../components/organisms/Navbar";
import ListPokemons from "../components/organisms/ListPokemons";
import "./../styles/global.css";
import './../styles/home.css'


const Home = () => {

  return (
    <div className="home">
      <Navbar/>
      <ListPokemons/>
      
    </div>
  );
};

export default Home;
