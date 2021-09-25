import React from "react";
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: "15vh",
      width: "100%",
      border: "solid 2px green"
    },
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      "&:hover": {
        backgroundColor: "#3e2723",
      },
      "&:active": {
        backgroundColor: "#3e2723",
      },
    },
    alertBox: {
      marginTop: theme.spacing(1),
      width: "100%",
    },
    text: {
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#3e2723",
      },
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#3e2723",
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#3e2723",
      },
      "& .MuiOutlinedInput-input": {
        color: "#3e2723",
      },
      "&:hover .MuiOutlinedInput-input": {
        color: "#3e2723",
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
        color: "#3e2723",
      },
      "& .MuiInputLabel-outlined": {
        color: "#3e2723",
      },
      "&:hover .MuiInputLabel-outlined": {
        color: "#3e2723",
      },
      "& .MuiInputLabel-outlined.Mui-focused": {
        color: "#3e2723",
      },
    },
    links: {
      color: "#3e2723",
    },
  }));