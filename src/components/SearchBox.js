import React from 'react';


import './SearchBox.css';


const SearchBox = ({searchChange}) => {
    return(
        <div >
            <input
                className="search"
                type="search"
                placeholder="Characters"
                onChange={searchChange}
            />
        </div>
    )
}


export default SearchBox;