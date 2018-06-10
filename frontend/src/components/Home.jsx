import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

class Home extends Component {
    
  render() {
    
    return (
        <Grid container spacing={24}>
            <Grid item xs={12}>
                <p>Boilerplate!!!</p>
            </Grid>
            <Grid item xs={12}>
                <Link to="/example">Click Here</Link>
            </Grid>
        </Grid>
    )
  }
}

export default Home;