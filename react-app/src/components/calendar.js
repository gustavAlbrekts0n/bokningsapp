import React from 'react';
import './calendar.css';

const MyCalendar = () => {
    const days = ['Mån 1/6', 'Tis 2/6', 'Ons 3/6', 'Tor 4/6', 'Fre 5/6'];
    const times = ['07 - 11', '11 - 14', '14 - 17', '17 - 21'];

    return (
        <div className="calendar">
            <div className="calendar-header">
                {days.map(day => (
                    <div key={day} className="header-cell">{day}</div>
                ))}
            </div>
            <div className="body">
                {days.map((_, index) => (
                    <div key={index} className="day-column">
                        {times.map((time, index) => (
                            <div key={index} className="time-slot">{time}</div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyCalendar;
