import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import GoogleMap from './GoogleMap';

const styles = {
  card: {
    minWidth: 275,
    padding: '6px 24px'
  },
  cardTitle: {
    marginTop: 14,
    marginBottom: 14,
    padding: 15,
    background: '#008823',
    color: 'white'
  },
  mapContainer: {
    height: 300,
    width: '100%',
    position: 'relative',
    marginBottom: 14,
    borderRadius: 4,
    overflow: 'hidden'
  }
};

class Contact extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="Component Mprofood">
        <Card className={classes.card}>
          <Card className={classes.cardTitle}>
            {this.props.languageObjectProp.data.contact.title}
          </Card>
          <div className={classes.mapContainer}>
            <GoogleMap />
          </div>
        </Card>
      </div>
    )
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);