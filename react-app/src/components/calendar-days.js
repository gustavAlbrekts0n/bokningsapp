function CalendarDays(props) {
    let firstDayOfMonth = new Date(props.day.getFullYear(), props.day.getMonth(), 1);
    let weekdayOfFirstDay = (firstDayOfMonth.getDay() - 1);

    let currentDays = [];

    for (let day = 0; day < 42; day++) {
        if (day === 0 && weekdayOfFirstDay === 0) {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
        } else if (day === 0) {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (day - weekdayOfFirstDay));
        } else {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
        }

        let calendarDay = {
            currentMonth: (firstDayOfMonth.getMonth() === props.day.getMonth()),
            date: (new Date(firstDayOfMonth)),
            month: firstDayOfMonth.getMonth(),
            number: firstDayOfMonth.getDate(),
            weekday: firstDayOfMonth.getDay(),
            selected: (firstDayOfMonth.toDateString() === props.day.toDateString()),
            year: firstDayOfMonth.getFullYear(),
            isToday: ((firstDayOfMonth.getDate() === props.today.getDate()) && (firstDayOfMonth.getMonth() === props.today.getMonth()) && (firstDayOfMonth.getFullYear() === props.today.getFullYear()))
        }

        currentDays.push(calendarDay);
    }

    return (
        <div className="table-content">
            {
                currentDays.map((day) => {
                    return (
                        <div className={"calendar-day" + (day.currentMonth ? " current" : "") + (day.selected ? " selected" : "") + (day.isToday ? " today" : "")}
                            onClick={() => {
                                if (day.currentMonth) {
                                    props.changeCurrentDay(day)
                                }
                            }}>
                            <p>{day.number}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default CalendarDays;