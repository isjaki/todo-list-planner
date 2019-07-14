import React, { Fragment } from 'react';

import Button from '../../UI/Button/Button';
import './AddItem.css';

const addItem = ({
    inputError,
    value,
    onInputChange,
    onAddListItem
}) => {
    const inputClasses = ['AddItemInput'];

    if (inputError) {
        inputClasses.push('Error');
    }

    return (
        <Fragment>
            <input 
                type="text"
                className={inputClasses.join(' ')}
                placeholder={inputError ? 'You must input something!' : "What are you up to?"}
                value={value}
                onChange={onInputChange}
                onKeyUp={onAddListItem} />
            <Button
                className="ListButton AddItem"
                clicked={onAddListItem}
            >Add</Button>
        </Fragment>
    );
}

export default addItem;