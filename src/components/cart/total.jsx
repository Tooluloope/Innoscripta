import React from 'react'
import { usdToEuros } from "../../context/cart/utils";


const Total = ({total, show, setShow}) => {
    return(
        <div className = "total">
            <div>
                <p>€ {usdToEuros(total)}</p>
                <p>$ {total}</p>
            </div>
            <button onClick = {setShow}>
                Check Out
            </button>
            
            
        </div>
    )
}

export default Total;