import React, { Component } from 'react';

import Toolbar from '../../components/Toolbar/Toolbar';
import Aux from '../Auxiliary/Auxiliary';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Toolbar />
                {/* <SideDrawer /> */}
                <main>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;