import React from 'react';
import Data from './Data';

import './ContainerData.css'

const ContainerData = ({people}) => {
    return (
        <div className="container">
            {
                people.map((user, i)  => {
                    return <Data    key={people[i].name} 
                                    name={people[i].name} 
                                    height={people[i].height} 
                                    weight={people[i].mass} 
                                    hair={people[i].hair_color} 
                                    eye={people[i].eye_color}
                                    birthday={people[i].birth_year}
                                    gender={people[i].gender} />
                })
            }
        </div>
    )
}



export default ContainerData