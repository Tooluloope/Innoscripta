import React, { useContext } from 'react'
import styled from "styled-components"
import {cartContext} from '../../context/cart/cart'

const Flex = styled.div`
    display: flex;
    width: 60%;
    height: 120px;
    margin: 10px auto;
    border: 1px solid green;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 1200px){
        width: 80%

    }
    @media screen and (max-width: 538px){
        img {
            display: none;
        }

    }
    @media screen and (max-width: 440px){
        div h1 {
            font-size: 15px;
        }
        div p {
            display: none;
        }
        
    }

    img {
        flex: 0.5 0;
        max-width: 100px;
        margin-left: 10px;
        margin-right: 10px

    }
    div {
        flex: 1 ;
        margin: 0, 10px;

        p {
            margin: 0 20px 20px 5px ;
        }
        h3 {
            margin-left:5px;
            
        }
    }
    button {
        flex: 1;
        border: 1px solid green;
        outline: none;
        font-size: 20px;
        padding: 10px;
        background: transparent;
        margin-right: 10px;
        border-radius: 10px;
        max-width: 120px;
    }
    button:hover {
        color: white;
        background: green;
        border: 0px solid;
    }



`

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

