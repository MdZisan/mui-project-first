import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import MailIcon from '@mui/icons-material/Mail';
import { useState } from "react";
import {  Notifications } from "@mui/icons-material";
const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({theme})=>({
    backgroundColor:"white",
    padding: "0  10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}))
const Icons = styled(Box)(({theme})=>({
    display:"flex",
    alignItems:"center",
    gap:"20px",
    [theme.breakpoints.down("sm")]:{
        display:"none"
    }

}))
const UserBox = styled(Box)(({theme})=>({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }

}))

const NavBar = () => {
    const [open,setOpen] =useState(false);
    
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6" sx={{display:{xs:"none",sm:"block"}}}>Zisan Dev</Typography>
        <PetsIcon sx={{display:{xs:"block",sm:"none"}}}/>
        <Search> <InputBase placeholder="Search..." /> </Search>
        <Icons>
            <Badge badgeContent={4} color="error">
                <MailIcon />
                </Badge>
            <Badge badgeContent={4} color="error">
                <Notifications />
                </Badge>
                <Avatar sx={{width:30,height:30}} src="https://www.w3schools.com/w3images/avatar2.png"  onClick={()=>setOpen(!open)}/>
        </Icons>
    <UserBox>
    <Avatar sx={{width:30,height:30}} src="https://www.w3schools.com/w3images/avatar2.png" onClick={()=>setOpen(!open)} />
    <Typography variant="span">Zisan</Typography>
    </UserBox>
    <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={open}
       onClose={()=>(setOpen(false))}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>


    
      </StyledToolBar>
    </AppBar>
  );
};

export default NavBar;
