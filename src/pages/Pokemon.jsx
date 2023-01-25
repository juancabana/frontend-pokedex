import React from 'react'
import "./../styles/home.css";
import Navbar from '../components/organisms/Navbar';
import InfoPokemon from '../components/organisms/InfoPokemon';



const Pokemon = () => {
  return (
    <div className='pokemon'>
      <Navbar isPokemon={true}/>
      <InfoPokemon/>

    </div>
  )
}

export default Pokemon