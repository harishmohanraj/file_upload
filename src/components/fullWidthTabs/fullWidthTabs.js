import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import SimpleTable from '../simpleTable/simpleTable';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

let id = 0;
function createData(name, calories, fat, carbs, protein, a, b, c) {
  id += 1;
  return { id, name, calories, fat, carbs, protein, a, b, c };
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  },
});

const data = [
  createData('Loan', 'Lending','Loan', 'B', 'Lloyds','Loan', 'Halifax', 'Lending'),
  createData('APR', 'Lending', 'C', 'Halifax', 'Lloyds','Loan', 'Loan', 'APR'),
  createData('Lending', 'D', '16.0', 'Lending','Loan', '6.0', 'Halifax', 'A'),
  createData('Lloyds', 'Halifax', '3.7', 'Lloyds', '4.3','Loan', 'Lending', 'APR'),
  createData('Halifax', 'Loan', 'Lending', '49', 'Lloyds','Loan', 'Lending', 'Loan'),
];

const data_2 = [
  createData('Class B', 'Lending','Loan', 'B', 'Lloyds','Loan', 'Halifax', 'Lending'),
  createData('APR', 'Lending', 'C', 'Halifax', 'Lloyds','Loan', 'Loan', 'APR'),
  createData('Lending', 'D', '16.0', 'Lending','Loan', '6.0', 'Halifax', 'A'),
  createData('Lloyds', 'Halifax', '3.7', 'Lloyds', '4.3','Loan', 'Lending', 'APR'),
  createData('Halifax', 'Loan', 'Lending', '49', 'Lloyds','Loan', 'Lending', 'Loan'),
];

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
            centered
          >
            <Tab label="Class A" />
            <Tab label="Class B" />
            <Tab label="Class C" />
            <Tab label="Class D" />
            <Tab label="Class E" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}><SimpleTable data={data}/></TabContainer>
          <TabContainer dir={theme.direction}><SimpleTable data={data_2}/></TabContainer>
          <TabContainer dir={theme.direction}><SimpleTable data={data}/></TabContainer>
          <TabContainer dir={theme.direction}><SimpleTable data={data}/></TabContainer>
          <TabContainer dir={theme.direction}><SimpleTable data={data}/></TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);