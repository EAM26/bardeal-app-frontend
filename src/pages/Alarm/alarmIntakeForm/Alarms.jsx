import React, {useEffect} from 'react';
import axios from "axios";

function Alarms() {
    const[alarmIntakes, setAlarmIntakes] = React.useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8080/alarm", {
                    withCredentials: true
                });
                setAlarmIntakes(response.data);
                console.log("Alarm intakes: " ,response.data);
            } catch (e) {
                console.error(e);
            }
        };
        void fetchData();
    }, [])

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Timestamp</th>
                    <th>Company Name</th>
                    <th>Text</th>
                </tr>
                </thead>
                <tbody>
                {alarmIntakes.map(alarmIntake => (
                    <tr key={alarmIntake.id}>
                        <td>{alarmIntake.timestamp}</td>
                        <td>{alarmIntake.companyName}</td>
                        <td>{alarmIntake.text}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Alarms;