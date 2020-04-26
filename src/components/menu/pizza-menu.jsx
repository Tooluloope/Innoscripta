import React, { useContext } from 'react'
import {cartContext} from '../../context/cart/cart'
import { Flex } from "../global";



export const PizzaMenu = ({pizza}) => {
    const {  dispatch } = useContext(cartContext);

    const handleClick = () => {
        dispatch({type: 'ADD_NEW_ITEM', payload: pizza})
    }
    

    return(
        <Flex>
            <img height='100' src={pizza.url} alt={pizza.name}/>
            <div>
                <h3>{pizza.name}</h3>
                <p>{pizza.desc} </p>
                <p>{pizza.amount}</p>
            </div>
            <button onClick = {handleClick} >
                $ {pizza.price}  <i className="fas fa-cart-plus"></i>
            </button>
        </Flex>
    )
}

