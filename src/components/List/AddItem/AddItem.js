import React from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';
import './AddItem.css';

const addItem = props => (
    <Aux>
        <input 
            type="text"
            className="AddItemInput"
            placeholder="What are you up to?" />
        <Button
            className="ListButton AddItem"
        >Add</Button>
    </Aux>
);

export default addItem;