import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './BurgerMenu.css';

const BurgerMenu = () => {
  return (
    <Menu>
      <a id="home" className="menu-item" href="#home">Home</a>
      <a id="about" className="menu-item" href="#about">About</a>
      <a id="services" className="menu-item" href="#services">Services</a>
      <a id="contact" className="menu-item" href="#contact">Contact</a>
    </Menu>
  );
};

export default BurgerMenu;


