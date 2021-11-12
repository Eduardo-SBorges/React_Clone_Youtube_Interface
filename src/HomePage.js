import React from 'react';
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListSubheader,
  Divider,
  Button,
  Box,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {
  AccountCircle,
  VideoCall,
  Apps,
  MoreVert,
  Home,
  Whatshot,
  Subscriptions,
  History,
  VideoLibrary,
  AddCircle,
} from '@material-ui/icons/';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: '#f5f5f5',
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    height: 25,
  },
  icons: {
    marginRight: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none',
  },
  ListItemText: {
    fontSize: 14,
  },
  ListItem: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  subheader: {
    textTransform: 'uppercase',
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* STARTING OF APP BAR */}

      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton className={classes.icons} color="inherit">
            <MenuIcon />
          </IconButton>
          <img
            src="/images/preto.png"
            alt="logo-preto"
            className={classes.logo}
          />
          <div className={classes.grow} />
          <IconButton className={classes.icons} color="inherit">
            <VideoCall />
          </IconButton>
          <IconButton className={classes.icons} color="inherit">
            <Apps />
          </IconButton>
          <IconButton className={classes.icons} color="inherit">
            <MoreVert />
          </IconButton>
          <Button
            startIcon={<AccountCircle />}
            variant="outlined"
            color="secondary"
          >
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>
      {/* ENDING OF APP BAR */}

      {/* STARTING OF DRAWER BAR */}
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
            <ListItem button classes={{ root: classes.ListItem }}>
              <ListItemIcon>{<Home />}</ListItemIcon>
              <ListItemText
                classes={{ primary: classes.ListItemText }}
                primary={'Inicio'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.ListItem }}>
              <ListItemIcon>{<Whatshot />}</ListItemIcon>
              <ListItemText
                classes={{ primary: classes.ListItemText }}
                primary={'Em alta'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.ListItem }}>
              <ListItemIcon>{<Subscriptions />}</ListItemIcon>
              <ListItemText
                classes={{ primary: classes.ListItemText }}
                primary={'Inscrição'}
              />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button classes={{ root: classes.ListItem }}>
              <ListItemIcon>{<VideoLibrary />}</ListItemIcon>
              <ListItemText
                classes={{ primary: classes.ListItemText }}
                primary={'Biblioteca'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.ListItem }}>
              <ListItemIcon>{<History />}</ListItemIcon>
              <ListItemText
                classes={{ primary: classes.ListItemText }}
                primary={'Histórico'}
              />
            </ListItem>
          </List>
          <Divider />
          <Box p={5}>
            <Typography variant="body2">
              Faça login para curtir vídeos, comentar e se inscrever.
            </Typography>
            <Box mt={2}>
              <Button variant="outlined" color="secondary">
                Fazer Login
              </Button>
            </Box>
          </Box>
          <Divider />
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader
                component="div"
                id="nested-list-subheader"
                className={classes.subheader}
              >
                O Melhor do youtube
              </ListSubheader>
            }
          >
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Música'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Esportes'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Jogos'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Filmes'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Notícias'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Ao vivo'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Destaques'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>
                <AddCircle />
              </ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={'Videos 360'}
              />
            </ListItem>
          </List>
          <Divider />
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemIcon>
              <AddCircle />
            </ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.listItemText,
              }}
              primary={'Procurar mais'}
            />
          </ListItem>
          <Divider />
        </div>
      </Drawer>
    </div>
  );
};

export default HomePage;
