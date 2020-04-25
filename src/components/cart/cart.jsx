import React, { useContext, useState } from 'react'
import './cart.css'
import ShoppingCartItem from "./shopping-cart-item"
import Total from "./total"
import { cartContext } from "../../context/cart/cart"
import Checkout from "../checkout/checkout"

const Cart = () => {

    const { state ,  } = useContext(cartContext);
    const [show, setShow] = useState(false)
    

    // const handleClick = () => {
    //     console.log(pizza)
        
    //     dispatch({type: 'ADD_NEW_ITEM', payload: pizza})
    // }
    return(
        
        <div className='cart'>
            <div className="shopping-cart">
                <div className="title">
                    Shopping Bag
                </div>
                {state ? state.items.map(item => <ShoppingCartItem key={item.id} item={item} />) : null}
                
                <Total setShow = {() => setShow(!show)} total = {state.total} />
                <Checkout show = {show} setShow = {() => setShow(!show)} />
            </div>
        </div>
    )
}

export default Cart