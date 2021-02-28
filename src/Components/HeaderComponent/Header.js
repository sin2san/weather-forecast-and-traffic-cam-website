import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

import './Header.css';

class Header extends Component {
    render() {
        return (
            <Auxiliary>
                <nav className="navbar navbar-dark bg-dark">
                    <span className="text-center text-white">Weather Forecast & Traffic Cam Website</span> 
                </nav>
            </Auxiliary>
        );
    }
}

export default Header;