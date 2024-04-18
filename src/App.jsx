import './App.css';
import { BrowserRouter, Routes, Route}  from 'react-router-dom';
import ContactComponent from './components/contact/ContactComponent.jsx'
import NavBar from './components/navigation/NavBar.jsx';
import ItemDetailContainer from './components/product/ItemDetailContainer.jsx';
import ItemListContainer from './components/Catalogo/ItemListContainer.jsx'
import CategoryComponent from './components/categories/CategoryComponent.jsx';
import {CartProvider } from './context/CartContext.jsx';
import Carrito from './components/Carrito.jsx';
import Checkout from './components/product/Checkout.jsx'
import Inicio from './components/home/Inicio.jsx'



function App() {
 

  return (
    <>
    <CartProvider>
    <BrowserRouter>

    <NavBar />

    <Routes>
    <Route exact path="/" element={<Inicio />} />
    <Route exact path="/product/:prodId" element={<ItemDetailContainer />} />
    <Route exact path="/category/:catName" element={<CategoryComponent />} />
    <Route exact path="/Contact" element={<ContactComponent />} />
    <Route exact path="/Carrito" element={<Carrito />} />
   <Route exact path='/Checkout' element={<Checkout />} />
   <Route exact path='/Catalogo' element={<ItemListContainer />} />
    </Routes>
    </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
