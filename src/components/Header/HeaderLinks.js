/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link, withRouter } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Typography, List, ListItem, Tooltip } from '@material-ui/core'

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

function HeaderLinks({ history }) {
  const classes = useStyles();

  const isActive = (history, path) => {
    if (history.location.pathname === path) return { color: '#00FFFF' }
  }

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} style={{ textDecoration: 'none', color: 'white' }} to="/userdashboard" style={isActive(history, '/userdashboard')}>Dashboard</Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} style={{ textDecoration: 'none', color: 'white' }} to="/cart" style={isActive(history, '/cart')}>Cart</Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link className={classes.navLink} style={{ textDecoration: 'none', color: 'white' }} to="/shop" style={isActive(history, '/shop')}>Shop</Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          to="/signin"
          color="transparent"
          className={classes.navLink}
          component={Link}
          style={isActive(history, '/signin')}
        >
          Sign In
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          to="/signup"
          color="transparent"
          className={classes.navLink}
          component={Link}
          style={isActive(history, '/signup')}
        >
          Sign Up
        </Button>
      </ListItem>
    </List>
  );
}

export default withRouter(HeaderLinks)
