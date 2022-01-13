import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NewsTabs from './NewsTabs';
import { Divider } from '@mui/material';
import logo1 from '../../assets/logo2.jpg'

export default function ButtonAppBar() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static" style={{
          backgroundColor: '#fff',
          color: '#000'
        }}>
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
              <img src={logo1} width='100' height='' alt='logo' />
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>
      </Box>
      <Divider />
      <NewsTabs />
    </div>
  );
}
