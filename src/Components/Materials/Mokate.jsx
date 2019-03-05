import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import img1 from '../../images/mokate_logo.png';

const styles = theme => ({
  card: {
    minWidth: 275,
    padding: '6px 24px'
  },
  cardImg: {
    height: 'auto',
    marginBottom: 14,
    padding: 16,
    textAlign: 'left'
  },
  cardTitle: {
    marginTop: 14,
    padding: 15,
    background: '#008823',
    color: 'white'
  },
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

class Mokate extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className="Component Mokate">
        <Card className={classes.cardImg + ' card-image'}>
          <img src={img1} alt="Mokate" height="90px" align="middle" />
        </Card>
        <div className={classes.root}>
          <ExpansionPanel className="exp-panel">
            <div className="background-image mokacb-img"></div>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>{this.props.languageObjectProp.data.mokate.mokacb.title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div className="text">
                <p>{this.props.languageObjectProp.data.mokate.mokacb.part1}</p>
                <h4>{this.props.languageObjectProp.data.mokate.mokacb.part2}</h4>
                <ul>
                  {this.props.languageObjectProp.data.mokate.mokacb.part3.map((value, i) =>
                    <li key={i}>
                      {value}
                    </li>
                  )}
                </ul>
                <h4>{this.props.languageObjectProp.data.mokate.mokacb.part4}</h4>
                <ul>
                  {this.props.languageObjectProp.data.mokate.mokacb.part5.map((value, i) =>
                    <li key={i}>
                      {value}
                    </li>
                  )}
                </ul>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel className="exp-panel">
            <div className="background-image mokaero-img"></div>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>{this.props.languageObjectProp.data.mokate.mokaero.title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div className="text">
                <p>{this.props.languageObjectProp.data.mokate.mokaero.part1}</p>
                <p>{this.props.languageObjectProp.data.mokate.mokaero.part2}</p>
                <p>{this.props.languageObjectProp.data.mokate.mokaero.part3}</p>
                <h4>{this.props.languageObjectProp.data.mokate.mokaero.part4}</h4>
                <ul>
                  {this.props.languageObjectProp.data.mokate.mokaero.part5.map((value, i) =>
                    <li key={i}>
                      {value}
                    </li>
                  )}
                </ul>
                <h4>{this.props.languageObjectProp.data.mokate.mokaero.part6}</h4>
                <ul>
                  {this.props.languageObjectProp.data.mokate.mokaero.part7.map((value, i) =>
                    <li key={i}>
                      {value}
                    </li>
                  )}
                </ul>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel className="exp-panel">
            <div className="background-image mokasw-img"></div>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>{this.props.languageObjectProp.data.mokate.mokasw.title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div className="text">
                <p>{this.props.languageObjectProp.data.mokate.mokasw.part1}</p>
                <h4>{this.props.languageObjectProp.data.mokate.mokasw.part2}</h4>
                <ul>
                  {this.props.languageObjectProp.data.mokate.mokasw.part3.map((value, i) =>
                    <li key={i}>
                      {value}
                    </li>
                  )}
                </ul>
                <h4>{this.props.languageObjectProp.data.mokate.mokasw.part4}</h4>
                <ul>
                  {this.props.languageObjectProp.data.mokate.mokasw.part5.map((value, i) =>
                    <li key={i}>
                      {value}
                    </li>
                  )}
                </ul>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel className="exp-panel">
            <div className="background-image mokatetogo-img"></div>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>{this.props.languageObjectProp.data.mokate.mokatetogo.title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div className="text">
                <p>{this.props.languageObjectProp.data.mokate.mokatetogo.part1}</p>
                <h4>{this.props.languageObjectProp.data.mokate.mokatetogo.part2}</h4>
                <ul>
                  {this.props.languageObjectProp.data.mokate.mokatetogo.part3.map((value, i) =>
                    <li key={i}>
                      {value}
                    </li>
                  )}
                </ul>
                <h4>{this.props.languageObjectProp.data.mokate.mokatetogo.part4}</h4>
                <ul>
                  {this.props.languageObjectProp.data.mokate.mokatetogo.part5.map((value, i) =>
                    <li key={i}>
                      {value}
                    </li>
                  )}
                </ul>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel className="exp-panel">
            <div className="background-image mokacw-img"></div>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>{this.props.languageObjectProp.data.mokate.mokacw.title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div className="text">
                <p>{this.props.languageObjectProp.data.mokate.mokacw.part1}</p>
                <h4>{this.props.languageObjectProp.data.mokate.mokacw.part2}</h4>
                <ul>
                  {this.props.languageObjectProp.data.mokate.mokacw.part3.map((value, i) =>
                    <li key={i}>
                      {value}
                    </li>
                  )}
                </ul>
                <h4>{this.props.languageObjectProp.data.mokate.mokacw.part4}</h4>
                <ul>
                  {this.props.languageObjectProp.data.mokate.mokacw.part5.map((value, i) =>
                    <li key={i}>
                      {value}
                    </li>
                  )}
                </ul>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel className="exp-panel">
            <div className="background-image mokafp-img"></div>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>{this.props.languageObjectProp.data.mokate.mokafp.title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div className="text">
                <p>{this.props.languageObjectProp.data.mokate.mokafp.part1}</p>
                <h4>{this.props.languageObjectProp.data.mokate.mokafp.part2}</h4>
                <ul>
                  {this.props.languageObjectProp.data.mokate.mokafp.part3.map((value, i) =>
                    <li key={i}>
                      {value}
                    </li>
                  )}
                </ul>
                <h4>{this.props.languageObjectProp.data.mokate.mokafp.part4}</h4>
                <ul>
                  {this.props.languageObjectProp.data.mokate.mokafp.part5.map((value, i) =>
                    <li key={i}>
                      {value}
                    </li>
                  )}
                </ul>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel className="exp-panel">
            <div className="background-image mokamm-img"></div>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>{this.props.languageObjectProp.data.mokate.mokamm.title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div className="text">
                <p>{this.props.languageObjectProp.data.mokate.mokamm.part1}</p>
                <h4>{this.props.languageObjectProp.data.mokate.mokamm.part2}</h4>
                <ul>
                  {this.props.languageObjectProp.data.mokate.mokamm.part3.map((value, i) =>
                    <li key={i}>
                      {value}
                    </li>
                  )}
                </ul>
                <h4>{this.props.languageObjectProp.data.mokate.mokamm.part4}</h4>
                <ul>
                  {this.props.languageObjectProp.data.mokate.mokamm.part5.map((value, i) =>
                    <li key={i}>
                      {value}
                    </li>
                  )}
                </ul>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      </div>
    )
  }
}

Mokate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Mokate);