import { Button, Card } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../context/shoppingCartContext"

type StoreItemProbs = {
    id: number
    name: string
    price: number
    imgUrl: string
    category: string
}

export function StoreItem({id, name, price, imgUrl, category}: StoreItemProbs){

    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    const quantity = getItemQuantity(id)

    return(
        <Card className="h-100">
            <Card.Img 
            variant="top" 
            src={imgUrl} 
            height='200px' 
            style={{objectFit: 'contain'}} 
            />
            <Card.Body className="d-flex flex-column">
                <Card.Title className="d-flex justify-content-between align-items-baseline">
                    <span className="fs-2">{name}</span>
                    <span className="fs-6" style={{color: '#272727'}}>{category}</span>
                    <span className="ms-2 text-muted">{formatCurrency(price)} ₺</span>
                </Card.Title>
                <div className="mt-auto">
                    {quantity === 0 ? (
                        <Button className="w-100" onClick={() => increaseCartQuantity(id)}>+ Sepete ekle</Button>
                    ) : <div className="d-flex align-items-center flex-column" style={{gap: ".5rem"}}>
                            <div>
                            <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                                <span className="fs-3" style={{marginLeft: 10, marginRight: 10}}>{quantity} sepette</span>
                            <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                            </div>
                            <div className="d-flex align-items-center justify-content-center" style={{gap: ".5rem"}}>
                                <Button onClick={() => removeFromCart(id)} variant="danger" size="sm">Sil</Button>
                            </div>
                        </div>}
                </div>
            </Card.Body>
        </Card>
    )
}