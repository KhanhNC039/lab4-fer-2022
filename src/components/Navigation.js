import React from "react";
// import { useContext } from "react";
import { Link } from "react-router-dom";
// import { ThemeContext } from "./ThemeContext";
import { Navbar, NavItem, Icon } from "react-materialize";

export default function Navigation() {
  return (
    <Navbar
      className="teal lighten-2"
      alighLinks="right"
      brand={<span className="brand-logo">Movie Menu</span>}
      id="mobile-nav"
      menuIcon={<Icon>Menu</Icon>}
    >
      <ul>
        <li ><Link to="/"><Icon left>home</Icon>Home</Link></li>
        <li ><Link to="/about"><Icon left>info_outline</Icon>About</Link></li>
        <li ><Link to="/new"><Icon left>dvr</Icon>New</Link></li>
        <li href='/contact'><Link to="/contact"><Icon left>contacts</Icon>Contact</Link></li>
      </ul> 
    </Navbar>
  );
}

//   const { theme, toggle, dark } = useContext(ThemeContext)
//   return (

//   <ul className='navigation-ul' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>

//       <li><Link to ="/" className='active' href='#home'>Home</Link></li>
//       <li><a href='#gernal' >TV Series</a></li>
//       <li><a href='#add'  >Movies</a></li>
//       <li><a href='#login'  >Login</a></li>
//       <li><Link to='Contact'  >Contact</Link></li>

//       <li><a className='switch-mode' onClick={toggle}
//           style={{
//             backgroundColor: theme.backgroundColor,
//             color: theme.color,

//           }} data-testid="toggle-theme-btn"
//       >
//           {!dark ? 'Dark' : 'Light'} mode
//          </a></li>
//   </ul>
//   )
// }
