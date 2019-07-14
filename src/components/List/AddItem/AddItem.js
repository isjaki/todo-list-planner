import React from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';
import './AddItem.css';

const addItem = props => {
    const inputClasses = ['AddItemInput'];

    if (props.inputError) {
        inputClasses.push('Error');
    }

    return (
        <Aux>
            <input 
                type="text"
                className={inputClasses.join(' ')}
                placeholder={props.inputError ? 'You must input something!' : "What are you up to?"}
                value={props.value}
                onChange={props.onInputChange}
                onKeyUp={props.onAddListItem} />
            <Button
                className="ListButton AddItem"
                clicked={props.onAddListItem}
            >Add</Button>
        </Aux>
    );
}

export default addItem;