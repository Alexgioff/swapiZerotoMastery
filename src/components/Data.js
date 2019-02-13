import React from 'react';

import './Data.css';

const Data = ({name, height, weight, hair, eye,birthday,gender}) => {
    return (
        <div className="data">
            <h1>Name: {name}</h1>
            <h2>Height: {height}</h2>
            <h2>Weight: {weight}</h2>
            <h2>Hair: {hair}</h2>
            <h2>Eye:{eye}</h2>
            <h2>Birthday: {birthday}</h2>
            <h2>Gender: {gender}</h2>
        </div>
    )
}


export default Data;