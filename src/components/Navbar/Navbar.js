import React, { useState } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon,
  Box,
  Container,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
  InputBase,
  Badge,
  Avatar
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SchoolIcon from '@mui/icons-material/School';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import BookIcon from '@mui/icons-material/Book';
import QuizIcon from '@mui/icons-material/Quiz';
import PersonIcon from '@mui/icons-material/Person';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesAnchorEl, setResourcesAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleResourcesClick = (event) => {
    setResourcesAnchorEl(event.currentTarget);
  };

  const handleResourcesClose = () => {
    setResourcesAnchorEl(null);
  };

  const menuItems = [
    { text: 'Ask a Doubt', icon: <QuestionAnswerIcon />, path: '/ask-doubt' },
    { text: 'Resources', icon: <BookIcon />, path: '/resources', hasDropdown: true },
    { text: 'Quizzes', icon: <QuizIcon />, path: '/quizzes' },
  ];

  const resourceItems = [
    { text: 'Study Materials', path: '/resources/study-materials' },
    { text: 'Video Lectures', path: '/resources/video-lectures' },
    { text: 'Practice Tests', path: '/resources/practice-tests' },
    { text: 'Download Notes', path: '/resources/download-notes' },
  ];

  const drawer = (
    <Box className="drawer-container">
      <Box className="drawer-header">
        <SchoolIcon className="drawer-logo" />
        <Typography variant="h6" className="drawer-title">
          AI Teacher
        </Typography>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem 
            button 
            component={Link} 
            to={item.path} 
            key={item.text}
            onClick={handleDrawerToggle}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <ListItem 
          button 
          component={Link} 
          to="/signin" 
          onClick={handleDrawerToggle}
          className="drawer-signin"
        >
          <ListItemIcon><PersonIcon /></ListItemIcon>
          <ListItemText primary="Sign In" />
        </ListItem>
        <ListItem 
          button 
          component={Link} 
          to="/signup" 
          onClick={handleDrawerToggle}
          className="drawer-signup"
        >
          <ListItemIcon><RocketLaunchIcon /></ListItemIcon>
          <ListItemText primary="Get Started" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" className="navbar">
        <Container maxWidth="lg">
          <Toolbar disableGutters className="toolbar">
            {/* Logo and App Name */}
            <Box className="logo-container">
              <SchoolIcon className="logo-icon" />
              <Typography variant="h6" className="logo-text">
                AI Teacher
              </Typography>
            </Box>

            {/* Search Bar - Desktop Only */}
            {!isMobile && (
              <Box className="search-container">
                <SearchIcon className="search-icon" />
                <InputBase
                  placeholder="Search for topics, subjects..."
                  className="search-input"
                />
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className="menu-button"
              >
                <MenuIcon />
              </IconButton>
            )}

            {/* Desktop Menu */}
            {!isMobile && (
              <Box className="desktop-menu">
                {menuItems.map((item) => (
                  item.hasDropdown ? (
                    <Button
                      key={item.text}
                      className="menu-item"
                      startIcon={item.icon}
                      endIcon={<KeyboardArrowDownIcon />}
                      onClick={handleResourcesClick}
                    >
                      {item.text}
                    </Button>
                  ) : (
                    <Button
                      key={item.text}
                      component={Link}
                      to={item.path}
                      className="menu-item"
                      startIcon={item.icon}
                    >
                      {item.text}
                    </Button>
                  )
                ))}
                
                <IconButton className="notification-icon">
                  <Badge badgeContent={3} color="error">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                
                <Box className="user-actions">
                  <Button
                    component={Link}
                    to="/signin"
                    className="signin-button"
                    startIcon={<PersonIcon />}
                  >
                    Sign In
                  </Button>
                  <Button
                    component={Link}
                    to="/signup"
                    variant="contained"
                    color="secondary"
                    className="get-started-button"
                    startIcon={<RocketLaunchIcon />}
                  >
                    Get Started
                  </Button>
                </Box>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Resources Dropdown Menu */}
      <Menu
        anchorEl={resourcesAnchorEl}
        open={Boolean(resourcesAnchorEl)}
        onClose={handleResourcesClose}
        className="resources-menu"
      >
        {resourceItems.map((item) => (
          <MenuItem 
            key={item.text} 
            component={Link} 
            to={item.path} 
            onClick={handleResourcesClose}
            className="resource-menu-item"
          >
            {item.text}
          </MenuItem>
        ))}
      </Menu>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        className="mobile-drawer"
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar; 