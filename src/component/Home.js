import React from 'react';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import { makeStyles, AppBar, Toolbar, IconButton, Box } from '@material-ui/core';
import videos from '../data/videos';

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
          <div className={classes.grow} />
          <IconButton className={classes.icons} color="inherit">
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box display="flex">
        <Box p={8}>
          <Typography
            variant="h5"
            color="textPrimary"
            style={{fontWeight: 600}}
          >
            Results of search
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
