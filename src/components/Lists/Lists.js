import React from 'react';

import List from '../List/List';

const lists = props => {
    const todoLists = props.todoLists.map(list => {
        return <List 
            key={list.id}
            title={list.title}
            date={list.date} />
    });

    return (
        <div>
            {todoLists}
        </div>
    );
}

export default lists;