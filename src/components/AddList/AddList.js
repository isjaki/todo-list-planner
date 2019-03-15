import React from 'react';

const addList = props => (
    <div>
        <h2>Create a TODO list</h2>
        <p>
            <label htmlFor="name">Choose a name:</label>
            <input id="name" name="name" type="text" />
        </p>
        <p>
            <label htmlFor="date">Choose a date:</label>
            <input id="date" name="date" type="text" />
        </p>
        <button>CREATE</button>
    </div>
);

export default addList;