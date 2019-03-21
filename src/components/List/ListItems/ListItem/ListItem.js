import React from 'react';

import Button from '../../../UI/Button/Button';

const listItem = props => (
    <li>{props.completed ? <i className="fas fa-check-square"></i> : <i className="far fa-clock"></i>}
        {props.taskName}
        <Button><i className="fas fa-check"></i></Button>
        <Button><i className="fas fa-times"></i></Button>
    </li>
);

export default listItem;