
import Rightbar from "./Components/Rightbar"
import Feed from "./Components/Feed"
import SideBar from "./Components/SideBar"
import { Box, Stack, ThemeProvider, createTheme } from "@mui/material"
import NavBar from "./Components/NavBar"
import Add from "./Components/Add"
import { useState } from "react"

function App() {
const [mode,setMode]= useState(false);

const darkTheme =  createTheme({
palette:{
  mode: mode ? 'dark':"light",
}
})

  return (
   <ThemeProvider theme={darkTheme}>
<Box bgcolor={"background.default"} color={"text.primary"}>
    <NavBar/>
    <Stack direction="row" spacing={2} justifyContent="space-between">

<SideBar setMode={setMode} mode={mode}/>
 <Feed/>
 <Rightbar/>
    </Stack>
    <Add/>
   </Box>

   </ThemeProvider>
  )
}

export default App
