import React, { useState } from 'react';
import { RxHamburgerMenu  } from "react-icons/rx";

const Home = () => {
  // Estado para almacenar la fecha seleccionada
 
  return (
    <div className='App'>
      <header className='header'>  
      <div className='navbar' >
             <RxHamburgerMenu  fontSize={60} color='white' />
      </div>
      <div className='header__group'>
        <div class="header__logo header__logo--top logo ">
            <img src="https://www.clickclackhotel.com/uploads/chain/1/logos/logo_2.png" alt="Click Clack Hoteles " title="Click Clack Hoteles  " class="header__logo-img logo__img" width="200" height="72"/>
        </div> 
        <div className="header__engine-button engine-button"   > 
          <button className='header__engine-button-link engine-button__link'>
            Reservar ahora 
          </button>
        </div>
        <div className="header__engine-button engine-button"   > 
          <button className='header__engine-button-link engine-button__link'>
            Experiencia 
          </button>
        </div>
        </div> 
      </header>
    
    <iframe
      className='video-iframe'
      src="https://www.youtube.com/embed/tNXrS7enMCo?autoplay=1&loop=1&controls=0&mute=1&playlist=tNXrS7enMCo"
    ></iframe>

<footer class="footer">
  <button className='Button-menu' >Menu</button>
</footer>
  </div>
  );
};

export default Home;
