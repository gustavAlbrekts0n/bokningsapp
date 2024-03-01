import React, { Component } from 'react';
import CalendarDays from './calendar-days';
import './calendar.css';
import MonthArrow from './month-arrow';

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
        this.props.onDateChange(day);
    }

    render() {
        return ( 
            <div className="calendar">
                <div className="calendar-header">
                    <p>{this.months[this.state.currentDay.getMonth()]} {this.state.currentDay.getFullYear()}</p>
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
                    <div className="arrow-container">
                        <MonthArrow goingRight={false} day={this.state.currentDay} changeCurrentDay={this.changeCurrentDay}/>
                        <MonthArrow goingRight={true} day={this.state.currentDay} changeCurrentDay={this.changeCurrentDay}/> 
                    </div>
                </div>
            </div>
        );
    }
}