import React from 'react'
import styled from "styled-components"

const Search = styled.input`
    width: 300px;
    border: 2px solid green;
    height: 35px;
    border-radius: 10px;
    outline: none;
    display: block;
    margin: 5px auto;
    font-size: 15px;
    padding-left: 15px;
`

const SearchBar = ({searchParam}) => {


    return (
        <Search onChange = {(e) => searchParam(e.target.value) }  placeholder='Search for your Fav Pizza' />
    )
}

export default SearchBar;