import React, { Component } from 'react';

import ListItems from '../List/ListItems/ListItems';
import AddItem from '../List/AddItem/AddItem';

class List extends Component {
    render() {
        return (
            <div>
                <div>
                    <span>{this.props.title}</span><span>{this.props.date}</span>
                    <button onClick={this.props.deleteList}>DELETE</button>
                </div>
                <ListItems />
                <AddItem />
                <button>SAVE</button>
            </div>
        );
    }
}

export default List;