import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box
  
      flex={3} p={2} 
      sx={{display:{xs:"none", sm:"block"}} } > 
      
      
      
     <Box className="scrollable-content" sx={{position: "fixed" , }} width={400} height="90vh" overflow={"auto"}  > 
      <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
        Online Friend
        </Typography>   
        <AvatarGroup max={4} sx={{display:"flex", justifyContent:"start"}}>
  <Avatar alt="Remy Sharp" src="https://www.w3schools.com/howto/img_avatar2.png" />
  <Avatar alt="Travis Howard" src="https://www.w3schools.com/howto/img_avatar2.png" />
  <Avatar alt="Cindy Baker" src="https://www.w3schools.com/howto/img_avatar2.png" />
  <Avatar alt="Agnes Walker" src="https://www.w3schools.com/howto/img_avatar2.png" />
  <Avatar alt="Trevor Henderson" src="https://www.w3schools.com/howto/img_avatar2.png" />
</AvatarGroup>
    
<Typography variant='h6' fontWeight={100} mt={2} mb={2}>
       Latest Image 
        </Typography>  
<ImageList  cols={3} rowHeight={100} gap={10}>
 <ImageListItem>
<img src="https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
 </ImageListItem>
 <ImageListItem>
<img src="https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
 </ImageListItem>
 <ImageListItem>
<img src="https://images.pexels.com/photos/1040685/pexels-photo-1040685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
 </ImageListItem>
 <ImageListItem>
<img src="https://images.pexels.com/photos/273813/pexels-photo-273813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
 </ImageListItem>
 <ImageListItem>
<img src="https://images.pexels.com/photos/1556696/pexels-photo-1556696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
 </ImageListItem>
</ImageList>

<Typography variant='h6' fontWeight={100} mt={2} mb={2}>
       Latest Converstion
        </Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>

     </Box>
      
      
       </Box>
  )
}

export default Rightbar