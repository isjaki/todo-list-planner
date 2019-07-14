import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';
import './AddItem.css';

class AddItem extends Component {
    render() {
        const inputClasses = ['AddItemInput'];

        if (this.props.inputError) {
            inputClasses.push('Error');
        }

        return (
            <Aux>
                <input 
                    type="text"
                    className={inputClasses.join(' ')}
                    placeholder={this.props.inputError ? 'You must input something!' : "What are you up to?"}
                    value={this.props.value}
                    onChange={this.props.onInputChange}
                    onKeyUp={this.props.onAddListItem} />
                <Button
                    className="ListButton AddItem"
                    clicked={this.props.onAddListItem}
                >Add</Button>
            </Aux>
        );
    }
}

export default AddItem;