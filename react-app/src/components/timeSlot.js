import "./Calendar.css";

const TimeSlot = ({
  date,
  dateString,
  time,
  timeDetailed,
  isBooked,
  isSelected,
  today,
  onTimeSlotClick,
}) => {
  const handleClick = () => {
    if (date >= today) {
      console.log(timeDetailed);
      onTimeSlotClick(dateString, timeDetailed);
    }
  };

  return (
    <div
      className={`time-slot 
                ${date < today ? "time-slot-past" : ""}
                ${isBooked ? "time-slot-booked" : ""}
                ${isSelected ? "time-slot-selected" : ""}`}
      onClick={handleClick}
    >
      {time}
    </div>
  );
};

export default TimeSlot;
