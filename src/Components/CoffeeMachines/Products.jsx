import { useState, useEffect } from "react"; 
import ChangeView from "./components/SliderCoffeeMachin/ChangeView";
import { useContext } from "react"
import { CoffeMachineContext } from "../../context";
import './Products.scss'

const Products = ({children})=>{
    const{display} = useContext(CoffeMachineContext)
    
    return(
        <>
        <ChangeView/>
            {display ? <div className='coffee-machines'>{children}</div> :  <div className='coffee-machines-tables'> <table className="table-coffeemachine">
    <tr><th>Number</th>
    <th>Favorite</th>
    <th className="aa">Photo</th>
    <th className="aa">Name</th>
    <th>Article</th>
    <th>Color</th>
    <th>Price</th>
    <th>Bye</th>
  </tr>
  {children}
  </table> 
  </div>}
 
        </>
    )
} 

export default Products