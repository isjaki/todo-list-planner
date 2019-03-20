import React, { Component } from 'react';

import ListItems from '../List/ListItems/ListItems';
import AddItem from '../List/AddItem/AddItem';
import Button from '../UI/Button/Button';
import './List.css';

class List extends Component {
    render() {
        return (
            <div className="List">
                <div className="List__Date"><i class="far fa-clock"></i><span>{this.props.date}</span></div>
                <div className="List__Title">{this.props.title}</div>
                <Button 
                    onClick={this.props.deleteList}
                    className="ListButton Delete"
                >Delete</Button>
                <ListItems />
                <AddItem />
            </div>
        );
    }
}

export default List;