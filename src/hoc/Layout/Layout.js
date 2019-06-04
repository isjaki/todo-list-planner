import React, { Component } from 'react';

import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Aux from '../Auxiliary/Auxiliary';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer />
                <main>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;