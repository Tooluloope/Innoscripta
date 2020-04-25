import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import { PizzaMenu } from "./pizza-menu"
import SearchBar from "../search/search"
import axios from 'axios';



const DIV = styled.div`

   
    margin: auto;
    
    h1 {
        text-align: center;
    }
    
`



const Menu = () => {
    const [data, setData] = useState([])

    const fetchData = async  () => {

        const response =  axios.get('https://mypizzapps.herokuapp.com/api/pizzas/').then(res => {
            const result = res.data
            setData(result)
            console.log(result)
        })
        return response
    }

    useEffect(() => {
      fetchData()


    }, [])

    const [searchParam, setSearchParam] = useState('')
    const filtered  = data && data.filter(pizza => pizza.name.toLowerCase().includes(searchParam.toLowerCase()))

    return(
        <div className='menu'>
            <DIV>
                <h1>
                    The Pizza Menu
                </h1>
                <SearchBar searchParam = {setSearchParam} />

                {filtered.length > 0 ? filtered.map( filter => <PizzaMenu key={filter.id} pizza={filter} />)
                    : <p style = {{textAlign: "center"}}>Opps... No Result Found </p>
                }   
            </DIV>
        </div>
    )
}

export default Menu