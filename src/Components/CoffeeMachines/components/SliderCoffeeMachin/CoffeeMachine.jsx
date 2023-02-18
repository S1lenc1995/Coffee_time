import { useState, useEffect,  useContext } from "react";
import {useSelector, useDispatch} from 'react-redux'
import {actionFetchCoffeeMachines} from '../../../../actions'
import {selectorCoffeeMachines, selectorLoading, selectorBasket} from '../../../../selectors'
import { CoffeMachineContext } from "../../../../context"
import {ReactComponent as InBasket} from "./img/ok.svg"
import PropTypes from 'prop-types';

import "./CoffeeMatchines.scss"

const SliderCoffeeMachine = ({ handlerFavorite, handlerBasket, openModal, favorites }) => {
    const {display} = useContext(CoffeMachineContext)
    const coffeeMachines = useSelector( selectorCoffeeMachines) 
    const loading = useSelector( selectorLoading) 
    const basket = useSelector(selectorBasket)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(actionFetchCoffeeMachines())
    }, [])

    const favoriteId = favorites?.map(({id})=>{
        return id
    })
    const basketId = basket?.map(({id})=>{
        return id
    })

   

 
        const item = coffeeMachines.length && coffeeMachines?.map(({ name, img, article, color, id, price}) => (
            <div key={id} id={id} className='coffee-machines__items'>
                <div className="biger-size">
                    <img src={img} alt="photo" />
                </div>
                <p className='coffee-machines__items--header'>{name}
                    <span className='favorite-icon'>
                        <svg height="23" width="23" className={favoriteId.includes(id) ? "star2" : "star"} onClick={() => {
                           
                            handlerFavorite({ name, img, article, color, id, price });
                        }} >
                            <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
                        </svg>
                    </span>
                </p>
                <p className='coffee-machines__items--color'> Color: {color}</p>
                <p className='coffee-machines__items--article'>Article: {article}</p>
                <p className='coffee-machines__items--price'>Prise: {price} ₴</p>

                { basketId.includes(id)?
                <button className='coffee-machines__items--button--basket'> <InBasket className="in-basket"/>In basket</button>
                :
                <button data-testid="chose" className='coffee-machines__items--button' onClick={() => {
                    openModal()
                    handlerBasket({ name, img, article, color, id, price });
                }}>Add to basket</button>
                }
    
               
    
            </div>
        )) 

        const table = coffeeMachines.length && coffeeMachines?.map(({ name, img, article, color, id, price}) => (

  <tr className="table-row zoom">
    <td>{id}</td>
    <td> <span className='favorite-icon'>
                        <svg height="23" width="23" className={favoriteId.includes(id) ? "star2" : "star"} onClick={() => {
                           
                            handlerFavorite({ name, img, article, color, id, price });
                        }} >
                            <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
                        </svg>
                    </span></td>
    <td> <img className="table-img" src={img} alt="photo" /></td>
    <td>{name}</td>
    <td>{article}</td>
    <td>{color}</td>
    <td>{price}</td>
    <td> <button data-testid="chose" className='coffee-machines__items--button' onClick={() => {
                    openModal()
                    handlerBasket({ name, img, article, color, id, price });
                }}>Add to basket</button></td>
  </tr>
)) 
    

    

    return (
        <>
           {display ? item : table }
        </>
    )
}



SliderCoffeeMachine.propTypes = {
    handlerFavorite: PropTypes.func,
    handlerBasket: PropTypes.func,
    openModal: PropTypes.func,
}


export default SliderCoffeeMachine









