import React from 'react'
import { Search } from "../global";



const SearchBar = ({searchParam}) => {


    return (
        <Search onChange = {(e) => searchParam(e.target.value) }  placeholder='Search for your Fav Pizza' />
    )
}

export default SearchBar;