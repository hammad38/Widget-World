import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'black', color: 'white' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Invisible Spacer */}
        <Box sx={{ flexGrow: 1 }} />
        {/* Logo and Title, hidden if not needed */}
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            FlutterBricks
          </Typography>

        {/* Centered Menu Items */}
        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center' }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Explore</Button>
          <Button color="inherit">Features</Button>
          <Button color="inherit">Pricing</Button>
        </Box>

        {/* Right Section with Login and Get Started Buttons */}
        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <Button color="inherit">Login</Button>
          <Button 
            variant="contained" 
            sx={{ 
              ml: 2, 
              backgroundColor: 'yellow', 
              '&:hover': { 
                backgroundColor: 'darkyellow' // Make sure to replace 'darkyellow' with an actual color value
              } 
            }}
          >
            Get Started
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
