import React from 'react';

const traffic = (props) => {
    let customImage = (props.location == null || !props.location.location.image) 
        ? <img src="/asset/images/no_image.jpg" className="img-responsive mb-4" alt="Not Found" />
        : <img src={props.location.location.image} className="img-responsive mb-4" alt="Screenshot" />; 
    return(
        customImage          
    );
}

export default traffic;