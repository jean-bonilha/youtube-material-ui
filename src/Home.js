import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ExploreIcon from '@material-ui/icons/Explore';
import HistoryIcon from '@material-ui/icons/History';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListSubheader from '@material-ui/core/ListSubheader';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles, AppBar, Toolbar, IconButton, Button, Box } from '@material-ui/core';
import videos from './data/videos';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(),
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    borderRight: 'none',
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(),
  },
  icons: {
    paddingRight: theme.spacing(5),
  },
  logo: {
    height: '30px',
  },
  grow: {
    flexGrow: 1
  },
  listItemText: {
    fontSize: 14,
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  subHeader: {
    textTransform: 'uppercase',
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuIcon} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <img src="./images/preto.png" alt="Logo" className={classes.logo} />
          <div className={classes.grow} />
          <IconButton className={classes.icons} color="inherit">
            <VideoCallIcon />
          </IconButton>
          <IconButton className={classes.icons} color="inherit">
            <AppsIcon />
          </IconButton>
          <IconButton className={classes.icons} color="inherit">
            <MoreVertIcon />
          </IconButton>
          <Button startIcon={<AccountCircleIcon />} variant="outlined" color="secondary">
            fazer login
          </Button>
        </Toolbar>
      </AppBar>
      <Box display="flex">
        <Hidden mdDown>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />
            <div className={classes.drawerContainer}>
              <List>
                <ListItem classes={{root: classes.listItem}}>
                  <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                  <ListItemText classes={{
                    primary: classes.listItemText,
                  }} primary={'Home'} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>{<ExploreIcon />}</ListItemIcon>
                  <ListItemText classes={{
                    primary: classes.listItemText,
                  }} primary={'Explore'} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>{<SubscriptionsIcon />}</ListItemIcon>
                  <ListItemText classes={{
                    primary: classes.listItemText,
                  }} primary={'Subscriptions'} />
                </ListItem>
              </List>
              <Divider />
              <List>
                <ListItem classes={{root: classes.listItem}}>
                  <ListItemIcon>{<VideoLibraryIcon />}</ListItemIcon>
                  <ListItemText classes={{
                    primary: classes.listItemText,
                  }} primary={'Library'} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>{<HistoryIcon />}</ListItemIcon>
                  <ListItemText classes={{
                    primary: classes.listItemText,
                  }} primary={'History'} />
                </ListItem>
              </List>
              <Divider />
              <Box p={3}>
                <Typography variant="body2">
                  Sign in to like videos, comment, and subscribe.
                </Typography>
                <Box mt={2}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    startIcon={<AccountCircleIcon />}
                  >
                    sign in
                  </Button>
                </Box>
              </Box>
              <Divider />
              <List
                component="nav"
                arial-labelledby="nested-list-subheader"
                subheader={
                  <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                    className={classes.subHeader}
                  >
                    best of youtube
                  </ListSubheader>
                }
              >
                <ListItem classes={{root: classes.listItem}}>
                  <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                  <ListItemText classes={{
                    primary: classes.listItemText,
                  }} primary={'Misic'} />
                </ListItem>
                <ListItem classes={{root: classes.listItem}}>
                  <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                  <ListItemText classes={{
                    primary: classes.listItemText,
                  }} primary={'Sports'} />
                </ListItem>
                <ListItem classes={{root: classes.listItem}}>
                  <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                  <ListItemText classes={{
                    primary: classes.listItemText,
                  }} primary={'Gaming'} />
                </ListItem>
                <ListItem classes={{root: classes.listItem}}>
                  <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                  <ListItemText classes={{
                    primary: classes.listItemText,
                  }} primary={'Movies'} />
                </ListItem>
                <ListItem classes={{root: classes.listItem}}>
                  <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                  <ListItemText classes={{
                    primary: classes.listItemText,
                  }} primary={'News'} />
                </ListItem>
                <ListItem classes={{root: classes.listItem}}>
                  <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                  <ListItemText classes={{
                    primary: classes.listItemText,
                  }} primary={'Live'} />
                </ListItem>
                <ListItem classes={{root: classes.listItem}}>
                  <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                  <ListItemText classes={{
                    primary: classes.listItemText,
                  }} primary={'Learning'} />
                </ListItem>
                <ListItem classes={{root: classes.listItem}}>
                  <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                  <ListItemText classes={{
                    primary: classes.listItemText,
                  }} primary={'Spotlight'} />
                </ListItem>
                <ListItem classes={{root: classes.listItem}}>
                  <ListItemIcon>{<AddCircleIcon />}</ListItemIcon>
                  <ListItemText classes={{
                    primary: classes.listItemText,
                  }} primary={'360 Video'} />
                </ListItem>
              </List>
            </div>
          </Drawer>
        </Hidden>
        <Box p={8}>
          <Toolbar />
          <Typography
            variant="h5"
            color="textPrimary"
            style={{fontWeight: 600}}
          >
            Recommended
          </Typography>
          <Grid container spacing={2}>
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
                <Box>
                  <img
                    style={{width: '100%'}}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Typography
                    style={{fontWeight: 600}}
                    gutterBottom
                    variant="body1"
                    color="textPrimary"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    display="block"
                    variant="body2"
                    color="textSecondary"
                  >
                    {item.channel}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                  >
                    {`${item.channel} * ${item.date}`}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );

}

export default Home;
