import React from 'react';

import './AddList.css';
import Button from '../UI/Button/Button';
import DatePicker from '../DatePicker/DatePicker';

const addList = props => (
    <div className="AddList" onClickCapture={props.closeCalendarHandler}>
        <h1>TODO LIST PLANNER</h1>
        <div className="AddList__Create">
            <h2>Create a TODO list:</h2>
            <p>
                <label htmlFor="title">Give a title to your list:</label>
                <br /><input 
                    id="title"
                    name="title"
                    type="text"
                    value={props.title}
                    onChange={props.onTitleChange} />
            </p>
            <div className="DatePicker__Container">
                <label>Set a date:</label>
                <DatePicker
                    pickedDate={props.pickedDate}
                    calendarOpened={props.calendarOpened}
                    openCalendarHandler={props.openCalendarHandler}
                    pickDateHandler={props.pickDateHandler} />
            </div>
            <Button
                clicked={props.addNewList}
                className="AddListButton"
            >Create</Button>
        </div>
    </div>
);

export default addList;