import React, { useContext, useState } from 'react'
import './cart.css'
import ShoppingCartItem from "./shopping-cart-item"
import Total from "./total"
import { cartContext } from "../../context/cart/cart"
import Checkout from "../checkout/checkout"

const Cart = () => {

    const { state ,  } = useContext(cartContext);
    const [show, setShow] = useState(false)

    const disabled = state.items < 1
    return(
        
        <div className='cart'>
            <div className="shopping-cart">
                <div className="title">
                    Shopping Bag
                    
                </div>

                {state ? state.items.map(item => <ShoppingCartItem key={item.id} item={item} />) : null}
                {/* <span style={{paddingTop: '10px', paddingLeft: '20px'}}>  Delivery Fee is $5.00</span> */}
                <Total disabled = {disabled} setShow = {() => setShow(!show)} total = {state.total} />
                <Checkout  show = {disabled ?  !disabled : show } setShow = {() => setShow(!show)} />
            </div>
        </div>
    )
}

export default Cart