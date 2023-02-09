import { Link, NavLink } from "react-router-dom"
import {useSelector, useDispatch} from 'react-redux'
import { useState, useEffect } from "react";
import { sendRequest } from "../../Helpers/getData";
import {actionFetchBasketPage} from '../../actions'
import {selectorBasket, selectorLoading} from '../../selectors'
import Forma from "../../Components/Forma";

import './basket.scss'

function Basket({openModalDeleteItem, handlerBasket }) {
    const basket = useSelector(selectorBasket) 
    const loading = useSelector(selectorLoading) 
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(actionFetchBasketPage())
    }, [localStorage.getItem('basket')])
 

    const card = basket.length && basket.map(({ name, img, article, color, id, price }) => (
        <div key={id} id={id} className='coffee-machines__items'>
            <div className="biger-size">
             <div className="close-basket-icon">
             <svg onClick={() => {
                openModalDeleteItem()
                handlerBasket({ name, img, article, color, id, price });
            }} width="36" height="36" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> </svg>
             </div>

            <img src={img} alt="photo" />
            </div>
          
            <p className='coffee-machines__items--header'>{name}

            </p>
            <p className='coffee-machines__items--color'> Color: {color}</p>
            <p className='coffee-machines__items--article'>Article: {article}</p>
            <p className='coffee-machines__items--price'>Prise: {price} ₴</p>
        </div>
    ))

    if (basket?.length) {
        return (
            <>
               <Forma/>
           {loading ? 'loading' : <div className="basket-items">{card}</div>}
        
            </>
        )
    } else {
        return (
            loading ? 'loading' : <div className="basket-items"><p>Please chose some items</p></div>

        )
    }


}

export default Basket