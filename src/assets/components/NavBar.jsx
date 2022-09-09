import React from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'

const NavBar = () => {

  const links = [
  {
    id: 1,
    link: 'home'
  },
  {
    id: 2,
    link: 'about'
  },
  {
    id: 3,
    link: 'about'
  },
  {
    id: 4,
    link: 'about'
  },
]
  return (
  <div class="flex justify-between items-center w-full h-20 
 px-4 text-white bg-black fixed">
    <div>
        <h1 className="text-5xl font-signature ml-2"> Jor </h1>
    </div>

      <ul className="flex">
      {links.map(({id, link}) => (
        <li key = {id} className="px-4 cursor-pointer capitalize font-medium
        text-grey-500 hover:500 hover:scale-105 duration 200">
          {link}
          </li>
      ))}      
      </ul>
  </div>
  );
};

export default NavBar