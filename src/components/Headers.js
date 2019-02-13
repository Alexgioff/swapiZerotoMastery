import React from 'react';
import SearchBox from './SearchBox';
import './Headers.css';

const Headers = ({searchChange}) => {
    return (
        <header className="header">
            <div> <h2 className="logo">StarWars Data</h2></div>
            <SearchBox searchChange={searchChange}/>
        </header>
    )
}



export default Headers;