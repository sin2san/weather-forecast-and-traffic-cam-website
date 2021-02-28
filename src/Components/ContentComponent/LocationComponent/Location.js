import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import './Location.css';

class Location extends Component{   

    render() {

        let datas =this.props.locations
         .map(loc => {
             return <li onClick={() => this.props.onLocationClick(loc)}>{loc.name}</li> 
         }
             
         );
        
        return(
            <Auxiliary>
                <div className="location-outer">
                    <ul className="location-list">
                        {datas}      
                    </ul> 
                </div>
            </Auxiliary>
        );
    }
}

export default Location;