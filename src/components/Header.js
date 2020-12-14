import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';

export const Header = (props) => {
    return(
        <Fragment>
            <Typography variant="h4" component="h4" style={{fontStyle:'italic'}}>
                {props.title}
            </Typography>
        </Fragment>
    )
}