import React from 'react';

import Button from '../Button';
import Spinner from '../../Spinner/Spinner';
import '../Button.css';
import './SaveButton.css';

const saveButton = props => (
    <Button
        className="ListButton SaveList"
        clicked={props.onSave}
        disabled={props.isSaving}
    >
        {props.isSaving ? <Spinner type="bounce" /> : 'Save'}
    </Button>
);

export default saveButton;