import React, { Component } from 'react';

import ListItems from '../List/ListItems/ListItems';
import AddItem from '../List/AddItem/AddItem';
import './List.css';

class List extends Component {
    render() {
        return (
            <div className="List">
                <div>
                    <span>{this.props.title}</span><span>{this.props.date}</span>
                    <button onClick={this.props.deleteList}>Delete</button>
                </div>
                <ListItems />
                <AddItem />
            </div>
        );
    }
}

export default List;