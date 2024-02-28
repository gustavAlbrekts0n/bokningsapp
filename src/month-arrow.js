import { FaAngleRight , FaAngleLeft } from "react-icons/fa";

function calculateNewDay(currentDay, goingRight) {
    
    const year = currentDay.getFullYear();
    const month = currentDay.getMonth();
  
    // Calculate the new month and adjust the year if needed
    let newMonth = goingRight ? month + 1 : month - 1;
    let newYear = year;
  
    // Handle overflow/underflow of months
    if (newMonth === 12) {
      newMonth = 0; // January, reset month to 0 for the next year
      newYear++;
    } else if (newMonth === -1) {
      newMonth = 11; // December, reset month to 11 for the previous year
      newYear--;
    }
  
    // Determine the number of days in the new month
    const lastDayOfMonth = new Date(newYear, newMonth + 1, 0).getDate();
  
    // Set day of new month to either first or last day depending on if going right or not
    const newDayOfMonth = goingRight ? 1 : lastDayOfMonth;
  
    return {
      year: newYear,
      month: newMonth,
      number: newDayOfMonth,
      weekday: new Date(newYear, newMonth, newDayOfMonth).getDay()
    };
}

function MonthArrow(props) {

    const newDay = calculateNewDay(props.day, props.goingRight);

    return (
        <div onClick={() => props.changeCurrentDay(newDay)}>
            {props.goingRight ? <FaAngleRight className="month-arrow" /> : <FaAngleLeft className="month-arrow" />}
        </div>
    );
}

export default MonthArrow;