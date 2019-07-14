import React, { Component, Fragment } from 'react';

import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        sideDrawerOpened: false
    }

    toggleSideDrawerHandler = () => {
        this.setState(prevState => ({
            sideDrawerOpened: !prevState.sideDrawerOpened
        }));
    }

    render() {
        return (
            <Fragment>
                <Toolbar 
                    toggleSideDrawer={this.toggleSideDrawerHandler}
                    sideDrawerOpened={this.state.sideDrawerOpened}
                />
                <SideDrawer 
                    opened={this.state.sideDrawerOpened}
                    closeSideDrawer={this.toggleSideDrawerHandler}
                />
                <main>
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
}

export default Layout;