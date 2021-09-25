import React from "react";
import { makeStyles } from "@material-ui/core";
import { Theme } from "../Themes/Theme";


export const useStyles = makeStyles(() => ({
    techskills: {
        width: "100%",
        minHeight: "100vh",
        background: Theme.colors.primary,
        height: "auto",
        color: "white",
        padding: "100px 0px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    heading: {
        fontSize: "3.5rem",
        fontStyle: "bold"
    },
    skilllist: {
        margin: "50px 20px",
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        maxWidth: "65%",
        height: "auto",
        justifyContent: "center"
    },
}))