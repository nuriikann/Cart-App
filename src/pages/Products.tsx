import { Col, Row } from 'react-bootstrap'
import { StoreItem } from '../components/StoreItem'
import storeItems from '../data/Products.json'

export function Products(){
    return(
        <>
        <h1 style={{color: 'white'}}>Ürünler</h1>

        <Row md={2} xs={1} lg={3} className='g-3'>
            {storeItems.map(item => (
                <Col style={{color: 'white'}} key={item.id}>
                    <StoreItem {...item} />
                </Col>
            ))}
        </Row>
        </>
    )
}