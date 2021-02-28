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
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="weather-icon">
                                    <i className="wi wi-night-clear"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="desc text-center">
                                <span>{this.props.location == null ? '' : this.props.location.forecast}</span>
                                <span>{this.props.location == null ? '' : this.props.location.name}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Auxiliary>
        );
    }
}

export default Weather;