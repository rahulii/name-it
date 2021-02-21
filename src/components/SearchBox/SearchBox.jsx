import React, { Component } from 'react'
import './SearchBox.css';

const SearchBox = ({ handleInputChange }) => {
    return(
        <div className="search-container">
            <input placeholder="type keywords" onChange={(event) => {handleInputChange(event.target.value)} } className="search-input"></input>
        </div>
    );
}

export default SearchBox
