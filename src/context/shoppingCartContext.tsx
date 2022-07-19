import { ReactNode, createContext, useState } from "react";


interface Props {
    children: ReactNode
}

interface product {
    id: number
    name: string
    price: number 
    image: string
}

interface shoppingCartContextInterface {
    addToCart: (item:product)=> void
    presentInCart: (id:number)=> boolean
    incrementCart: ()=> void 
    decrementCart: ()=> void 
    cart: product[]
}

export const ShoppingCartContext = createContext<shoppingCartContextInterface | null>(null)


export const ContextProvider = ({children}:Props)=>{
    // array which contains all the items that are added to the cart 
    // How the fuck I will know which item clicked
    const [cart, setCart] = useState<product[]>([])

    // why when I set initial value it is empty?
    const addToCart = (item: product )=>{
        setCart((prevValue)=>[...prevValue, item])
        console.log("hello add to cart :", cart )
    }       

    const presentInCart = (id:number)=> {
        // Check if any item in cart contains id 
        return cart.some((element)=>{
            if(element.id === id){
                return true
            }else{
                return false
            }
        })
    }

    const incrementCart = ()=> {
        // increase quantity of item in the object array 
    }

    const decrementCart = ()=>{
        // decrease quantity of item in the array 
    }

    return (
        <ShoppingCartContext.Provider value={{
            addToCart,
            presentInCart,
            incrementCart,
            decrementCart,
            cart
        }} >
            {children}
        </ShoppingCartContext.Provider>
    )
}










