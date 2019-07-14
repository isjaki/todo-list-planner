import React from 'react';

import Calendar from './Calendar/Calendar';
import './DatePicker.css';

const datePicker = ({
    openCalendarHandler, 
    pickDateHandler,
    calendarOpened,
    pickedDate
}) => {
    return (
        <div className="DatePicker" onClick={openCalendarHandler}>
            {calendarOpened ? 
            <Calendar dateClicked={pickDateHandler} /> : 
            <div className="DatePicker__CurrentDate">{pickedDate}</div>}
        </div>
    );
}

export default datePicker;