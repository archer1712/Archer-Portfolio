import React, { useRef, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Alert, AlertTitle } from "@material-ui/lab";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Theme } from "../Themes/Theme";

//Renders copyrights
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/dashboard">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "80px 0px",
    width: "100%",
    minHeight: "90vh",
    background: Theme.colors.primary
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#D0D0D0"
  },
  heading: {
    color: "white",
    fontSize: "3rem"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "120%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    "&:hover": {
      backgroundColor: "#D0D0D0",
      color: "black"
    },
    "&:active": {
      backgroundColor: "#D0D0D0",
      color: "black"
    },
    backgroundColor: "red"
  },
  alertBox: {
    marginTop: theme.spacing(1),
    width: "100%",
  },
  text: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#D0D0D0",
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#D0D0D0",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#D0D0D0",
    },
    "& .MuiOutlinedInput-input": {
      color: "#D0D0D0",
    },
    "&:hover .MuiOutlinedInput-input": {
      color: "#D0D0D0",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "#D0D0D0",
    },
    "& .MuiInputLabel-outlined": {
      color: "#D0D0D0",
    },
    "&:hover .MuiInputLabel-outlined": {
      color: "#D0D0D0",
    },
    "& .MuiInputLabel-outlined.Mui-focused": {
      color: "#D0D0D0",
    },
  },
  links: {
    color: "#white",
  },
  copyright: {
    color: "white"
  }
}));

function ContactMe() {
  const classes = useStyles();
  const emailRef = useRef();
  const nameRef = useRef();
  const introRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  //Handles sign up using auth provider
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
    } catch (err) {
      console.log(err);
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  //Renders all components
  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5" color="#ffffff" className={classes.heading}>
            Contact Me!
          </Typography>
          {error && (
            <div className={(classes.root, classes.alertBox)}>
              <Alert className={classes.alert} severity="error">
                <AlertTitle>
                  <strong>ERROR</strong>
                </AlertTitle>
                {error}
              </Alert>
            </div>
          )}
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="Type your name..."
              inputRef={nameRef}
              autoFocus
              className={classes.text}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email Address"
              type="email"
              id="email"
              inputRef={emailRef}
              autoComplete="YourEmail@domain.com"
              className={classes.text}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="intro"
              label="Introduction"
              type="intro"
              id="intro"
              inputRef={introRef}
              autoComplete="Want to Introduce Yourself?"
              className={classes.text}
            />
            <Button
              type="submit"
              disabled={loading}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Send Me an Email!
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright className={classes.copyright}/>
        </Box>
      </Container>
    </div>
  );
}

export default ContactMe;