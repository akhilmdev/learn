import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './cardHeader.style';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

interface CardHeaderProps {
    title?: string;
    permssion?: boolean;
    onClick?: any;
}
function CardHeader(props: CardHeaderProps) {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar variant="dense" className={classes.toolBar}>
                <img src={`${process.env.PUBLIC_URL}/logo512.png`} className={classes.logo} />
                <Typography variant="h6" color="inherit">
                    LEarn
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default CardHeader;
