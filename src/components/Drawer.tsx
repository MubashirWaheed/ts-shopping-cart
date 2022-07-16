import { Box, Card, CardContent, CardMedia, Drawer, Typography } from "@mui/material"
import React, { useState } from "react"
import products from '../data/products.json'

interface Props {
    sidebar: boolean;
    toggleSidebar: (e: React.MouseEvent<SVGElement>) => void
    setSidebar: (sidebar:boolean)=> void 
}


export const Sidebar = ({toggleSidebar, sidebar, setSidebar}: Props)=>{
    
    return (
       
        <Box 
            sx={{ backgroundColor:"red" ,width:450}}
            role="presentation"
            >
                
            <Drawer 
                anchor="right"
                open={sidebar}
                onClose={toggleSidebar}
                PaperProps={{
                    sx: { width: 350 },
                    }}
                >
                <Box mt={3}>
                    <Card  sx={{margin:"10px",  display: "flex"}}>
                        <CardMedia
                            component="img"
                            height="100"
                            image={products[0].image}
                            alt="product"
                            sx={{width:"auto", objectFit:"contain"}}
                        > 
                        </CardMedia>
                        <CardContent>
                            <Typography>
                                Card content 
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
            </Drawer>
        </Box>    
        
    )
}