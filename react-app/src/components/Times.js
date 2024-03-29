import React, { useState, useEffect } from "react";
import { ListBox } from 'primereact/listbox';

export default function Times({ onTimeChange }) {

    const [selectedTime, setSelectedTime] = useState('');

    const times = [
        { index: 0, name: '07:00 - 11:00', disabled: false },
        { index: 1, name: '11:00 - 14:00', disabled: false },
        { index: 2, name: '14:00 - 17:00', disabled: false },
        { index: 3, name: '17:00 - 21:00', disabled: false }
    ];

    useEffect(() => {
        // Reset selectedTime when onTimeChange prop changes (i.e., when the parent component re-renders)
        setSelectedTime(null);
    }, [onTimeChange]);

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
    )
}
        