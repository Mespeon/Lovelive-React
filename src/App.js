import React, { Component } from 'react';
import { Container, Typography } from '@material-ui/core';
import MenuDrawer from './components/MenuDrawer';
import Cards from './components/Cards';

import './App.css';

class App extends Component {
  // This class' state
  state = {
    muse: [],
    aqours: []
  }

  // This class' constructor
  constructor() {
    super();  // no props since no props are passed to it
    this.getData();
  }

  // Get data using fetch()
  getData = () => {
    fetch('https://marknolledo.pythonanywhere.com/sibyl/ionic/stargazer').then(response => {
      return response.json();
    }).then(data => {
      this.setState({
        muse: data.data.Muse,
        aqours: data.data.Aqours
      });
    }).catch(ex => {
      console.log(ex);
    });
  }

  // Render the page
  render() {
    const data = [];
    const muse = this.state.muse;
    const aqours = this.state.aqours;
    const drawerData = {
      title: 'Love Live!',
      muse: muse,
      aqours: aqours
    }

    return (
      <div>
        <MenuDrawer data={drawerData}/>
        <Container maxWidth='md'>
          <div class='cardsContainer'>
            <Typography variant='h3' component='h1' color='textPrimary'>
              Spreading musical joy through the years!
            </Typography>
            {/* Navbar taken from NavBar component with a custom text value passed to it. */}
            <div class='cards'>
              <Cards data={{muse: drawerData.muse, aqours: drawerData.aqours}}/>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
