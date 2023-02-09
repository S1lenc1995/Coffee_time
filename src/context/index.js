import { createContext, useState} from "react";


export const CoffeMachineContext = createContext({})

const CoffeeMachineProvider = ({children}) =>{

  const [display, setDisplay] = useState(true)

  const changeDisplayToTable=()=>{ 
    setDisplay(false)
  }

  const changeDisplayToList=()=>{ 
    setDisplay(true)
  }


    return(
        <CoffeMachineContext.Provider value={{display, changeDisplayToTable, changeDisplayToList }}>
            {children}
        </CoffeMachineContext.Provider>
    )
}

export default CoffeeMachineProvider