import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const navigationItems = props => (
    <ul className="NavigationItems">
        <NavigationItem>Create List</NavigationItem>
        <NavigationItem>My Lists</NavigationItem>
    </ul>
);

export default navigationItems;