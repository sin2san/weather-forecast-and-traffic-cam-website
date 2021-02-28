import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';

import Date from './DateComponent/Date';
import Time from './TimeComponent/Time';
import Location from './LocationComponent/Location';
import Weather from './WeatherComponent/Weather';
import Screenshot from './ScreenshotComponent/Screenshot';

import './Content.css';

class Content extends Component {
    render() {
        return (
            <Auxiliary>
                <section className="pt-5 py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-4">
                                <Date />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mb-4">
                                <Location />
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mb-4">
                                <Weather />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mx-auto">
                                <Screenshot />
                            </div>
                        </div> 
                    </div>
                </section>       
            </Auxiliary >
        );
    }
}


export default Content;