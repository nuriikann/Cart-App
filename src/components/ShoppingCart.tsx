import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import { CartItem } from "./Cartitem";
import  storeItems  from "../data/Products.json"
import { formatCurrency } from "../utilities/formatCurrency";

type ShoppingCartProbs = {
    isOpen: boolean
}

export function ShoppingCart({ isOpen }:ShoppingCartProbs){

    const { closeCart, cartItems } = useShoppingCart()
    
    return (
    <Offcanvas style={{border: '1px solid white'}} show={isOpen} onHide={ closeCart } placement="end">
        <Offcanvas.Header closeButton style={{backgroundColor: '#272727', color: 'white'}}>
            <Offcanvas.Title >Sepet</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{backgroundColor: '#272727', color: 'white'}}>
            <Stack gap={3}>
                {cartItems.map(item =>(
                    <CartItem key={item.id} {...item}/>
                    ))}
                    <div className="ms-auto fw-bold fs-5">
                        Toplam {formatCurrency(cartItems.reduce((total, cartItems)=> {
                            const item = storeItems.find(i => i.id === cartItems.id)
                            return total + (item?.price || 0) * cartItems.quantity
                        }, 0)
                        )}
                    </div>
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
    )
}