import { ShoppingCartContext } from '../context/shoppingCartContext'
import { Box, Button, Card, CardContent, CardMedia, Drawer, Stack, Typography } from "@mui/material"
import React, { useContext } from "react"
import data from '../data/products.json' 

interface Props {
    sidebar: boolean;
    toggleSidebar: (e: React.MouseEvent<SVGElement>) => void
    setSidebar: (sidebar:boolean)=> void 
}


export const Sidebar = ({toggleSidebar, sidebar, setSidebar}: Props)=>{

    const shoppingCart   = useContext(ShoppingCartContext)

        if(!shoppingCart) return null 
        const { cart , removeItem } = shoppingCart 
    
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
                <Typography variant="h5" fontWeight={700} mt={2} ml={2}>
                    Cart 
                </Typography>
                <Box mt={3}>
                {
                    cart.map((item, i)=>(
                        <Card sx={{margin:"10px",  display: "flex"}} key={i}>
                            <CardMedia
                                component="img"
                                height="100"
                                image= {process.env.PUBLIC_URL+data[item.id].image}
                                // image={data[item.id].image}
                                alt="product"
                                sx={{width:"auto", objectFit:"contain"}}
                            > 
                            </CardMedia>
                            <CardContent sx={{mb:0, pb:0}}>
                                <Typography fontWeight={700}>
                                    {data[item.id].name} 
                                </Typography>
                                <Typography
                                    sx={{display:"flex", justifyContent:"space-between"}}
                                     component="div">
                                    <Typography >
                                        x{item.quantity}
                                    </Typography>
                                    <Typography fontWeight={500}>
                                        ${data[item.id].price}
                                    </Typography>
                                </Typography>
                                <Button 
                                    variant="outlined"
                                    sx={{width:130, height: 25 }}
                                    onClick={()=>removeItem(item.id)}
                                    >
                                    Remove  
                                </Button>
                            </CardContent>
                        </Card>
                    ))
                }

                    <Stack direction="row" justifyContent="end" >
                        <Box mr={3} fontWeight={700}>
                            Total: ${
                                cart.reduce((total,current)=>{
                                    return total = total +  data[current.id].price * current.quantity 
                                },0)
                            }
                        </Box>
                    </Stack>

                </Box>                
            </Drawer>
        </Box>    
        
    )
}