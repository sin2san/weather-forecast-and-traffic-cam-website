import React from 'react';

const traffic = (props) => {
    let imageDiv = (props.location == null || !props.location.location.image) 
        ? <span>No image!</span> 
        : <img src={props.location.location.image} className="img-responsive mb-4" alt="weather"/>; 
    return(
        imageDiv          
    );
}

export default traffic;