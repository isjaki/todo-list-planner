import React from 'react';

import List from '../List/List';
import './Lists.css';

const lists = React.forwardRef((props, ref) => {
    const todoLists = props.todoLists.map((list, index) => {
        return <List 
            key={list.id}
            title={list.title}
            date={list.date}
            deleteList={props.onListRemove.bind(this, index)} />
    });

    return (
        <div className={todoLists.length ? 'Lists' : null} ref={ref}>
            {todoLists}
        </div>
    );
})

export default lists;