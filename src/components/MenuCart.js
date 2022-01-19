import React from 'react';

//icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

function MenuCart({imgSrc,name,isActive}) {
    return <div className={`rowMenuCart ${isActive ? `active` : ``}`}>
        <div className="imgBox">
            <img src={imgSrc} alt="" />
        </div>
        <h3>{name}</h3>
        <FontAwesomeIcon icon={faAngleRight} className="LodMenuIcon" />
    </div>
}

export default MenuCart;