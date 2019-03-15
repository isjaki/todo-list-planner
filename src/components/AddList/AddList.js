import React from 'react';

const addList = props => (
    <div>
        <h2>Create a TODO list</h2>
        <p>
            <label>Choose a title:
                <input 
                    name="title"
                    type="text"
                    onChange={props.onTitleChange} />
            </label>
        </p>
        <p>
            <label>Choose a date:
                <input 
                    name="date" 
                    type="text"
                    onChange={props.onDateChange} />
            </label>     
        </p>
        <button
            onClick={props.addNewList}
        >CREATE</button>
    </div>
);

export default addList;