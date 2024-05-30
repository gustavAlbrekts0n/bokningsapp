import React, { useState } from 'react';
import './calendar.css';
import { MaterialSymbol } from 'react-material-symbols';

function CalendarComponent() {

    const [mainOffset, setMainOffset] = useState(0);

    function handleLeftClick() {
        setMainOffset(prevOffset => prevOffset - 1);
    }
    
    function handleRightClick() {
        setMainOffset(prevOffset => prevOffset + 1);
    }

    function getDateByOffset(offset) {
        const today = new Date();
        const newDate = new Date(today);
        newDate.setDate(today.getDate() + offset + mainOffset);
        
        const day   = newDate.getDate();
        const month = newDate.getMonth() + 1;
        const weekday = weekdays[newDate.getDay()];

        const dateString = `${weekday} ${day}/${month}`;
        return { dateString, date: newDate };
    }

    function printDebug(selectedDate, selectedTime) {
        console.log(`${selectedDate} : ${selectedTime}`);
    }

    const times = ['07 - 11', '11 - 14', '14 - 17', '17 - 21'];
    const weekdays = ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"];
    const days = Array.from({ length: 5 }, (_, index) => getDateByOffset(index));
    const dayFrom = days[0];
    const dayTo   = days[days.length - 1];

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return (
        <div className="calendar">
            <div className="week-picker">
                <div onClick={handleLeftClick}>
                    <MaterialSymbol className="arrow" icon="chevron_left" size={32} />
                </div>
                <p>{`${dayFrom.dateString} - ${dayTo.dateString}`}</p>
                <div onClick={handleRightClick}>
                    <MaterialSymbol className="arrow" icon="chevron_right" size={32} />
                </div>
            </div>
            <div className="calendar-header">
                {days.map(({ dateString }) => (
                    <div key={dateString} className="header-cell">
                        {dateString}
                    </div>
                ))}
            </div>
            <div className="body">
                {days.map(({ date }, columnIndex) => (
                    <div key={columnIndex} className="day-column">
                        {times.map((time, timeIndex) => (
                            <div
                                key={timeIndex} 
                                className={`time-slot ${date < today ? 'past' : ''}`}
                                onClick={() => printDebug(date.toLocaleDateString(), time)}>
                                {time}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CalendarComponent;
