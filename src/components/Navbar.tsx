import React, { useState } from "react";
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Link from "@mui/material/Link";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Toolbar } from "@mui/material";
import { Sidebar } from "./Sidebar"; 

export const Navbar = () => {
    
    const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
    
    // conditional rendering sidebar 
    const [sidebar, setSidebar] = useState(false)

    const toggleSidebar = (e: React.MouseEvent<SVGElement>)=>{
        setSidebar(!sidebar)
    }

    return (
        <>
            <AppBar position="static" >
                <Toolbar >
                    <Container sx={{display:"flex"}}>
                        <Box sx={{display:'flex', ml:4}}>
                            <Link  color="inherit" href="/ts-shopping-cart/store" underline="none" fontWeight={700} >
                                Home 
                            </Link>
                            <Link color="inherit" href="/ts-shopping-cart/store" sx={{ml:2}} underline="none" fontWeight={700}>
                                Store
                            </Link>
                            <Link  color="inherit" href="/ts-shopping-cart/" sx={{ml:2}} underline="none" fontWeight={700}>
                                About 
                            </Link>
                        </Box>
                    </Container>
                        <ShoppingCartIcon
                        onClick={toggleSidebar}  
                        sx={{
                            backgroundColor:"white",
                            color:"blue",
                            borderRadius:"50%",
                            backgroundSize:7,
                            cursor:"pointer",
                            fontSize:50,
                            p:1,
                            mr:4
                        }} />
                </Toolbar>
            </AppBar>
            {sidebar &&
                <Sidebar toggleSidebar={toggleSidebar} sidebar={sidebar} setSidebar={setSidebar} />
            }
        </>
    )
}