import { Products } from "../../Components/CoffeeMachines"
import { SliderCoffeeMachine } from "../../Components/CoffeeMachines/components/SliderCoffeeMachin"


function MainPage ({handlerFavorite, openModal, handlerBasket, favorites}){
    return(
        <Products>
        <SliderCoffeeMachine handlerFavorite={handlerFavorite}
          openModal={openModal}
          handlerBasket={handlerBasket}
          favorites = {favorites}
        >
        </SliderCoffeeMachine>
        </Products>
       
    )
}

export default MainPage