import React, { useContext } from 'react'
import { cartContext } from "../../context/cart/cart";


const ShoppingCartItem = ({item}) => {

    const {dispatch} = useContext(cartContext)

    const handleRemove = () => {
        dispatch({type:'REMOVE_ITEM', payload: item})
    }
    const handleIncrease = () => {
        dispatch({type:'INCREASE_ITEM', payload: item})
    }
    const handleDecrease = () => {
        dispatch({type:'DECREASE_ITEM', payload: item})
    }
    return (
        

            <div className="item">
                <div onClick = {handleRemove} className="buttons">
                    <span className="delete-btn"></span>
                </div>

                <div className="image">
                    <img src={item.url} alt="" />
                </div>

                <div className="description">
                    <span>{item.name}</span>
                </div>

                <div className="quantity">
                    <button onClick = {handleIncrease} className="plus-btn" type="button" name="button">
                        <img src="https://designmodo.com/demo/shopping-cart/plus.svg" alt="" />
                    </button>
                    <input type="text" name="name" readOnly value={item.amount} />
                    <button onClick = {handleDecrease} className="minus-btn" type="button" name="button">
                        <img src="https://designmodo.com/demo/shopping-cart/minus.svg" alt="" />
                    </button>
                </div>

                <div className="total-price">${item.price}</div>
            </div>
    )
}

export default ShoppingCartItem;