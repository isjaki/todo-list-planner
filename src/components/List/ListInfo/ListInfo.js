import React, { Fragment } from'react';

import './ListInfo.css';

const listInfo = ({ date, title }) => (
    <Fragment>
        <div className="List__Date">
            <i className="far fa-clock"></i>{date}
        </div>
        <div className="List__Title">
            {title}
        </div>
    </Fragment>
);

export default listInfo;
