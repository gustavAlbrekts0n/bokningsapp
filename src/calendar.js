import React, { Component } from 'react';
import CalendarDays from './calendar-days';
import './calendar.css';

export default class Calendar extends Component {
    constructor() {
        super();

        this.weekdays = ["M", "T", "O", "T", "F", "L", "S"];
        this.months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];

        this.state = {
            currentDay: new Date(),
            today: new Date()
        }
    }

    changeCurrentDay = (day) => {
        this.setState({ currentDay: new Date(day.year, day.month, day.number) });
    }

    render() {
        return (
            <div className="calendar">
                <div className="calendar-header">
                    <h2>{this.months[this.state.currentDay.getMonth()]} {this.state.currentDay.getFullYear()}</h2>
                </div>
                <div className="calendar-body">
                    <div className="table-header">
                        {
                            this.weekdays.map((weekday) => {
                                return <div className="weekday"><p>{weekday}</p></div>
                            })
                        }
                    </div>
                    <CalendarDays day={this.state.currentDay} today={this.state.today} changeCurrentDay={this.changeCurrentDay} />
                    <div className="month-arrows">
                        <h1>&lt;</h1>
                        <h1>&gt;</h1>
                    </div>        
                </div>
            </div>
        );
    }
}