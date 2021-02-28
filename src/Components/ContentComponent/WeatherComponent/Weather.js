import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import './Weather.css';

class Weather extends Component {
    render() {
        return (
            <Auxiliary>
                <div className="card">
                    <div className="card-body">
                        <div className="row text-center">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="weather-icon">
                                    <i className="wi wi-day-cloudy"></i>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                                <div className="temperature">
                                    <span>25&deg;</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
<div className="col-md-12">
                        <div className="description">
                                    <div className="weatherCondition">Mostly Cloudy</div>
                                    <div className="wind">Wind: 3mph</div>
                                    <div className="humidity">Humidity: 10mph</div>
                                </div>
                        </div>
                        </div>
                    </div>
                </div>
            </Auxiliary>
        );
    }
}

export default Weather;