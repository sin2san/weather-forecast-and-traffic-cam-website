import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import './Weather.css';

class Weather extends Component {
    render() {
        let weatherIcon = 'wi wi-night-clear';
        let weatherColor = 'desc-night';
        if (this.props.location !== null && this.props.location.forecast) {
            switch (this.props.location.forecast) {
                case "Fair (Night)":
                    weatherIcon = 'wi wi-night-clear';
                    weatherColor = 'desc-night';
                    break;
                case "Fair (Day)":
                    weatherIcon = 'wi wi-day-sunny';
                    weatherColor = 'desc-day';
                    break;
                case "Windy":
                    weatherIcon = 'wi wi-cloudy-windy';
                    weatherColor = 'desc-windy';
                    break;
                case "Partly Cloudy (Day)":
                    weatherIcon = 'wi wi-day-cloudy';
                    weatherColor = 'desc-day-cloudy';
                    break;
                case "Fair & Warm":
                    weatherIcon = 'wi wi-day-sunny-overcast';
                    weatherColor = 'desc-fair-warm';
                    break;
                default:
                    weatherIcon = 'wi wi-day-sunny';
                    weatherColor = 'desc-day';
            }
        }
        return (
            <Auxiliary>
                <div className="card">
                    <div className="card-body">
                        <div className="row text-center">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="weather-icon">
                                    <i className={weatherIcon}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-md-12">
                            <div id="desc" className={weatherColor}>
                                <span>{this.props.location == null ? 'Forecast not found' : this.props.location.forecast}</span>
                                <span>{this.props.location == null ? 'Area name not found' : this.props.location.name}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Auxiliary>
        );
    }
}

export default Weather;
