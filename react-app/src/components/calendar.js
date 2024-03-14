import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';

export default function CalendarComponent({ onDateChange }) {

    const [date, setDate] = useState(null);

    addLocale('se', {
        firstDayOfWeek: 1,
        showMonthAfterYear: true,
        dayNames: ['söndag', 'måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag'],
        dayNamesShort: ['sön', 'mån', 'tis', 'ons', 'tor', 'fre', 'lör'],
        dayNamesMin: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
        monthNames: ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'],
        monthNamesShort: ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'sep', 'okt', 'nov', 'dec'],
        today: 'Idag',
        clear: 'Rensa',
        weekHeader: 'Vecka'
    });

    const handleDateChange = (e) => {
        setDate(e.value);
        if (onDateChange) {
            onDateChange(e.value);
        }
    }

    return (
        <div className="card flex justify-content-center">
            <Calendar value={date} onChange={handleDateChange} locale="se" inline showButtonBar showWeek />
        </div>
    )
}
        