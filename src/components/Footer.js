import React from 'react';
import { Container, Box, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Container maxWidth="xl" style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'black', padding: '20px' }}>
      {/* First Column */}
      <Box style={{ backgroundColor: 'yellow', flex: 1 }}>
        {/* Your logo or any content for the first column */}
        <img src="path/to/logo.png" alt="Logo" style={{ width: '100%' }} />
      </Box>

      {/* Second Column */}
      <Box style={{ backgroundColor: 'yellow', flex: 1, paddingLeft: '20px' }}>
        {/* Your copyright text and links */}
        <p style={{ color: 'white' }}>© 2021 HallHub™ LLC - FlutterBricks - Flutter UI Builder</p>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ color: 'white' }}>Privacy Policy</li>
          <li style={{ color: 'white' }}>Terms of Conditions</li>
          <li style={{ color: 'white' }}>License</li>
        </ul>
      </Box>

      {/* Third Column */}
      <Box style={{ backgroundColor: 'yellow', display: 'flex', alignItems: 'center', flex: 1 }}>
        {/* Social media icons */}
        <IconButton style={{ color: 'black' }}>
          <Facebook />
        </IconButton>
        <IconButton style={{ color: 'black' }}>
          <Twitter />
        </IconButton>
        <IconButton style={{ color: 'black' }}>
          <Instagram />
        </IconButton>
      </Box>
    </Container>
  );
};

export default Footer;
