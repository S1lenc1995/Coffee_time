import PropTypes from 'prop-types'; 
import "./Buton.scss"

function Button (props){
    const{backgroundColor, text, openModalReg, clas, addToBasket} = props
    return(
        <button className = {clas} style={{background: backgroundColor}}  onClick={()=>{openModalReg(); addToBasket()}}>{text}</button>
)
}

Button.propTypes = {
    clas: PropTypes.any, 
    openModalReg: PropTypes.func,
    addToBasket: PropTypes.func,
    backgroundColor: PropTypes.string,
    text: PropTypes.string,
}

export default Button