import "./Calendar.css";

const TimeSlot = ({
  date,
  dateString,
  time,
  rowIndex,
  selectedRow,
  columnIndex,
  selectedColumn,
  timeDetailed,
  isBooked,
  today,
  onTimeSlotClick,
}) => {
  const handleClick = () => {
    if (date >= today && !isBooked) {
      console.log(timeDetailed);
      onTimeSlotClick(dateString, timeDetailed, rowIndex, columnIndex);
    }
  };

  const isSelected = () => {
    return rowIndex === selectedRow && columnIndex === selectedColumn;
  };

  return (
    <div
      className={`time-slot unselectable
                ${date < today ? "time-slot-past" : ""}
                ${isBooked ? "time-slot-booked" : ""}
                ${isSelected() ? "time-slot-selected" : ""}`}
      onClick={handleClick}
    >
      {time}
    </div>
  );
};

export default TimeSlot;
