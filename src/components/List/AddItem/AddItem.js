import React from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';
import Spinner from '../../UI/Spinner/Spinner';
import './AddItem.css';

const addItem = props => {
    const inputClasses = ['AddItemInput'];

    if (props.hasError) {
        inputClasses.push('Error');
    }

    let saveListChildren = 'Save';

    if (props.isLoadingInProcess) {
        saveListChildren = (
            <Spinner type="bounce" />
        );
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
                clicked={props.onListSave}
                disabled={props.isLoadingInProcess}
            >{saveListChildren}</Button>
        </Aux>
    );
}

export default addItem;