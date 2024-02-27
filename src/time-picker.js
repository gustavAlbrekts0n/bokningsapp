import React, { Component } from 'react';
import './time-picker.css';

export default class TimePicker extends Component {
    constructor() {
        super();

        this.times = [
            "07:00 - 11:00",
            "11:00 - 14:00",
            "14:00 - 17:00",
            "17:00 - 21:00"
        ];
    }

    render() {
        return ( 
            <div className="time-picker">
                <div className="selected-date">
                    Tisdag 27 Februari
                </div>
                <div className="time-list">
                    {
                        this.times.map((time) => {
                            return <div className="time"><p>{time}</p></div>
                        })
                    }
                </div>
            </div>
        );
    }
}