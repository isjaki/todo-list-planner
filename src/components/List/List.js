import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <div>
                <header>
                    <span>{this.props.title}</span><span>{this.props.date}</span>
                    <button>DELETE</button>
                </header>
            </div>
        );
    }
}

export default List;