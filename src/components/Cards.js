import React, { Component } from 'react';
import {Grid, Card, CardActions, Button, CardContent, CardMedia, Typography, Chip, makeStyles } from '@material-ui/core';

import ProfileDialog from './ProfileDialog';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    height: 'auto',
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

function CharacterCards(props) {
  return (
    <Grid item xs={6} md={4} key={props.key}>
      <Card className={props.classname[0]}>
        <CardMedia className={props.classname[2]} component='img' alt={props.name} height='200' image={props.cardPhoto} title={props.key}>
        </CardMedia>

        <CardContent>
          <Typography variant='body2' color='textSecondary'>{props.group}</Typography>
          <Typography variant='h5' component='h2'>{props.name}</Typography>
          {/*<Chip gutterBottom variant='outlined' color='textSecondary' size='small' label={props.group}/>*/}
        </CardContent>

        <CardActions>
          <Button size='small' color='secondary'>View Profile</Button>
        </CardActions>
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

// constructor(props) {
//   super(props);
//   this.state = {
//     showModal: false
//   };
//
//   this.handleClick = this.handleClick.bind(this);
// }
//
// handleClick(event) {
//   this.setState({
//     showModal: !this.state.showModal
//   });
// }
//
// getComponent() {
//   if (this.state.showModal) {
//     return <ProfileDialog/>
//   }
//   else {
//     return null;
//   }
// }

export default Cards;
