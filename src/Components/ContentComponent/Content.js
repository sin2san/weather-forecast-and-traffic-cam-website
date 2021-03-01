import React, { Component } from 'react';
import axios from 'axios';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import configData from '../../config.json';

import CustomDate from './DateComponent/Date';
import Location from './LocationComponent/Location';
import Weather from './WeatherComponent/Weather';
import Traffic from './TrafficComponent/Traffic';

import './Content.css';

class Content extends Component {

    state = {
        date: "2021-02-28T12:00:00",
        time: "",
        locations: [],
        cameras: [],
        selectedLocation: null
    }

    componentDidMount() {
        this.loadData();
    }

    updateDate = (input) => {
        this.setState({ date: input, selectedLocation: null });
        this.loadData();
    }

    loadData() {
        axios.get(`${configData.baseURL}/${configData.version}/${configData.transport}/traffic-images?date_time=${this.state.date}`)
            .then(
                response => {
                    response.data.items.forEach(item => {
                        this.setState({ cameras: item.cameras ? item.cameras : [] });
                        this.callWeatherAPI()

                    });
                }
            );
    }
    callWeatherAPI = () => {
        axios.get(`${configData.baseURL}/${configData.version}/${configData.environment}/2-hour-weather-forecast?date_time=${this.state.date}`)
            .then(
                response => {
                    this.buildStateObject(response);
                }
            );
    }

    buildStateObject = (response) => {
        let results = [];
        response.data.items.forEach(item => {
            if (Object.keys(item).length > 0) {
                item.forecasts.forEach(forecast => {
                    response.data.area_metadata.forEach(meta => {
                        this.mapNameAndLocation(results, meta, forecast);

                    });
                    this.setState({ locations: results });
                });
            } else {
                this.setState({ locations: [] });
            }
        });
    }

    mapNameAndLocation = (results, meta, forecast) => {
        if (forecast.area === meta.name) {
            let result = {
                name: meta.name,
                area: forecast.area,
                forecast: forecast.forecast,
                location: meta.label_location
            }
            results.push(result);
            this.mapLocation();
        }
    }

    mapLocation = () => {
        this.state.locations.forEach(location => {
            this.state.cameras.forEach(camera => {
                if (camera.location.latitude.toString().includes(location.location.latitude)) {
                    location.location.image = camera.image;
                }
            });
        });
    }

    onLocationClick = (location) => {
        this.setState({ selectedLocation: location });
    }

    render() {
        return (
            <Auxiliary>
                <section className="pt-5 py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-4">
                                <CustomDate
                                    value={this.state.date}
                                    updateDate={this.updateDate} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-4">
                                <Location
                                    locations={this.state.locations}
                                    onLocationClick={this.onLocationClick} />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mb-4">
                                <Weather
                                    location={this.state.selectedLocation} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mx-auto">
                                <Traffic
                                    location={this.state.selectedLocation} />
                            </div>
                        </div>
                    </div>
                </section>
            </Auxiliary >
        );
    }

}

export default Content;
