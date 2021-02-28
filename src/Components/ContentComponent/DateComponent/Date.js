"use strict";
import React from 'react';

class Date extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date : "2021-02-28T08:00"
        };
    }

    render() {
        return (
            <input 
                className="form-control" 
                type="datetime-local" 
                ref={(date) => {this.dateRef = date;}} 
                value={this.state.date} 
                onChange={this._onDateChange.bind(this)}
            />
        );
    }

    _onDateChange(e) {
        let state = this.state;
        state['date'] = e.target.value;
        state['date'] = this.dateRef.value;
        this.setState(state);
    }

}

export default Date;