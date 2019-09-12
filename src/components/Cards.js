import React from 'react';
import {Grid, Card, CardActions, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    height: 500,
    alignItems: 'baseline'
  },
  cardAction: {
    height: 'auto'
  },
  media: {
    paddingTop: '0'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  root: {
    flexGrow: 1
  }
}));

function RowHeaders(props) {
  return (
    <Grid item xs={12}>
      {props.value}
    </Grid>
  );
}

function CharacterCards(props) {
  return (
    <Grid item xs={6} md={4} key={props.key}>
      <Card className={props.classname[0]}>
        <CardMedia className={props.classname[2]} component='img' alt={props.name} height='200' image={props.cardPhoto} title={props.key}>
        </CardMedia>

        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>{props.name}</Typography>
          <Typography variant='body2' component='p' color='textSecondary'>{props.desc}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

const Cards = (props) => {
  const classes = useStyles();
  const muse = props.data.muse;
  const aqours = props.data.aqours;
  const cards = [];

  if (muse) {
    muse.map((member,i) => {
      cards.push(
        CharacterCards({
          classname: [classes.card, classes.cardAction, classes.media, classes.expand, classes.expandOpen],
          key: 'muse-' + i,
          name: member.name,
          desc: member.description,
          cardPhoto: member.cardPhoto,
          group: 'Muse'
        })
      )
    });
    // muse.map((member, i) => content.push(<CardPhoto data={{name: member.name, cardPhoto: member.cardPhoto}}/>, <CardDetails data={{name: member.name, desc: member.description, cardPhoto: member.cardPhoto}}/>));
    // console.log(cards);
  }

  if (aqours) {
    aqours.map((member, i) => {
      cards.push(CharacterCards({
        classname: [classes.card, classes.cardAction, classes.media, classes.expand, classes.expandOpen],
        key: 'aqours-' + i,
        name: member.name,
        desc: member.description,
        cardPhoto: member.cardPhoto,
        group: 'Aqours'
      }))
    });
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {cards}
      </Grid>
    </div>
  );
}

export default Cards;
