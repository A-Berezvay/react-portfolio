import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <header>
        <a href="/"><h1>Albert Berezvay</h1></a>
         <nav>
             <ul>
                 <li><a className="header-navigation" href="/about">About</a></li>
                 <li><a className="header-navigation" href="/project">Projects</a></li>
                 <li><a href="/contact"><button>Contact</button></a></li>
                 <i id="close-button" className="fa-solid fa-xmark"></i>
             </ul>
             <i id="menu-button" className="fa-solid fa-bars"></i>
         </nav>
     </header>
    );
}

export default Header;
