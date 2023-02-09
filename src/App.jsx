import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Button } from "./Components/Button";
import { Modal } from "./Components/Modal";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';


import { Basket } from './pages/basket'
import { Favorites } from './pages/favotites';
import { MainPage } from './pages/main';

import { selectorBasket, selectorFavorites, selectorModalAddtoBasket, selectorModalRemoveFromBasket, selectorCurentMachine } from './selectors';
import { useSelector, useDispatch } from 'react-redux'
import { actionToggleModalAddtoBasket, actionToggleModalRemoveFromBasket, actionFetchBasketPage, actionCurrentMachine, actionFetchFavoritesPage} from "./actions"
import { useEffect } from 'react';




const App = () => {

  
 

    const modalAddtoBasket = useSelector(selectorModalAddtoBasket) 
    const modalRemoveFromBasket = useSelector(selectorModalRemoveFromBasket)
    const basket = useSelector(selectorBasket)
    const curentMachine = useSelector(selectorCurentMachine)
    const favorites = useSelector(selectorFavorites)
    const dispatch = useDispatch();
  
  
  
    const openModalDeleteItem = () => {
      dispatch(actionToggleModalRemoveFromBasket())
    }
  
    const openModal = () => {
      dispatch(actionToggleModalAddtoBasket())
    }
  
    const handlerCurrentMachines = (curent) => {
      dispatch(actionCurrentMachine(curent))
    } 
  
  
  
    const handlerBasket = (curentMachine) =>{
      let includes = true
      basket.forEach((el)=>{
        if (curentMachine.id === el.id) {
          includes = false
        }
      })
      if(includes){
        localStorage.setItem('basket', JSON.stringify([...basket, curentMachine]));
        dispatch(actionFetchBasketPage())
    }
  }
  
  const deleteFromBasket = (curentMachine) => {
    let arrLocalBasket = JSON.parse(localStorage.getItem('basket'))
    arrLocalBasket.forEach((el) => {
      if (el.id === curentMachine.id) {
        arrLocalBasket.splice(arrLocalBasket.indexOf(el), 1)
  
      }
    })
    localStorage.setItem('basket', JSON.stringify(arrLocalBasket));
    dispatch(actionFetchBasketPage())
  }
  
  
  const handlerFavorite = (curentMachine) => {
    let includes = true
    favorites.forEach((el) => {
      if (curentMachine.id === el.id) {
        includes = false
      }
    })
    if (includes) {
      localStorage.setItem('favorites', JSON.stringify([...favorites, curentMachine]));
      dispatch(actionFetchFavoritesPage())
    }
    if (!includes) {
      let arrLocalFavorites = JSON.parse(localStorage.getItem('favorites'))
      arrLocalFavorites.forEach((el) => {
        if (el.id === curentMachine.id) {
          arrLocalFavorites.splice(arrLocalFavorites.indexOf(el), 1)
        }
      })
      localStorage.setItem('favorites', JSON.stringify(arrLocalFavorites));
      dispatch(actionFetchFavoritesPage())
    }
  }

  










  return (
    <>
      <Header  countBasket={useSelector(selectorBasket).length} countFavorit={favorites.length}  />
      <Routes>
        <Route path='/' element={< MainPage handlerFavorite={handlerFavorite}
          openModal={openModal}
          handlerBasket={handlerCurrentMachines} 
          favorites={favorites}  />} />

        <Route path='basket' element={<Basket openModalDeleteItem={openModalDeleteItem}
          handlerBasket={handlerCurrentMachines} 
                                               />} />


        <Route path='favorites' element={<Favorites handlerFavorite={handlerFavorite}
                                                       />} />
      </Routes>




       <Modal XBtn={true} active={modalAddtoBasket} closeModal={openModal} headerRegModal={"Hello"} textRegModal={'Do you want to add this item to your basket'} actions={<div className="button-wrapper">
        <Button clas={"btn"} text={'ok'} addToBasket={() => handlerBasket(curentMachine)} openModalReg={openModal}    />
        <Button clas={"btn"} text={'cancel'} openModalReg={openModal} />
      </div>} />

      <Modal XBtn={true} active = {modalRemoveFromBasket} closeModal={openModalDeleteItem} headerRegModal={"Hello"} textRegModal={'Do you want to delete this item from your basket'} actions={<div className="button-wrapper">
        <Button clas={"btn"} text={'ok'}  addToBasket={() => deleteFromBasket(curentMachine)} openModalReg={openModalDeleteItem} />
        <Button clas={"btn"} text={'cancel'} openModalReg={openModalDeleteItem} />
      </div>} />


      <Footer />
    </>

  )
}

export default App;
