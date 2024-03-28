import './Nav.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeIcon from '@mui/icons-material/Home';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import StadiumSharpIcon from '@mui/icons-material/StadiumSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import SearchIcon from '@mui/icons-material/Search';

function Nav() {
  const [value, setValue] = React.useState(2);
  return (
      <Box sx={{ width: "100%", color: "black", position: "absolute", bottom: "0%" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{color: "black", backgroundColor: "lightgray"}}
      >
        <BottomNavigationAction label="Search" icon={<SearchIcon fontSize='large' />} />
        <BottomNavigationAction label="Estimate" icon={<AirplanemodeActiveIcon fontSize='large' />} />
        <BottomNavigationAction label="Home" icon={<HomeIcon fontSize='large' />} />
        <BottomNavigationAction label="Events" icon={<StadiumSharpIcon fontSize='large' />} />
        <BottomNavigationAction label="Account" icon={<AccountCircleSharpIcon fontSize='large' />} />
      </BottomNavigation>
    </Box>
  );
}

export default Nav;