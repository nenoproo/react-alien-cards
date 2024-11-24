import React from 'react';

const Card = ({alien}) => {
    return (
        <div className="card" id={alien.id}>
            <img src={alien.image} alt={alien.name} className="card-image" />
            <div className="card-content">
                <p><b>NAME: </b>{alien.name}</p>
                <p><b>RACE: </b>{alien.race}</p>
                <p><b>AGE: </b>{alien.age}</p>
                <p><b>GENDER: </b>{alien.gender}</p>
            </div>
        </div>
    )
}

export default Card;