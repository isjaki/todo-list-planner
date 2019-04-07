import React from 'react';

const calendarTable = props => {

    return props.monthData.map((date, index) => {
        const fullDate = `${date.month}-${date.day},-${date.year}`;
        const classes = [fullDate, date.monthClass];

        if (new Date(date.year, date.monthDigit, date.day) < new Date().setHours(0, 0, 0, 0)) {
            classes.push('date-disable');
        }
        return <div
            key={fullDate}
            className={classes.join(' ')}
            onClick={classes[2] ? null : props.clicked}>{date.day}</div>
    });
}

export default calendarTable;