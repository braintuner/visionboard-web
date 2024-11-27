import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HelpIcon from '@mui/icons-material/Help'; // Added Help Icon
import Logo from './LogoV.png'; // Update to your logo's actual path
import userImage from "./Lego.jpg"
// You can use a URL for the user's image or a local image path

const Header = () => {
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: 'white',
        boxShadow: 'none',
        borderBottom: '1px solid #E0E0E0',
      }}
    >
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
        {/* Logo on the left */}
        <img
          src={Logo}
          alt="Logo"
          style={{
            height: '40px',
            cursor: 'pointer',
          }}
        />

        {/* Menu Items aligned to the left */}
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          {['File', 'Edit', 'Select', 'View', 'Insert', 'Arrange', 'Share', 'Help'].map((item) => (
            <Typography
              key={item}
              style={{
                cursor: 'pointer',
                fontWeight: 500,
                color: '#282C33',
                fontSize: '14px',
              }}
            >
              {item}
            </Typography>
          ))}
        </div>

        {/* Menu & Action Buttons aligned to the right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          {/* Menu Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <IconButton>
              <MenuIcon style={{ color: '#282C33' }} />
            </IconButton>
            <Typography
              style={{
                color: '#282C33',
                fontWeight: '500',
                cursor: 'pointer',
              }}
            >
              Main Menu
            </Typography>
          </div>

          {/* Draft Button */}
          <Button
            variant="contained"
            style={{
              backgroundColor: '#3B82F6',
              color: 'white',
              textTransform: 'none',
              fontWeight: '500',
              borderRadius: '20px',
              padding: '6px 16px',
            }}
          >
            Draft
          </Button>

          {/* User Avatar (Image) */}
          <Avatar
            src={userImage} // Use the image URL here
            alt="User"
            style={{
              width: '35px',
              height: '35px',
              border: '2px solid #282C33', // Border around the avatar
            }}
          />

          {/* Help Button */}
          <IconButton>
            <HelpIcon style={{ color: '#282C33' }} />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
