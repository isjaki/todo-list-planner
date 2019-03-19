import React from 'react';

import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

const addItem = props => (
    <Aux>
        <input type="text" />
        <Button
            className="ListButton AddItem"
        >Add</Button>
    </Aux>
);

export default addItem;