export default function ButtonBook({ date, time }) {

    return (
        <div onClick={() => {
            if (date !== '' && time != '') {
                const data = { 
                    date, 
                    time, 
                    isBooked: true 
                };
                const options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                };
                fetch("/api", options);

                console.log("Tid bokad:");
                console.log(date);
                console.log(time);
            } else {
                console.log("Datum och/eller tid ej vald. Lyckades ej boka tid");
            }
        }}>
            <button>Boka</button>
        </div>
    )
}
        