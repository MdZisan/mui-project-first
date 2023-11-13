import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import Box from '@mui/material/Box';



import HomeIcon from '@mui/icons-material/Home';
import PageIcon from '@mui/icons-material/Article';
import GroupIcon from '@mui/icons-material/Group';
import MarketIcon from '@mui/icons-material/Storefront';
import FriendIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ProfileIcon from '@mui/icons-material/AccountBox';
import ModeNightIcon from '@mui/icons-material/ModeNight';
// eslint-disable-next-line react/prop-types
const SideBar = ({setMode,mode}) => {
  
  return (
    <Box  flex={1} p={2} sx={{display:{xs:"none", sm:"block"}}}>
      
      <Box sx={{position:"fixed"}}>
      <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
               <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#page'>
              <ListItemIcon>
               <PageIcon/>
              </ListItemIcon>
              <ListItemText primary="Page" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#Groups'>
              <ListItemIcon>
               <GroupIcon/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#MarketPlace'>
              <ListItemIcon>
               <MarketIcon/>
              </ListItemIcon>
              <ListItemText primary="MarketPlace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#Friends'>
              <ListItemIcon>
               <FriendIcon/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#Setting'>
              <ListItemIcon>
               <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#Profile'>
              <ListItemIcon>
               <ProfileIcon/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding >
            <ListItemButton component="a" href='#switch'>
              <ListItemIcon>
               <ModeNightIcon/>
              </ListItemIcon>
              <Switch onChange={()=>setMode(!mode)}/>
            </ListItemButton>
          </ListItem>


          </List>
      </Box>

    </Box>
  );
};

export default SideBar;
