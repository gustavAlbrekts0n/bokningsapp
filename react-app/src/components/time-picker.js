import './time-picker.css';

const Time = ({ index, date, isBooked }) => {
    const times = [
        "07:00 - 11:00",
        "11:00 - 14:00",
        "14:00 - 17:00",
        "17:00 - 21:00"
    ];
  
    return (
        <div className={"time" + (isBooked ? " booked" : "")} onClick={() => {
            const data = { index, date, isBooked };
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            };
            fetch("/api", options);
        }}>
            <p>{times[index]}</p>
        </div>
    );
};

const TimePicker = ({ selectedDate }) => {
    const times = [
        "07:00 - 11:00",
        "11:00 - 14:00",
        "14:00 - 17:00",
        "17:00 - 21:00"
    ];

    const weekdays = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
    const months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];

    const dateString = selectedDate
        ? `${weekdays[selectedDate.weekday]} ${selectedDate.number} ${months[selectedDate.month]}`
        : "";

    return (
        <div className="time-picker">
            <div className="selected-date">
                <p>{selectedDate ? dateString : 'Välj datum'}</p>
            </div>
            <div className="time-list">
                {times.map((time, index) => (
                    <Time
                        key={index}
                        index={index}
                        date={selectedDate}
                        isBooked={index % 2 !== 0}
                    />
                ))}
            </div>
        </div>
    );
};

export default TimePicker;