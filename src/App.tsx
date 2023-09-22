import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Categories } from './pages/Categories'
import { Navbar } from './components/Navbar'
import { Products } from './pages/Products'
import Home from './pages/Home'
import { ShoppingCartProvider } from './context/shoppingCartContext'



function App() {

  return (
    <ShoppingCartProvider>
    <Navbar />
    <Container className='mb-4'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Categories' element={<Categories />} />
        <Route path='/Products' element={<Products />} />
      </Routes>
    </Container>
    </ShoppingCartProvider>
  )
}

export default App
