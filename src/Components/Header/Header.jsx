import { useState, useEffect, useContext } from "react"; 
import PropTypes from 'prop-types';
import {Link, NavLink} from "react-router-dom"
import { ReactComponent as BasketIcon } from "./icons/basketIcon.svg";
import { ReactComponent as FavoriteIcon } from "./icons/favoriteIcon.svg";
import './Header.scss'


function Header (props) {
     const { countFavorit, countBasket } = props  
         return (
            <header className='header'>
                <div className='header__nav'>
                    <div className="header__nav--item">
                        <img src="https://static.tildacdn.com/tild3937-3261-4630-b235-343635633134/logo_white_mini.png" alt="photo" />
                        <div className='header__nav--item--icon'>
                            <div>
                                <NavLink to="/" activeClassName="active" className="icon-page">
                                <p>Main Page</p>
                                </NavLink>
                            </div>
                            <div className='header__nav--item--icon--basket'>
                                <NavLink to="/basket" activeClassName="active" className="icon-page">
                                <span className='count-basket'>{countBasket}</span>
                                <BasketIcon/>
                                </NavLink>
                            </div>
                            <div className='header__nav--item--icon--favorites'>
                                <NavLink to="/favorites" activeClassName="active" className="icon-page">
                                <span className='count-favorites'>{countFavorit}</span>
                                <FavoriteIcon/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                <h1 className='header__name'>COFFEE <br /> TIME</h1>
            </header>
        )
    
}

 Header.propTypes = {
	countBasket: PropTypes.number,
    countFavorit: PropTypes.number
}; 


export default Header
