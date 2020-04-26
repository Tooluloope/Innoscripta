import React, { useState, useContext } from 'react';
import { Login } from "../user/login";
import { Register } from "../user/register";
import {Link} from 'react-router-dom'

import { userContext } from "../../context/user/user";
import { Logout } from "../../context/user/auth";
import { Nav, NavList } from "../global";



const NavBar = () => {
    const [loginshow, setLoginShow] = useState(false)
    const [registershow, setRegistershow] = useState(false)
    const {state, dispatch} = useContext(userContext)
    

  
    return (
        <>
        <Nav>
            <h3>
                PIZZA TEST
            </h3>
            <NavList>
                { state.isAuthenticated ? <Link to=''>Home</Link> :
                    null
                }
                { state.isAuthenticated ? <Link to='orders'>Orders</Link> :
                    null
                }
                { state.isAuthenticated ? state.user.username :
                    <li onClick = {() => setLoginShow(!loginshow)}>Login</li> 
                }
                { state.isAuthenticated ? <li onClick = {Logout(dispatch)}>Logout</li> :
                    <li onClick = {() => setRegistershow(!registershow)}>Sign Up</li>
                }

            </NavList>

        </Nav>
        
        <Register registershow = {registershow} setRegistershow = {() => setRegistershow(false)} />
        <Login loginshow = {loginshow} setLoginShow = {() => setLoginShow(false)} />
        </>
    )
}

export default NavBar;