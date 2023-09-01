import React from 'react';
import './Menu.css';
import { ThemeContext } from '../../../../context/ThemeContext';
import { Cross as Hamburger } from 'hamburger-react'; //https://hamburger-react.netlify.app/


const Menu = ({ showNavbar,
               setShowNavbar,
                AppMenuContainer,
                  MenuContainer,
                  setIsScroll,
                  isScroll,
                  displayText,
                  displayIcon }) => {
  
  const handleClick = () => {
    setShowNavbar(!showNavbar);
    console.log("menu is clicked");
    
  };
  return (
    <ThemeContext.Consumer>
      {theme => (
        <div style={{...AppMenuContainer,...MenuContainer}}
                     className='menu_container'
                      >
              {displayText && 
              <span onClick={handleClick} style={{color: 'gray',
                            fontWeight: '500',
                            fontFamily: 'Clash Display, sans-serif'}}>
              MENU</span>}
              {displayIcon &&  
              <Hamburger toggle={setShowNavbar} 
              color= {showNavbar? '#fafafa': '#fafafa' }
              toggled={showNavbar} 
              hideOutline={false}
              distance='sm' duration={0.3} size={16} />}
        </div>
      )}
    </ThemeContext.Consumer>
  );
};

export default Menu;