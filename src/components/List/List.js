import React, { Component } from 'react';

class List extends Component {
    render() {
        return (
            <div>List
                <header>
                    <span>Title</span><span>Date</span>
                    <button>DELETE</button>
                </header>
            </div>
        );
    }
}

export default List;