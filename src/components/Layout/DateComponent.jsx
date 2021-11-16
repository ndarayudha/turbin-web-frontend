import React, { useState } from 'react'
import styled from 'styled-components';


const Timer = styled.p`
    font-size: 1rem;
    font-weight: 800;
    opacity: 0.8;
`


const DateComponent = () => {

    const [date, setDate] = useState('');

    const getCurrentDate = () => {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        return dateTime;
    }

    setInterval(() => { const currentDate = getCurrentDate(); setDate(currentDate); }, 1000);


    return (
        <React.Fragment>
            <Timer>
                {date}
            </Timer>
        </React.Fragment>
    )
}

export default DateComponent
