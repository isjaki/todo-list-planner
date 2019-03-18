import React from 'react';

import './AddList.css';
import Button from '../UI/Button/Button';

const addList = props => (
    <div className="AddList">
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
            <p>
                <label htmlFor="date">Set a date:</label>
                <br /><input 
                    id="date"
                    name="date" 
                    type="text"
                    value={props.date}
                    onChange={props.onDateChange} />
            </p>
            <Button
                clicked={props.addNewList}
                className="AddListButton"
            >Create</Button>
        </div>
    </div>
);

export default addList;