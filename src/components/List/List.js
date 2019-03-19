import React, { Component } from 'react';

import ListItems from '../List/ListItems/ListItems';
import AddItem from '../List/AddItem/AddItem';
import Button from '../UI/Button/Button';
import './List.css';

class List extends Component {
    render() {
        return (
            <div className="List">
                <div>
                    <span>{this.props.title}</span><span>{this.props.date}</span>
                    <Button 
                        onClick={this.props.deleteList}
                        className="ListButton Delete"
                    >Delete</Button>
                </div>
                <ListItems />
                <AddItem />
            </div>
        );
    }
}

export default List;