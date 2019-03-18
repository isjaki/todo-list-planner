import React from 'react';

import './AddList.css';

const addList = props => (
    <div className="AddList">
        <h1>TODO LIST PLANNER</h1>
        <div className="AddList__Create">
            <h2>Create your TODO list:</h2>
            <p>
                <label>Choose a title:
                    <input 
                        name="title"
                        type="text"
                        value={props.title}
                        onChange={props.onTitleChange} />
                </label>
            </p>
            <p>
                <label>Choose a date:
                    <input 
                        name="date" 
                        type="text"
                        value={props.date}
                        onChange={props.onDateChange} />
                </label>
            </p>
            <button
                onClick={props.addNewList}
            >Create</button>
        </div>
    </div>
);

export default addList;