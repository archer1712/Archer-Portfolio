import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import { useStyles } from './HeaderStyles';
import Navbar from './Navbar';
import { IconButton, } from '@material-ui/core';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

export default function Header() {
    const classes = useStyles()
    return (
        <Box className={classes.header}>
            <Navbar />
            <Box className={classes.headertext}>
                <Typography variant="h3" component="h4" className={classes.desc}>Hi everyone, This is Jahnavi Gurdasani,</Typography><br/>
                <Typography variant="h3" component="h4" className={classes.title}>I am a Development Enthusiast|</Typography>
                <br/>
                <br/>
                <Typography variant="h4" component="h4" className={classes.intro}>I am a 3rd yearite at BITS Hyderabad, pursuing B.E. Electronics and Communications. Over the last year, I have explored the world of development and developed the knack for it, and am excited to pursue it as a career.</Typography>
                <br/>
                <Box className={classes.aboutme}>
                    <Typography variant="span" className={classes.aboutmetext}>More About Me</Typography>
                    <IconButton className={classes.arrow}><ArrowDownwardIcon /></IconButton>
                </Box>
            </Box>
        </Box>
    )
}
