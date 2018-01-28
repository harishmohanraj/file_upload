import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ExpansionPanel, {
  ExpansionPanelDetails,
  ExpansionPanelSummary,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './ControlledExpansionPanels.css';


const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
});

class ControlledExpansionPanels extends React.Component {
  state = {
    expanded: null,
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  renderResults(classes, expanded) {
    let arr = []
    for(let i = 1; i<=30; i++) {
      arr.push(
        <ExpansionPanel expanded={expanded === 'panel'+i} onChange={this.handleChange('panel'+i)}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Email {i}</Typography>
              <Typography className={classes.secondaryHeading}>Class B</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography align='center'>
                The reason goes here...
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
      )
    }
    return arr;
  }

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <div className='results-component'>
        <MuiThemeProvider className={classes.root}>
          {this.renderResults(classes, expanded)}
        </MuiThemeProvider>
      </div>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledExpansionPanels);


