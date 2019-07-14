import React from 'react';

import List from '../../../containers/List/List';
import './Lists.css';

const lists = React.forwardRef(({ todoLists, onListRemove }, ref) => {
    return (
        <div className={todoLists.length ? 'Lists' : null} ref={ref}>
            {todoLists.map((list, index) => {
                return <List 
                    key={list.id}
                    listData={list}
                    deleteList={() => onListRemove(index)} />
            })}
        </div>
    );
});

export default lists;