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

        this.weekdays = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
        this.months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
    }

    render() {
        const date = this.props.selectedDate ? this.weekdays[this.props.selectedDate.weekday] + " " + this.props.selectedDate.number + " " + this.months[this.props.selectedDate.month] : "";

        return ( 
            <div className="time-picker">
                <div className="selected-date">
                    <p>{this.props.selectedDate ? date : "Välj datum"}</p>
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