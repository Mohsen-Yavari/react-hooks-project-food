import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

function SubmitMenuContainer ({name})  {
    return (
            
        <div className="subNenuContainer">
            <h3>{name}</h3>
            <div className="viewAll">
                <p>View</p>
                <FontAwesomeIcon icon={faAngleRight} className="viewAllIcon" />

            </div>
        </div>
    )
};

export default SubmitMenuContainer;