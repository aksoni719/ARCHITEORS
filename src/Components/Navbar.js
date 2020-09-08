import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Button } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  AppBarAlign:{
    // overflow:'hidden',
    // position:'fixed',
    // top: '0',
    color:'black',
    background: 'none',
    // opacity:'.1',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)'
  },
  MainMenuAlign:{
    backgroundColor: '#131313',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
    marginTop:'.2%',
    marginBottom:'.2%',
    // overflow: 'hidden',
    // position:'sticky',
    // sticky: {
    //   position: 'fixed',
    //   top: '0',
    //   width: '100%'
    // }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
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
  ButtonAlign:{
    backgroundColor:'white',
    opacity:"0.9",
    margin: theme.spacing(1),
    color: "black",
  },
  // searchBar
  
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {  
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      height: '3ch',
      '&:focus': {
        width: '40ch',
        height: '3ch'
      },
    },
  },



}));

const Navbar = () =>{
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      
      <MenuItem>
        <Tab label="HOME" />
      </MenuItem>
      <MenuItem>
      <Tab label="ABOUT" />
      </MenuItem>
      <MenuItem>
      <Tab label="SERVICES" />
      </MenuItem>
      <MenuItem>
      <Tab label="BLOG" />
      </MenuItem>
      <MenuItem>
      <Tab label="CONTACT US" />
      </MenuItem>
    </Menu>
  );

  return (
    <div>
    <div className={classes.grow}>
      <AppBar position="static" className={classes.AppBarAlign} >
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Architor
          </Typography>

        {/* searchBar */}

          <Toolbar>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
           
            <Button className={classes.ButtonAlign}>Sign Up/Log In</Button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
    
    <div >
      <AppBar position="static" className={classes.MainMenuAlign}>
        <Tabs
          variant="scrollable"
          scrollButtons="on"
        >


          <Tab label="Home" />
          <Tab label="General Leads" />
          <Tab label="Packages" />
          <Tab label="Refunds and Replacement" />
          <Tab label="Privacy Policy" />
          <Tab label="Terms & Conditions" />
          <Tab label="About Us" />
          <Tab label="Contact Us" />
        </Tabs>
      </AppBar>
      
      
    </div>
    </div>
  );
}
export default Navbar;