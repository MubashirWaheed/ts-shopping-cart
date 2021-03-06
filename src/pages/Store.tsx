import { Box, Button, Card, CardMedia } from "@mui/material"
import Typography from "@mui/material/Typography"
import { Container } from "@mui/system"
import { useContext } from "react"
import { ShoppingCartContext } from "../context/shoppingCartContext"

import data from '../data/products.json'


// what should be the props of the store 
export const Store = ()=>{

    const shoppingCartContext = useContext(ShoppingCartContext)

    if(!shoppingCartContext) return null
    const { addToCart, presentInCart, incrementCart, decrementCart, removeItem } = shoppingCartContext
    
    return (
        <Container sx={{mt:3, mb:3}}>
            <Typography variant="h4">
                Store
            </Typography>

            {/* Card with image */}
            <Box sx={{display:"flex",flexWrap: 'wrap',justifyContent:"center", alignItems:"center" , gap:"50px"}}>
            {data.map(item=>{
                console.log(item.image)
                return (
                <Card sx={{ width:300}} >
                    <CardMedia
                        component="img"
                        height="300"
                        image={ process.env.PUBLIC_URL+item.image}
                        alt={item.name}
                        sx={{objectFit:"contain"}}
                    />
                    <Box mx={2} mb={2} sx={{display:"flex"}}>
                        <Typography variant="h6" sx={{display:"flex", flexGrow:1}}>
                            {item.name}
                        </Typography>
                        <Typography>
                            ${item.price}
                        </Typography>
                    </Box>
                    {
                        (!presentInCart(item.id)) ? 
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ width:"100%", mb:2}}
                                onClick ={()=>addToCart(item.id)}
                                >
                                Add to Cart
                            </Button>  
                        : 
                        <Box sx={{display:"flex",flexDirection:"column", justifyContent:"center"}}>
                            <Box sx={{display:"flex", justifyContent:"center" }} mb={1}>
                                <Button 
                                    sx={{marginRight:1 ,width:40, height: 30, fontSize:25 ,fontWeight:700}}
                                    variant="contained"
                                    color="error"
                                    onClick={()=>decrementCart(item.id)}
                                > -
                                </Button>
                                <Button 
                                    sx={{marginLeft:1, width:40, height: 30, fontSize:25 ,fontWeight:700}}
                                    variant="contained"
                                    onClick={()=>incrementCart(item.id)}
                                >
                                    + 
                                </Button>
                            </Box>
                            <Button 
                                variant="outlined"
                                onClick={()=>removeItem(item.id)}
                                >
                                Remove from cart 
                            </Button>
                        </Box>
                    }
                         
                </Card>
            )})}
            </Box>

        </Container>
    )
}