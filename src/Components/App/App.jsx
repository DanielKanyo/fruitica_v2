import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import * as routes from '../../constants/routes';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Home from '../Home/Home';
import Career from '../Career/Career';
import CompanyData from '../About/CompanyData';
import Mission from '../About/Mission';
import Competition1 from '../About/Competition1';
import Wild from '../Materials/Wild';
import Superfood from '../Materials/Superfood';
import Mprofood from '../Materials/Mprofood';
import Mokate from '../Materials/Mokate';
import Contact from '../Contact/Contact';

import { dataHun } from '../../constants/languages/hun';
import { dataSrb } from '../../constants/languages/srb';
import { dataEng } from '../../constants/languages/eng';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  button: {
    color: 'white'
  },
  appBar: {
    background: '#008823',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      languageObject: dataSrb,
      mobileOpen: false,
      mobileMoreAnchorEl: null,
    }
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  /** change language object */
  changeLanguage = (e, language) => {
    switch (language) {
      case "SRB":
        this.setState({ languageObject: dataSrb });
        break;
      case "ENG":
        this.setState({ languageObject: dataEng });
        break;
      default:
        this.setState({ languageObject: dataHun });
        break;
    }
  }

  toggleSubItem = (num) => {
    const { mobileOpen } = this.state;
    let drawer;

    if (mobileOpen) {
      drawer = document.getElementsByClassName("mobile-drawer")[0];
    } else {
      drawer = document.getElementsByClassName("desktop-drawer")[0];
    }

    let subList = drawer.querySelectorAll(`[subitem="${num}"]`)[0];
    let moreIcon = drawer.querySelectorAll(`[moreicon="${num}"]`)[0];

    if (subList) {
      if (subList.classList.contains('hidden')) {
        subList.classList.remove('hidden');
      } else {
        subList.classList.add('hidden');
      }
    }

    if (moreIcon) {
      if (moreIcon.classList.contains('rotate')) {
        moreIcon.classList.remove('rotate');
      } else {
        moreIcon.classList.add('rotate');
      }
    }
  }

  render() {
    const { classes, theme } = this.props;
    const { languageObject, mobileMoreAnchorEl } = this.state;
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const drawer = (
      <div>
        <div className={classes.toolbar + ' drawer-header'}>
          {languageObject.data.drawerTitle}
        </div>
        <Divider />
        <List className="menu-list">
          <ListItem button onClick={() => { this.toggleSubItem(0) }}>
            <ListItemText className="menu-item-text" primary={languageObject.data.menuItems[0].title} />
            <ExpandMoreIcon className="more-icon" moreicon={0} />
          </ListItem>

          <div subitem={0} className="sub-list hidden">
            <ListItem button className="sub-item" component={Link} to={routes.COMPANYDATA}>
              <ListItemText className="menu-item-text" primary={languageObject.data.menuItems[0].items[0]} />
            </ListItem>
            <ListItem button className="sub-item" component={Link} to={routes.MISSION}>
              <ListItemText className="menu-item-text" primary={languageObject.data.menuItems[0].items[1]} />
            </ListItem>
            <ListItem button className="sub-item">
              <ListItemText className="menu-item-text" primary={languageObject.data.menuItems[0].items[2]} />
            </ListItem>
            <ListItem button className="sub-item">
              <ListItemText className="menu-item-text" primary={languageObject.data.menuItems[0].items[3]} />
            </ListItem>
            <ListItem button className="sub-item" onClick={() => { this.toggleSubItem(1) }}>
              <ListItemText className="menu-item-text" primary={languageObject.data.menuItems[0].items[4]} />
              <ExpandMoreIcon className="more-icon" moreicon={1} />
            </ListItem>
            <div subitem={1} className="sub-sub-list hidden">
              <ListItem button className="sub-sub-item" component={Link} to={routes.COMETITION1}>
                <ListItemText className="menu-item-text" primary={languageObject.data.menuItems[0].subItems[0]} />
              </ListItem>
            </div>
          </div>

          <ListItem button onClick={() => { this.toggleSubItem(2) }}>
            <ListItemText className="menu-item-text" primary={languageObject.data.menuItems[1].title} />
            <ExpandMoreIcon className="more-icon" moreicon={2} />
          </ListItem>

          <div subitem={2} className="sub-list hidden">
            <ListItem button className="sub-item">
              <ListItemText className="menu-item-text" primary={languageObject.data.menuItems[1].items[0]} />
            </ListItem>
            <ListItem button className="sub-item">
              <ListItemText className="menu-item-text" primary={languageObject.data.menuItems[1].items[1]} />
            </ListItem>
            <ListItem button className="sub-item" onClick={() => { this.toggleSubItem(3) }}>
              <ListItemText className="menu-item-text" primary={languageObject.data.menuItems[1].items[2]} />
              <ExpandMoreIcon className="more-icon" moreicon={3} />
            </ListItem>
            <div subitem={3} className="sub-sub-list hidden">
              <ListItem button className="sub-sub-item" component={Link} to={routes.WILD}>
                <ListItemText className="menu-item-text" primary={languageObject.data.menuItems[1].subItems[0]} />
              </ListItem>
              <ListItem button className="sub-sub-item" component={Link} to={routes.MOKATE}>
                <ListItemText className="menu-item-text" primary={languageObject.data.menuItems[1].subItems[1]} />
              </ListItem>
              <ListItem button className="sub-sub-item" component={Link} to={routes.SUPPERFOOD}>
                <ListItemText className="menu-item-text" primary={languageObject.data.menuItems[1].subItems[2]} />
              </ListItem>
              <ListItem button className="sub-sub-item" component={Link} to={routes.MPROFOOD}>
                <ListItemText className="menu-item-text" primary={languageObject.data.menuItems[1].subItems[3]} />
              </ListItem>
            </div>
          </div>

          <ListItem button component={Link} to={routes.CAREER}>
            <ListItemText className="menu-item-text" primary={languageObject.data.menuItems[2].title} />
          </ListItem>

          <ListItem button component={Link} to={routes.CONTACT}>
            <ListItemText className="menu-item-text" primary={languageObject.data.menuItems[3].title} />
          </ListItem>

        </List>
      </div>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={(e) => { this.handleMobileMenuClose(); this.changeLanguage(e, 'ENG') }}>ENG</MenuItem>
        <MenuItem onClick={(e) => { this.handleMobileMenuClose(); this.changeLanguage(e, 'HUN') }}>HUN</MenuItem>
        <MenuItem onClick={(e) => { this.handleMobileMenuClose(); this.changeLanguage(e, 'SRB') }}>SRB</MenuItem>
      </Menu>
    );

    return (
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed" className={classes.appBar + ' app-bar'}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                className="page-title-placeholder"
                variant="h6"
                color="inherit"
                noWrap
                component={Link} to={routes.HOME}
              ></Typography>
              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <Button className={classes.button} onClick={(e) => { this.changeLanguage(e, 'ENG') }}>ENG</Button>
                <Button className={classes.button} onClick={(e) => { this.changeLanguage(e, 'HUN') }}>HUN</Button>
                <Button className={classes.button} onClick={(e) => { this.changeLanguage(e, 'SRB') }}>SRB</Button>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          <nav className={classes.drawer}>
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer
                container={this.props.container}
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={this.state.mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                className="mobile-drawer"
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                classes={{
                  paper: classes.drawerPaper,
                }}
                className="desktop-drawer"
                variant="permanent"
                open
              >
                {drawer}
              </Drawer>
            </Hidden>
          </nav>
          <main className={classes.content + ' app-content'}>
            <div className={classes.toolbar} />

            <div className="App">
              <div className="Content">
                <Route
                  exact
                  path={routes.HOME}
                  component={() => <Home languageObjectProp={this.state.languageObject} />}
                />

                <Route
                  exact
                  path={routes.CAREER}
                  component={() => <Career languageObjectProp={this.state.languageObject} />}
                />

                <Route
                  exact
                  path={routes.COMPANYDATA}
                  component={() => <CompanyData languageObjectProp={this.state.languageObject} />}
                />

                <Route
                  exact
                  path={routes.MISSION}
                  component={() => <Mission languageObjectProp={this.state.languageObject} />}
                />

                <Route
                  exact
                  path={routes.COMETITION1}
                  component={() => <Competition1 languageObjectProp={this.state.languageObject} />}
                />

                <Route
                  exact
                  path={routes.WILD}
                  component={() => <Wild languageObjectProp={this.state.languageObject} />}
                />

                <Route
                  exact
                  path={routes.SUPPERFOOD}
                  component={() => <Superfood languageObjectProp={this.state.languageObject} />}
                />

                <Route
                  exact
                  path={routes.MPROFOOD}
                  component={() => <Mprofood languageObjectProp={this.state.languageObject} />}
                />

                <Route
                  exact
                  path={routes.MOKATE}
                  component={() => <Mokate languageObjectProp={this.state.languageObject} />}
                />

                <Route
                  exact
                  path={routes.CONTACT}
                  component={() => <Contact languageObjectProp={this.state.languageObject} />}
                />
              </div>
            </div>

          </main>
          {renderMobileMenu}
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);