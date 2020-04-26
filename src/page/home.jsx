import React from 'react'
import Menu from "../components/menu/menu"
import Cart from "../components/cart/cart";
import { Container } from "../components/global";


const HomePage = () => {

    return(
        // Contains both the cart and menu view
        <Container>
            <Menu />
            <Cart />
        </Container>
    )
}

export default HomePage;