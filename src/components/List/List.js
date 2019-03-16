import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <div>
                <div>
                    <span>{this.props.title}</span><span>{this.props.date}</span>
                    <button onClick={this.props.deleteList}>DELETE</button>
                </div>
                <div>ListItems</div>
                <div>AddItem</div>
                <button>SAVE</button>
            </div>
        );
    }
}

export default List;