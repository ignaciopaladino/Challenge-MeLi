import React from 'react';
import { Link } from "react-router-dom";
import SearchBar from '../SearchBar'
import Logo from '../../assets/img/Logo_ML.png';

const Header = props => {

    return (
      <header>
        <div className='header-container'>
          <Link to={'/'} tabIndex="1">
              <img 
                  alt='Logo Mercado Libre'
                  src={Logo} />
          </Link>
          <SearchBar/>
        </div>
      </header> 
    );

}

export default Header;