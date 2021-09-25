import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "../Themes/Theme";

export const useStyles = makeStyles(() => ({
    header: {
        width: "100%",
        minHeight: "90vh",
        height: "auto",
        background: Theme.colors.primary,
    },
    navbar: {
        background: Theme.colors.base1,
        fontStyle: "bold",
        // position: "fixed"
    },
    toolbar: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between"
    },
    headertext: {
        width: "50%",
        minHeight: "50vh",
        height: "auto",
        color: Theme.colors.base2,
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center",
        marginTop: "55px",
        padding: "100px",
        textAlign: "left",
    },
    desc: {
        fontSize: "1.75rem"
    },
    title: {
        fontSize: "3rem"
    },
    intro: {
        fontSize: "1.25rem"
    },
    button: {
        color: Theme.colors.base2,
    },
    aboutme: {
        display: "flex",
        fontWeight: "bolder",
        position: "relative",
        marginTop: "20px",
        "&:before": {
        width: "40px",
        height: "40px",
        backgroundColor: "#000000",
        content: '""',
        borderRadius: "50%",
        },
    },
    aboutmetext: {
        position: "absolute",
        lineHeight: "40px",
        left: "20px",
        color: "red"
    },
    arrow: {
        color: "white",
        position: "absolute",
        left: "135px",
        lineHeight: "30px",
        animationName: "upDown",
        animationDuration: "0.7s",
        animationIterationCount: "infinite"
    },

    "@global": {
        "@keyframes upDown": {
          "0%": {
            transform: "scale(1,0.4)",
            paddingTop: "0px",
          },
          "100%": {
            transform: "scale(1,1.2)",
            paddingTop: "10px",
          },
        },
      },
    
}))