import React, { useState } from "react";
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Link from "@mui/material/Link";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Card, CardContent, CardMedia, Drawer, Toolbar, Typography } from "@mui/material";
import { Sidebar } from "./Drawer"; 

export const Navbar = () => {
    
    // const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
    
    // conditional rendering drawer 
    const [sidebar, setSidebar] = useState(false)

    const toggleSidebar = (e: React.MouseEvent<SVGElement>)=>{
        setSidebar(!sidebar)
        console.log("icon clicked")
    }

    return (
        <>
            <AppBar position="static"  >
                <Toolbar >
                    <Container sx={{display:"flex"}}>
                        <Box sx={{display:'flex', ml:4}}>
                            <Link color="inherit" href="/" underline="none" fontWeight={700} >
                                Home 
                            </Link>
                            <Link color="inherit" href="/store" sx={{ml:2}} underline="none" fontWeight={700}>
                                Store
                            </Link>
                            <Link color="inherit" href="/" sx={{ml:2}} underline="none" fontWeight={700}>
                                About 
                            </Link>
                        </Box>
                    </Container>
                        <ShoppingCartIcon
                        onClick={toggleSidebar}  
                        sx={{
                            fontSize:30, 
                            mr:5,
                            color:"white",
                            // padding:"25px",
                            "&:hover":{
                                backgroundColor:"white",
                                color:"blue",
                                borderRadius:"50%",
                                backgroundSize:7,
                                cursor:"pointer",
                                fontSize:50,
                                p:1
                                // padding:"25px"
                            } 
                        }} />
                </Toolbar>
            </AppBar>
            {sidebar &&
                <Sidebar toggleSidebar={toggleSidebar} sidebar={sidebar} setSidebar={setSidebar} />
            }
        </>
    )
}