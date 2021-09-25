import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './ProjectsStyles';
import ProjectCard from './ProjectCard';
import archerclone from '../Images/msarcherclone2.png';

const ProjectList = [
    {
        Title: "MS Teams : Archer Clone",
        Subtitle: "Project under mentorship @ Microsoft Engage Program 2021",
        Description: "This is a Real-Time video calling application. It includes additional features like a fully functional chat application, user authentication, audio-video toggles, share screen, automated mail invite, intuitive UI and many more features to make the virtual meet a seemless experience for the user.",
        Image: archerclone
    }
]

export default function Projects() {
    const classes = useStyles();
    return (
        <Box className={classes.Projects}>
            <Typography variant="h3" className={classes.heading}>Projects</Typography>
            <br/>
            <br/>
            <Box className={classes.projlist}>
                {ProjectList.map(Project => {
                    return(
                        <ProjectCard title={Project.Title} subtitle={Project.Subtitle} description={Project.Description} image={Project.Image}/>
                    )
                })}
            </Box>
        </Box>
    )
}
