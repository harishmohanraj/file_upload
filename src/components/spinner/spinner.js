import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { CircularProgress } from 'material-ui/Progress';
import './spinner.css'

const Spinner = () => (
  <div className='overlay'>
    <MuiThemeProvider>
      <CircularProgress size={60} thickness={7} />
    </MuiThemeProvider>
  </div>
);

export default Spinner;