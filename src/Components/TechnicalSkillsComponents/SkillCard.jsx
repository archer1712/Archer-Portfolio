import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    width: 200,
    minHeight: 140,
    margin: 20,
    justifyContent: "center",
    alignItems: "center"
  },
});

export default function SkillCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          title={props.title}
        />
      </CardActionArea>
    </Card>
  );
}