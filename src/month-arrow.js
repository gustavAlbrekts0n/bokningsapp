function MonthArrow(props) {

    let newDay = {
        month: props.goingRight ? props.day.getMonth() + 1 : props.day.getMonth() - 1,
        number: props.day.getDate(),
        year: props.day.getFullYear(),
    }

    return (
        <div onClick={() => props.changeCurrentDay(newDay)}>
            <p>CLICK ME</p>
        </div>
    );
}

export default MonthArrow;