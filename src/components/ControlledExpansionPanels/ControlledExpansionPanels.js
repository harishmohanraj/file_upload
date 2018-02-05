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
import SimpleModal from '../simpleModal/simpleModal';
import './ControlledExpansionPanels.css';


const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.3%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
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
              <div className={classes.column}>
                <Typography className={classes.heading}>Publicis Groupe Leadership in APAC</Typography>
              </div>
              <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>Class B</Typography>
              </div>
              {/* <div className={classes.column}>
                <Typography className={classes.secondaryHeading}>Keywords</Typography>
              </div> */}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div className='panel-details'>
                <Typography type='body2' align='left'>
                Bonjour,
                I wanted to share some very exciting news about our organization in Asia Pacific.
                As I told you a few months ago during the 100 Days WebEx, we launched a country leadership model in Greater China, managed through a Groupe Leadership Team (GLT) and led by Loris Nold as Executive Sponsor.
                <br/><br />
                </Typography>
                <SimpleModal />
              </div>
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


