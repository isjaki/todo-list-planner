import React from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';
import './AddItem.css';

const addItem = props => {
    const inputClasses = ['AddItemInput'];

    if (props.hasError) {
        inputClasses.push('Error');
    }

    const addItemByEnterClick = (event) => {
        if (event.key !== 'Enter') return;
        props.onAddListItem();
    }

    return (
        <Aux>
            <input 
                type="text"
                className={inputClasses.join(' ')}
                placeholder={props.hasError ? 'You must input something!' : "What are you up to?"}
                value={props.value}
                onChange={props.onTaskNameInput}
                onFocus={props.onInputFocus}
                onKeyUp={addItemByEnterClick} />
            <Button
                className="ListButton AddItem"
                clicked={props.onAddListItem}
            >Add</Button>
            <Button
                className="ListButton SaveList"
            >Save</Button>
        </Aux>
    );
}

export default addItem;