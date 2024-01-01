import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { url } from 'inspector';

export default function NewProd() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>
      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' ,backgroundColor:"GrayText",backgroundImage: 'url("https://burst.shopifycdn.com/photos/wrist-watches.jpg?width=1000&format=pjpg&exif=0&iptc=0")', backgroundSize: 'cover', boxShadow: '0 0 20px rgba(0, 0, 0, 0.5)'}}>
  <div style={{ padding: '20px', width: '650px' }}>
    <form style={{ display: 'flex', flexDirection: 'column', gap: '15px', height: '400px'   }}>
      <input type="text" placeholder="Name" style={{ padding: '12px', fontSize: '18px' }} />
      <input type="email" placeholder="Email" style={{ padding: '12px', fontSize: '18px' }} />
      <input type="file" placeholder="Image" accept="image/*" style={{ padding: '12px', fontSize: '18px' }} />
      <input type="tel" placeholder="Phone number" style={{ padding: '12px', fontSize: '18px' }} />
      <Button variant="contained" color="primary" style={{ padding: '12px', fontSize: '18px' }}>Submit</Button>
    </form>
  </div>
</div>

    </div>
  );
}
