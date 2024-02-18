import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Box, Grid, InputBase, Toolbar, Typography } from '@mui/material';
import React from 'react';
import logo from '../assets/logo.png';
import MobileMenu from './MobileMenu';
const Header = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, mb: '55px' }}>
        <AppBar sx={{ bgcolor: 'white' }}>
          <Toolbar>
            <Grid container sx={{ display: 'flex', p: '10px' }}>
              <Grid item lg={2}>
                <img src={logo} width={'60px'} height={'50px'} alt="logo" style={{ marginRight:'10px' }} />
              </Grid>
              <Grid item lg={3}>
                <Box sx={{ width:{lg:'300px',sm:'250px'} ,mt: '5px', height: '40px', border: '1px solid red', bgcolor: 'lightgray', display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: '0px 3px', borderRadius: '5px' }} >
                  <InputBase placeholder='Enter Your Keys' sx={{ fontSize: '14px' }} />
                  <SearchIcon sx={{ fontSize: '24px', color: 'gray' }} />
                </Box>
              </Grid>
              <Grid item lg={5} sx={{ display: {lg:'flex',sm:'none',xs:'none'}, justifyContent: 'center', alignItems: 'center' }}>
                <Typography sx={{ mr: '20px', color: 'black' }}>Shop</Typography>
                <Typography sx={{ mr: '20px', color: 'black' }}>Men's Collections</Typography>
                <Typography sx={{ mr: '20px', color: 'black' }}>Women Collection</Typography>
                <Typography sx={{ mr: '20px', color: 'black' }}>Track Order</Typography>
              </Grid>
              <Grid item lg={2} sx={{ display: {lg:'flex',sm:'flex',xs:'none'}, marginLeft:{lg:'0px',sm:'20px'}, justifyContent: 'center', alignItems: 'center' }}>
                <Typography sx={{ color: 'black', fontSize: '12px', textAlign: 'center' }}><PersonOutlineIcon sx={{ color: 'black', fontSize: '20px' }} /> <br />Profile</Typography>
                <Typography sx={{ color: 'black', fontSize: '12px', ml: '15px', textAlign: 'center' }}><FavoriteBorderIcon sx={{ color: 'black', fontSize: '20px' }} /> <br />Wishlist</Typography>
                <Typography sx={{ color: 'black', fontSize: '12px', ml: '15px', textAlign: 'center' }}><ShoppingBagIcon sx={{ color: 'black', fontSize: '20px' }} /> <br />Cart</Typography>
              </Grid>
              <Grid sx={{ display:{lg:'none',sm:'block'},marginLeft:'30px' }}>
              <MobileMenu />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  )
}

export default Header
