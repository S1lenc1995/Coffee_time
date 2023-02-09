import { useContext } from "react"
import { CoffeMachineContext } from "../../../../context"
import { ReactComponent as Table } from "./img/table.svg"
import { ReactComponent as Grid } from "./img/Grid.svg"
import './ButtonBlock.scss'






const ChangeView = () => {
    const{display,changeDisplayToTable, changeDisplayToList } = useContext(CoffeMachineContext)
    const tableDisplay = !display
    

    return (
        <div className='changeDisplay'>
            <Table className={display? "btn-options": "btn-options active-btn" }onClick={changeDisplayToTable}/>
            <Grid className={display? "btn-options active-btn": "btn-options" } onClick={changeDisplayToList} />
        </div>
    )

}

export default ChangeView