import React from 'react';

const addList = props => (
    <div>
        <h2>Create a TODO list</h2>
        <p>
            <label>Choose a title:
                <input name="title" type="text" />
            </label>
        </p>
        <p>
            <label>Choose a date:
                <input id="date" name="date" type="text" />
            </label>     
        </p>
        <button>CREATE</button>
    </div>
);

export default addList;