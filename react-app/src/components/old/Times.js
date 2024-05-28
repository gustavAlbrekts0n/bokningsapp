import React, { useState, useEffect } from "react";
import { ListBox } from 'primereact/listbox';

export default function Times({ onTimeChange, date }) {

    const [selectedTime, setSelectedTime] = useState('');

    const [times, setTimes] = useState([
        { index: 0, name: '07:00 - 11:00' },
        { index: 1, name: '11:00 - 14:00' },
        { index: 2, name: '14:00 - 17:00' },
        { index: 3, name: '17:00 - 21:00' }
    ]);

    const [entries, setEntries] = useState([]);

    // Fetch all booked time entries from database
    useEffect(() => {
        fetch("/api")
            .then(response => response.json())
            .then(data => setEntries(data));
    }, []);

    // Update (and eventually disable) times according to entries
    const updateTimes = () => {
        const updatedTimes = times.map(time => {
            const entry = entries.find(entry => {
                /* TODO: More checks if time is booked, such as correct date */
                return entry.time.index === time.index; /*&& entry.date === date;*/
            });
            return { ...time, disabled: !!entry };
        });
        // Update times array and immediately set it back to trigger re-render
        setTimes([...updatedTimes]);
    }

    // Update times when entries are updated
    useEffect(() => {
        updateTimes();
    }, [entries]);

    // Reset selectedTime when onTimeChange prop changes (i.e., when the parent component re-renders)
    useEffect(() => {
        setSelectedTime(null);
    }, [onTimeChange]);

    // Update selected time
    const handleTimeChange = (e) => {
        setSelectedTime(e.value);
        if (onTimeChange) {
            onTimeChange(e.value);
        }
    }

    return (
        <div className="card flex justify-content-center">  
            <ListBox 
                value={selectedTime} 
                onChange={handleTimeChange} 
                options={times} 
                optionLabel="name" 
                className="w-full md:w-14rem" 
                pt={{
                    root: { className: "times" },
                    item: { className: "time" }
                }} 
            />
        </div>
    );
}
        