import React from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FeatherIcon  from 'feather-icons-react';
import ListItemIcon from '@mui/material/ListItemIcon';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Divider } from '@mui/material';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import './ProfileMenu.css'
const theme = createTheme({
    components: {
      // Name of the component
      MuiList: {
        styleOverrides: {
          root: {
            // marginRight: '18px',
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            ':hover': {
              backgroundColor: 'rgba(0,0,0,0)',
            },
          },
        },
      },
      
      MuiButtonBase: {
        styleOverrides: {
          root: {
            ':hover': {
              backgroundColor: 'rgba(0,0,0,0)',
            },
            paddingRight: '180px',
          },
        },
      },
      MuiAvatar: {
        styleOverrides: {
          root: {
            ':hover': {
              
              backgroundColor: 'rgba(0,0,0,0)',
            },
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            fontFamily: 'Inter',
            // paddingRight: '32px',
            fontWeight: '400',
            transition: 'all 0.2s ease-in-out',
            ':hover': {
              background: 'rgba(150, 150, 150, 0.5)',
            },
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
            root: {
                marginTop: '4px',
                marginBottom: '4px',
            },
        },
    },
  
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            alignItems: "flex-end",
            
          },
        },
      },
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true, // No more ripple, on the whole application 💣!
        },
      },
    },
  });
  
export default function ProfileMenu({user}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <>
        <ThemeProvider theme={theme}>
            <IconButton
                onClick={handleClick}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
            >
                 <Avatar sx={{width: "80px", height: "80px", borderRadius: "250px", transition: '0.2s'}} varient="circular" className="user-pfp" alt={user.name} src={user.pfp} />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    style: {
                      // left: '50%',
                      transition: 'none',
                      borderRadius: '15px',
                      //transform: 'translateX(5%) translateY(5%)',
                      background: 'rgba(255, 255, 255, 0.2)',
                      borderRadius: '12px',
                      boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                      backdropFilter: 'blur(10px)',
                      webkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(30, 30, 30, 0.0)',
                      color: '#1E1E1E',
                    },
                    
                  }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem sx={{':hover':{backgroundColor: "rgba(0,0,0,0)"}, marginBottom:'-4px', }} onClick={handleClose}>
                Hey! <span className='profileMenu-username'> @{user.username}</span>
                </MenuItem>
                
                <Divider />
                <MenuItem sx={{marginTop:'-4px', marginBottom:'-4px',}}onClick={handleClose}>
                  <ListItemIcon>
                    <FeatherIcon icon="plus" stroke-width="2" size="20px" color="#1E1E1E" />
                  </ListItemIcon>
                Post Item
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose} sx={{marginTop:'-4px',}}>
                  <ListItemIcon>
                    <FeatherIcon icon="user" stroke-width="2" size="20px" color="#1E1E1E" />
                  </ListItemIcon>
                View Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <FeatherIcon icon="settings" stroke-width="2" size="20px" color="#1E1E1E" />
                  </ListItemIcon>
                Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <FeatherIcon icon="log-out" stroke-width="2" size="20px" color="#1E1E1E" />
                  </ListItemIcon>
                Log Out
                </MenuItem>
            </Menu>
        </ThemeProvider>
    </>
  )
}
