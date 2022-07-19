import { ReactNode, createContext, useState } from "react";

interface Props {
    children: ReactNode
}

interface product {
    id: number
    quantity: number
}

interface shoppingCartContextInterface {
    addToCart: (id:number)=> void
    presentInCart: (id:number)=> boolean
    incrementCart: (id:number)=> void 
    decrementCart: (id:number)=> void 
    removeItem: (id: number) => void
    cart: product[]
}

export const ShoppingCartContext = createContext<shoppingCartContextInterface | null>(null)


export const ContextProvider = ({children}:Props)=>{
    // array which contains all the items that are added to the cart 
    // How the fuck I will know which item clicked
    const [cart, setCart] = useState<product[]>([])

    // why when I set initial value it is empty?
    const addToCart = (id: number )=>{
        let quantity: number = 1
        setCart((prevValue)=>[...prevValue, {id, quantity}])
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

    const incrementCart = (id:number)=> {
        // increase quantity of item in the object array 
        const updatedCart = cart.map(item=>{
            if(item.id === id){
                return {
                    ...item, 
                    quantity: item.quantity + 1 
                }
            }
            return item 
        })

        setCart([...updatedCart])
    }

    const decrementCart = (id: number)=>{
        const updatedCart = cart.map((item)=>{
            if(item.id === id){
                if(item.quantity === 1){
                    // how to code this condition     
                     removeItem(id)
                }else{
                    return {
                        ...item, 
                        quantity: item.quantity - 1 
                    }
                }
            }
            return item
        })
        setCart([...updatedCart])
    }

    // id from item clicked
    const removeItem= (id: number)=>{
        let updatedCart = cart.filter((item)=>{
            if(item.id === id) return 
            return item 
        }) 
        setCart([...updatedCart])
    }



    return (
        <ShoppingCartContext.Provider value={{
            addToCart,
            presentInCart,
            incrementCart,
            decrementCart,
            removeItem,
            cart
        }} >
            {children}
        </ShoppingCartContext.Provider>
    )
}










