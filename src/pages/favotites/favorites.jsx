import {Link, NavLink} from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux'
import { useState, useEffect, useCallback } from "react"; 
import { sendRequest } from "../../Helpers/getData";
import {actionFetchFavoritesPage} from '../../actions'
import {selectorFavorites, selectorLoading} from '../../selectors'


import './favorites.scss'

function Favorites ({ handlerFavorite}){
    
    const favorites = useSelector(selectorFavorites) 
    const loading = useSelector(selectorLoading) 
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(actionFetchFavoritesPage())
    }, [localStorage.getItem('favorites')])




    const card = favorites?.length && favorites.map(({ name, img, article, color, id, price }) => (
        <div key={id} id={id} className='coffee-machines__items'>
        <div className="biger-size">
        <img src={img} alt="photo" />
        </div>
        <p className='coffee-machines__items--header'>{name}
        <span className='favorite-icon'>  
        <svg height="23" width="23" fill='grey' className='star2' onClick={()=>{
            handlerFavorite({ name, img, article, color, id, price });
            }} >
                <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
            </svg>
             </span>
        </p>
        <p className='coffee-machines__items--color'> Color: {color}</p>
        <p className='coffee-machines__items--article'>Article: {article}</p>
        <p className='coffee-machines__items--price'>Prise: {price} ₴</p>
    </div>
    ))
    
    if(favorites?.length){
        return(
            loading ? 'loading' : <div className="basket-items">{card}</div>
          
        ) 
    }else{
        return(
            loading ? 'loading' : <div className="basket-items"><p>Please chose some items</p></div>
        ) 
    }
  
}

export default Favorites