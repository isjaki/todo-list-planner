import React, { Component } from 'react';

import HamburgerButton from '../UI/Button/HamburgerButton/HamburgerButton';
import './Toolbar.css';

class Toolbar extends Component {
    render() {
        return (
            <header className="Toolbar">
                <HamburgerButton />
            </header>
        );
    }
}

export default Toolbar;