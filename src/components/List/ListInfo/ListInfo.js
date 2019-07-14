import React, { Fragment } from'react';

import './ListInfo.css';

const listInfo = props => (
    <Fragment>
        <div className="List__Date">
            <i className="far fa-clock"></i>{props.date}
        </div>
        <div className="List__Title">
            {props.title}
        </div>
    </Fragment>
);

export default listInfo;
