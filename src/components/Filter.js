import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FeatherIcon  from 'feather-icons-react';
import './Filter.css'
import Popper from '@mui/material/Popper';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

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
            borderRadius: '10px',
            //transform: 'translateX(10%) translateY(45%)',
            backgroundColor: '#1E1E1E',
            color: '#FFF',
          }
        }}

        sx={{
            
        }}
      >
        <MenuItem sx={{fontFamily: 'Inter',}} onClick={handleClose}>
          <ListItemIcon>
            <FeatherIcon icon="dollar-sign" color="#FFF" />
          </ListItemIcon>

          <ListItemText sx={{fontFamily: 'Inter', fontWeight: 800}}>Price</ListItemText>
          
        </MenuItem>
        <MenuItem sx={{fontFamily: 'Inter',}} onClick={handleClose}>Quality</MenuItem>
        <MenuItem sx={{fontFamily: 'Inter',}} VAonClick={handleClose}>Rarity</MenuItem>
      </Menu>
    </div>
  );
}