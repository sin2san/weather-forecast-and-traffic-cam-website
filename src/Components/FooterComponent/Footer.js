import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

class Footer extends Component {
    render() {
        return (
            <Auxiliary>
                <div className="text-center text-white h-100 bg-dark py-3 pt-3">
                    Solution By Sinthu | Weather.com
                </div>
            </Auxiliary>
        );
    }
}

export default Footer;