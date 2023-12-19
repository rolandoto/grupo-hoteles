import React, { useEffect, useState } from 'react';
import { RxHamburgerMenu  } from "react-icons/rx";

const ItemSteep =({stocked,count,FilterStrepp}) =>{

  const valid =  FilterStrepp(stocked)
  if(valid) {
      return (
              <div  className={`circle  ${valid && "active"}`}></div>
      )
  } return   <div    className={`circle`}>{count}</div>
}

const Steep =({state,progressBarWidth}) =>{

  const FilterStrepp =(itemId) =>{
       return   state.some((itemSteep ) => itemSteep.count == itemId)
  }

  return (
      <header className="Header">
          <div>
              <div className="progress-container ">
                  <div className="progress" style={{width:progressBarWidth}} ></div>
                  {state.map((ItemStepp) => {
                  return  <ItemSteep key={ItemStepp.count} 
                          FilterStrepp={FilterStrepp}       
                          {...ItemStepp}  />
                  })}    
              </div>
          </div>
      </header>
  )
}

const Home = () => {
  
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const tuContenedor = document.getElementById('tuContenedor');
      const scrollPosition = tuContenedor.scrollTop;
      const sectionHeight = window.innerHeight;
      const newActiveStep = Math.floor(scrollPosition / sectionHeight);

      if (newActiveStep !== activeStep) {
        setActiveStep(newActiveStep);
      }
    };

    const tuContenedor = document.getElementById('tuContenedor');
    tuContenedor.addEventListener('scroll', handleScroll);

    return () => {
      tuContenedor.removeEventListener('scroll', handleScroll);
    };
  }, [activeStep]);

  console.log(activeStep)

  return (
    <div className='App' id='tuContenedor' >
      <header className='header'>  
      <div className='navbar' >
             <RxHamburgerMenu  fontSize={60} color='white' />
      </div>
      <div className='header__group'>
        <div className="header__logo header__logo--top logo ">
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
    
      <div className='sections' >
        <div className='section' >
            <iframe
            className='video-iframe'
            src="https://www.youtube.com/embed/tNXrS7enMCo?autoplay=1&loop=1&controls=0&mute=1&playlist=tNXrS7enMCo"
          ></iframe>
        </div>
      </div>
    <footer className="footer">
      <button className='Button-menu' >Menu</button>
    </footer>
  </div>
  );
};

export default Home;
