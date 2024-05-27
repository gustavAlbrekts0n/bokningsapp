import React from "react";
import "./calendar.css";

function MyCalendar() {

    const days = ['Mån 1/4', 'Tis 2/4', 'Ons 3/4', 'Tor 4/4', 'Fre 5/4'];
    const timeSlots = [
        ['07 - 11', '11 - 14', '14 - 17', '17 - 21'],
        ['07 - 11', '11 - 14', '14 - 17', '17 - 21'],
        ['07 - 11', '11 - 14', '14 - 17', '17 - 21'],
        ['07 - 11', '11 - 14', '14 - 17', '17 - 21'],
        ['07 - 11', '11 - 14', '14 - 17', '17 - 21'],
    ];

    return (
        <div className="calendar">
            <div className="grid-header">
                {days.map((day, index) => (
                    <div key={index} className="header-cell">
                        {day}
                    </div>
                ))}
            </div>
            <div className="grid">
                {timeSlots.map((slots, dayIndex) => (
                    slots.map((slot, slotIndex) => (
                        <div key={`${dayIndex}-${slotIndex}`} className="grid-cell">
                            {slot}
                        </div>
                    ))
                ))}
            </div>
        </div>
    );
}

export default MyCalendar;
