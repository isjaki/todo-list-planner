import React, { Component } from 'react';

import HamburgerButton from '../../components/UI/Button/HamburgerButton/HamburgerButton';
import './Toolbar.css';

class Toolbar extends Component {
    render() {
        return (
            <header className="Toolbar">
                <HamburgerButton 
                    onClick={this.props.toggleSideDrawer}
                    sideDrawerOpened={this.props.sideDrawerOpened}
                />
            </header>
        );
    }
}

export default Toolbar;