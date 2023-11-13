import { Avatar, Box, Fab, Modal, Stack, TextField, Tooltip, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import styled from "@emotion/styled";
import { EmojiEmotions, Image, PersonAdd, VideoCameraBack } from "@mui/icons-material";


const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
   
})
const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: "10px",
    marginBottom:"20px"
})
const CloseModal = styled("div")({
    position:"absolute",
    top: "10px",
right: "10px",
borderRadius: "10px",
padding: "3px 5px",
  cursor:"pointer",
  "&:hover":{

    backgroundColor:"#eee"
  }
})

const Add = () => {
    const [open,setOpen] = useState(false);
    return (
        <>
           <Tooltip onClick={()=>setOpen(true)}
            title="Add" sx={{position:"fixed", bottom:20, left:{xs:"calc(50% - 25px)", md: 30 } }}>
<Fab color="primary" aria-label="add">
    <AddIcon />
</Fab>
</Tooltip>

<StyledModal 
  open={open}
  onClose={()=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box position={"relative"} width={400} height={280} bgcolor={"white"} p={3} borderRadius={5}>
   <Typography variant="h6" color={"#888"} textAlign={"center"} >Create Post</Typography> 
   <UserBox>
   <Avatar sx={{width:30,height:30}} src="https://www.w3schools.com/w3images/avatar2.png" />
    <Typography variant="span" fontWeight={600}>Zisan</Typography>
   </UserBox>
   <TextField sx={{width:"100%"}}
          id="standard-multiline-static"
          
          multiline
          rows={3}
          placeholder="Whats in your mind"
          variant="standard"
        />
        <Stack direction={"row"} gap={1} mt={2} mb={2} >
        <EmojiEmotions color="primary"/>
        <Image color="secondary"/>
        <VideoCameraBack color="success"/>
        <PersonAdd color="error"/>

        </Stack>



        <CloseModal onClick={()=>setOpen(false)}>
            <Typography variant="h6"> Close </Typography>
        </CloseModal>
  </Box>


</StyledModal>
        </>
    );
};

export default Add;