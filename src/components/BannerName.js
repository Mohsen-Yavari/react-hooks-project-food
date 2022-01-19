import React from 'react';

function BannerName ({name,discont,link}){
    return <div className="bannerContent">
        <h3>Hello {name}</h3>
        <p>Get free siscount for every <span>{discont} $</span></p>
        <a href="#">Learn More</a>
        </div>
    
};

export default BannerName;