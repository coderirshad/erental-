import * as React from 'react';
import { useState, useEffect} from 'react'

import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import { Link, Navigate } from 'react-router-dom';
import { LogOut } from './LogOut';
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function CustomizedMenus({role,login,setlogin}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
     useEffect(() => {
        setUser ( JSON.parse(localStorage.getItem('profile')) ) ;
  }, [localStorage.getItem('profile')] );
  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
       {login?<p>{user?.data?.user_id.charAt(0)}{user?.data?.user_id.charAt(1)}{user?.data?.user_id.charAt(2)}</p>:"Login"}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      > 
      {
        login ? 
        <div>
        <Link to={'/myaccount/ProfileInformation'}>
        <MenuItem onClick={handleClose} disableRipple>
          <AccountCircleIcon></AccountCircleIcon>
          My Account
        </MenuItem>
        </Link>
        <Divider sx={{ my: 0.5 }} />
        </div>
        :
        <></>
      }


      {
        login ? 
        <div>
        <Link to={'/whishlist'}>
        <MenuItem onClick={handleClose} disableRipple>
          <FavoriteBorderIcon></FavoriteBorderIcon>
          Wishlist
        </MenuItem>
        </Link>
        <Divider sx={{ my: 0.5 }} />
        </div>
        :
        <></>
      }


      {
        login ? 
        <div>
        <Link to={'/cart'}>
        <MenuItem onClick={handleClose} disableRipple>
          <AddShoppingCartIcon></AddShoppingCartIcon>
          Cart
        </MenuItem>
        </Link>
        </div>
        :
        <></>
      }


      {
        login ? 
        <div>
        <Link to={'/checkout'}>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClose} disableRipple>
          <ReplyAllIcon></ReplyAllIcon>
          Checkout
        </MenuItem>
        </Link>
        <Divider sx={{ my: 0.5 }} />
        </div>
        :
        <></>
      }
        
        <a href='/login'>
        <Link to={'/login'}>
        <MenuItem onClick={()=>{
          if(login){
            LogOut()
            setlogin(false);
            if(role=="admin")window.location.reload();
          }
          handleClose()
        }} disableRipple>
          <LockOpenIcon></LockOpenIcon>
          {login?"Logout":"Login"}
        </MenuItem>
        </Link>
        </a>
        <Divider sx={{ my: 0.5 }} />
        {
          login?"":<Link to={'/register'}>
                      <MenuItem onClick={handleClose} disableRipple>
                        <LockOpenIcon></LockOpenIcon>
                        Register
                      </MenuItem>
                    </Link>
        }
        
        
      </StyledMenu>
    </div>
  );
}
