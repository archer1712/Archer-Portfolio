import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: 230,
    marginTop: 25,
    marginBottom: 25,
    border: "solid 3px white"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    width: 400,
    flex: '1 0 auto',
    textAlign: "left"
  },
  cover: {
    width: 500,
    alignSelf: "right"
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function MediaControlCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {props.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" className={classes.subtitle}>
            {props.subtitle}
          </Typography>
          <br/>
          <Typography variant="body1">
            {props.description}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={props.image}
        title={props.title}
      />
    </Card>
  );
}
