import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/shoppingCartContext"

export function Navbar(){

    const { openCart, cartQuantity} = useShoppingCart()

    return(
        <NavbarBs sticky="top" className="bg-dark shadow-lg mb-5">
            <Container>
                <Nav className="me-auto">
                    <Nav.Link style={{color: 'white'}} to='/' as={NavLink}>
                        Anasayfa
                    </Nav.Link>
                    <Nav.Link style={{color: 'white'}} to='/Categories' as={NavLink}>
                        Kategoriler
                    </Nav.Link>
                    <Nav.Link style={{color: 'white'}} to='/Products' as={NavLink}>
                        Ürünler
                    </Nav.Link>
                </Nav>
                {cartQuantity > 0 &&( 
                <button onClick={openCart} style={{position: 'relative', width: '3rem', border: 'none', borderRadius:'6px', backgroundColor: '#34bdeb', height:'3rem'}} className="rounded-circle">
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24"
                >
                    <path 
                    d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/>
                    </svg>
                
                   <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{
                    color: 'white', 
                    width: '1.5rem', 
                    height: '1.5rem', 
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    transform: 'translate(25%, 25%)'
                    }}>
                        {cartQuantity}
                    </div>
                </button>
                )}
            </Container>
        </NavbarBs>
    )
}