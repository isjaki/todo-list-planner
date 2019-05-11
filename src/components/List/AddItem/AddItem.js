import React, { Component } from 'react';
import axios from '../../../axios-lists';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';
import Spinner from '../../UI/Spinner/Spinner';
import './AddItem.css';

class AddItem extends Component {
    state = {
        inputError: false,
        listLoading: false
    }

    addItemWrapper = (event) => {
        if (event.key && event.key !== 'Enter') return;

        if (!this.props.value) {
            this.setState({ inputError: true });
            return;
        }

        this.props.onAddListItem();
    }

    saveListHandler = () => {
        this.setState({ listLoading: true });

        const todoList = {
            listId: this.props.listData.id,
            title: this.props.listData.title,
            date: this.props.listData.date,
            listItems: this.props.listItems
        }

        axios.post('/lists.json', todoList)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                this.setState({ listLoading: false });
            });
    }

    inputFocusHandler = () => {
        if (this.state.inputError) {
            this.setState({
                inputError: false
            });
        }
    }

    render() {
        const inputClasses = ['AddItemInput'];

        if (this.state.inputError) {
            inputClasses.push('Error');
        }

        let saveListChildren = 'Save';

        if (this.state.listLoading) {
            saveListChildren = (
                <Spinner type="bounce" />
            );
        }

        return (
            <Aux>
                <input 
                    type="text"
                    className={inputClasses.join(' ')}
                    placeholder={this.state.inputError ? 'You must input something!' : "What are you up to?"}
                    value={this.props.value}
                    onChange={this.props.onInputChange}
                    onFocus={this.inputFocusHandler}
                    onKeyUp={this.addItemWrapper} />
                <Button
                    className="ListButton AddItem"
                    clicked={this.addItemWrapper}
                >Add</Button>
                <Button
                    className="ListButton SaveList"
                    clicked={this.saveListHandler}
                    disabled={this.state.listLoading}
                >{saveListChildren}</Button>
            </Aux>
        );
    }
}

export default AddItem;