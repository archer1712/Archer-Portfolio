import React from "react";
import { makeStyles } from "@material-ui/core";
import { Theme } from "../Themes/Theme";

export const useStyles = makeStyles(() => ({
    Projects: {
        width: "100%",
        minHeight: "90vh",
        height: "auto",
        background: Theme.colors.primary,
        padding: "100px 0px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    heading: {
        fontStyle: "bold",
        fontSize: "3rem",
        padding: "50px"
    },
    projlist: {
        height: "auto",
        width: "59vw"
    }
}))