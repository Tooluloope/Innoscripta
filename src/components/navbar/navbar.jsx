import React, { useState, useContext } from 'react';
import styled from "styled-components";
import { Login } from "../user/login";
import { Register } from "../user/register";
import {Link} from 'react-router-dom'

import { userContext } from "../../context/user/user";
import { Logout } from "../../context/user/auth";

const Nav = styled.nav`
    background-color: green;
    height: 70px;
    width:100vw;
    display: flex;
    justify-content: space-between;
    color: #fff;
    align-items: center;

    h3 {
        padding-left: 30px;
    }
    a {
        padding-left: 15px;
        padding-right:15px;
        color: white;
        text-decoration: none;
    }
`
const NavList = styled.ul` 
    display: flex;

    li {
        text-decoration:none;
        list-style:none;
        padding: 0 10px;
        cursor: pointer;
    }

    
`

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