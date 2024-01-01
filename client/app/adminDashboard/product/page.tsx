// AllComponents.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './styles.module.css';
import Link from 'next/link';


export default function AllComponents() {
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
           
            <Link href="/adminDashboard/Create">
          <Button color="inherit">New Product</Button>
          </Link >
          <Button color="inherit">Logout</Button>


          </Toolbar>
        </AppBar>
      </Box>

     
      <div className={styles.allProd}>
        <div className={styles.Prod}>
          <div className={styles.ProdImg}>
            <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            <h1 className={styles.des}>description </h1>
            <button className={styles.update}>update</button>
            <button className={styles.delete}>delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
