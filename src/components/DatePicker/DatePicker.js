import React from 'react';

import Calendar from './Calendar/Calendar';
import './DatePicker.css';

const datePicker = props => {
    return (
        <div className="DatePicker" onClick={props.openCalendarHandler}>
            {
                props.calendarOpened ? 
                <Calendar dateClicked={props.pickDateHandler} /> : 
                <div className="DatePicker__CurrentDate">{props.pickedDate}</div>
            }
        </div>
    );
}

export default datePicker;