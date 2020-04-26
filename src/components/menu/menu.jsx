import React, { useState } from 'react'
import styled from "styled-components"
import { PizzaMenu } from "./pizza-menu"
import SearchBar from "../search/search"

import useFetch from "../hooks/fetch";

const DIV = styled.div`
    margin: auto;
    h1 {
        text-align: center;
    }
`



const Menu = () => {
    

    // Getting Data from the API using the Custom hook
    const {data, error, isLoading} = useFetch('https://mypizzapps.herokuapp.com/api/pizzas/')

    // Search Parameter for the filtered data
    const [searchParam, setSearchParam] = useState('')

    // Return the different state of the data loading or Error
    if(isLoading || error || !data) {
       return( 
            <div>
                {isLoading ?  'Loading...' : error}
            </div>
       )
    };

    // Getting the filtered data using the search Parameter
    const filteredData  = data.length >0 ? data.filter(pizza => pizza.name.toLowerCase().includes(searchParam.toLowerCase())) : []
        

    return(
        <div className='menu'>
            <DIV>
                <h1>
                    The Pizza Menu
                </h1>
                <SearchBar searchParam = {setSearchParam} />
                {filteredData.length > 0 ? filteredData.map( filter => <PizzaMenu key={filter.id} pizza={filter} />)
                    : <p style = {{textAlign: "center"}}>Opps... No Result Found </p>
                }   
            </DIV>
        </div>
    )
}

export default Menu