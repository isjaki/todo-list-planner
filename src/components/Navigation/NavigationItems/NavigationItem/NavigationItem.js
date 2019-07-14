import React from 'react';
import { Link } from 'react-router-dom';

import './NavigationItem.css';

const navigationItem = ({ link, children }) => (
    <li className="NavigationItem">
        <Link to={link}>{children}</Link>
    </li>
);

export default navigationItem;