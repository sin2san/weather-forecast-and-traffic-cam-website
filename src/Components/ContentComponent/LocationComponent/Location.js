import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import './Location.css';

class Location extends Component{
    render(){
        return(
            <Auxiliary>
                <div className="location-outer mb-4">
                    <ul className="location-list">
                        <li><a href="">Kembangan</a></li>   
                        <li><a href="">Bedok</a></li>   
                        <li><a href="">Ang Mo Kio</a></li>   
                        <li><a href="">Bishan</a></li>
                        <li><a href="">Rocher</a></li>   
                        <li><a href="">Sembawang</a></li>
                        <li><a href="">Rocher</a></li>   
                        <li><a href="">Sembawang</a></li>
                        <li><a href="">Rocher</a></li>   
                        <li><a href="">Sembawang</a></li>
                    </ul> 
                </div>
            </Auxiliary>
        );
    }
}

export default Location;