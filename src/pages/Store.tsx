import { Box, Button, Card, CardMedia } from "@mui/material"
import Typography from "@mui/material/Typography"
import { Container } from "@mui/system"

import data from '../data/products.json'

// cards needs to be created 
export const Store = ()=>{

    // Now what should I do
    const addToCart = ()=>{
        // should be hidden 
    }

    return (
        <Container sx={{mt:3}}>
            <Typography variant="h4">
                Store
            </Typography>
            {/* Card with image */}

            <Box sx={{display:"flex",flexWrap: 'wrap',justifyContent:"center", alignItems:"center" , gap:"50px"}}>
            {data.map(item=>(
                <Card sx={{width:300}}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={item.image}
                        // image="/images/laptop.jpeg"
                        alt="laptop image"
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

                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ width:"100%", mb:2}}
                        onClick ={addToCart}
                        >
                        Add to Cart
                    </Button>     
                </Card>
            ))}
            </Box>


            {/* <Card sx={{ maxWidth:300 }}>
                <CardMedia 
                    component="img"
                    height="340"
                    image={data[0].image}
                    // image="/images/laptop.jpeg"
                    alt="laptop image"
                    sx={{objectFit:"contain"}}
            />
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ width:"100%", mb:2}}
                    >
                    Add to Cart
                </Button>      
            </Card> */}

        </Container>
    )
}