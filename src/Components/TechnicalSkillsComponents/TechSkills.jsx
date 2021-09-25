import { Box, Typography } from '@material-ui/core'
import React from 'react';
import { useStyles } from './TechSkillsStyles';
import SkillCard from './SkillCard';
import reactpic from "../Images/react.png";
import nodepic from "../Images/node2.png";
import expresspic from "../Images/express.jpeg";
import jspic from "../Images/js3.jpg";
import skio from "../Images/skio.png";
import oop from "../Images/oop.jpg";
import webrtc from "../Images/WEBRTC.jpeg";
import mongopic from "../Images/mongodbpic.jpg";
import javapic from "../Images/java.jpg";
import fbpic from "../Images/firebase.png";
import pypic from "../Images/python.png";


const skills = [
    {
        title: "React.js",
        image: reactpic
    },
    {
        title: "Socket.io",
        image: skio
    },
    {
        title: "Express.js",
        image: expresspic
    },
    {
        title: "OOP",
        image: oop
    },
    {
        title: "Node.js",
        image: nodepic
    },
    {
        title: "WebRTC",
        image: webrtc
    },
    {
        title: "MongoDB",
        image: mongopic
    },
    {
        title: "Java",
        image: javapic
    },
    {
        title: "Javascript",
        image: jspic
    },
    {
        title: "Firebase",
        image: fbpic
    },
    {
        title: "Python",
        image: pypic
    }           
]

export default function TechSkills() {
    const classes = useStyles();
    return (
        <Box className={classes.techskills}>
            <Typography variant="h1" component="h3" className={classes.heading}>Technical Skills</Typography>
            <br/>
            <br/>
            <Box className={classes.skilllist}>
                {skills.map((skill) => {
                    return(
                        <SkillCard title={skill.title} image={skill.image}/>
                    );
                })}
            </Box>
        </Box>
    )
}

