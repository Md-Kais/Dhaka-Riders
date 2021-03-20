import React from 'react';

import './DestinationCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserFriends } from '@fortawesome/free-solid-svg-icons'
const DestinationCard = ({ e }) => {
    const { image, type, cost, passenger } = e;
    return (
        <div className='cardDesign'>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', verticalAlign: 'middle', textAlign: 'center' }}>
                <img src={image} alt={type} width='50px' height='44px' className='imageShow'  />
                <p>{type}</p>
                <FontAwesomeIcon icon={faUserFriends}></FontAwesomeIcon>
                <p>{passenger}</p>
                <p>${cost}</p>
            </div>





        </div>
    );
};

export default DestinationCard;