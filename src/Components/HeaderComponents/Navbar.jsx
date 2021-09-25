import React from 'react';
import { AppBar, Button, Toolbar, Typography, Box, Hidden, IconButton} from '@material-ui/core';
import { useStyles } from './HeaderStyles';
import MenuIcon from '@material-ui/icons/Menu';
import { Theme } from '../Themes/Theme';

export default function Navbar() {
    const classes = useStyles();

    const navlinks = [
        { label: "About", id: "About" },
        { label: "Skills", id: "Skills" },
        { label: "Projects", id: "Projects" },
        { label: "Contact", id: "Contact Me" },
        { label: "Experience", id: "Experience"}
    ]

    return (
        <div>
            <AppBar position="fixed" className={classes.navbar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h4" className={classes.title}>
                        {`< Jahnavi />`}
                    </Typography>
                    <Box className={classes.menu}>
                        <Box component={Hidden} smDown>
                            <Box>
                                {navlinks.map(item => {
                                    return (
                                        <Button className={classes.button}>
                                            {item.label}
                                        </Button>
                                    )
                                })}
                            </Box>
                        </Box>
                        <Box >
                            <IconButton color="#ffffff" component={Hidden} mdUp>
                                <MenuIcon onClick={()=>{console.log("Menu clicked")}}/>
                            </IconButton>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}
