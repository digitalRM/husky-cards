import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FeatherIcon  from 'feather-icons-react';
import './Filter.css'
import Popper from '@mui/material/Popper';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Divider } from '@mui/material';
import Fade from '@mui/material/Fade';
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

    MuiButtonBase: {
      styleOverrides: {
        root: {
          paddingRight: '180px',
        },
      },
    },

    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter',
          paddingRight: '32px',
          fontWeight: '400',
          transition: 'all 0.2s ease-in-out',
          ':hover': {
            backgroundColor: '#2E2E2E',
          },
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

export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <ThemeProvider theme={theme}>
      <Button
        className="Button"
        disableRipple={true}
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}

        sx={{
            marginLeft: '-12px',
            marginTop: '-10px',
            ':hover': {
              bgcolor: 'transparent', 
            },
          }}
      >
      <FeatherIcon icon="sliders" className="filter-icon" size="36" stroke-width="2.8" color="#1E1E1E" />
      </Button>

      <Menu
        theme={theme}
        TransitionComponent={Fade}
        className="filter-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          style: {
            // left: '50%',
            transition: 'none',
            borderRadius: '15px',
            //transform: 'translateX(5%) translateY(5%)',
            backgroundColor: '#1E1E1E',
            color: '#FFF',
          }
        }}
      >
        <MenuItem sx={{fontFamily: 'Inter',}} onClick={handleClose}>
          <ListItemIcon>
            <FeatherIcon icon="dollar-sign" stroke-width="2" size="20px" color="#FFF" />
          </ListItemIcon>
          By Price
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FeatherIcon icon="check-circle" stroke-width="2" size="20px" color="#FFF" />
          </ListItemIcon>
          
          By Quality
          </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <FeatherIcon icon="award" stroke-width="2" size="20px" color="#FFF" />
          </ListItemIcon>
          
          By Rarity
          </MenuItem>
      </Menu>
      </ThemeProvider>
    </div>
  );
}