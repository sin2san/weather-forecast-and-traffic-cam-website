import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import './Location.css';

class Location extends Component{   

    render() {

        let locations =this.props.locations
         .map(loc => {
             return <li onClick={() => this.props.onLocationClick(loc)} key={loc.name}>{loc.name}</li> 
         }
             
         );
        
        return(
            <Auxiliary>
                <div className="location-outer">
                    <ul className="location-list">
                        {locations}      
                    </ul> 
                </div>
            </Auxiliary>
        );
    }
}

export default Location;