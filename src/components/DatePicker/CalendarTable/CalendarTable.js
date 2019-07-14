import React from 'react';

const calendarTable = ({ monthData, clicked }) => {

    return monthData.map(date => {
        const fullDate = `${date.month}-${date.day},-${date.year}`;
        const classes = [fullDate, date.monthClass];

        if (new Date(date.year, date.monthDigit, date.day) < new Date().setHours(0, 0, 0, 0)) {
            classes.push('date-disable');
        }

        return <div
            key={fullDate}
            className={classes.join(' ')}
            onClick={classes[2] ? null : clicked}>{date.day}</div>;
    });
}

export default calendarTable;