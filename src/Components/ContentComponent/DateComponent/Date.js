import React, { Component } from 'react';

class CustomDate extends Component {

    render() {
        return (
            <input 
                className="form-control" 
                type="datetime-local" 
                ref={(date) => {this.dateRef = date;}} 
                value={this.props.value} 
                onChange={this._onDateChange.bind(this)}                
            />
        );
    }

    _onDateChange(e) {
        let date;
        date = this.dateRef.value;
        console.log('my date' + date);
        this.props.updateDate(date+':00');        
    }

}

export default CustomDate;