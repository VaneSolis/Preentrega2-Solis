import './App.css';
import { BrowserRouter, Routes, Route}  from 'react-router-dom';
import ContactComponent from './components/contact/ContactComponent.jsx'
import NavBar from './components/navigation/NavBar.jsx';
import ItemDetailContainer from './components/product/ItemDetailContainer.jsx';
import ItemListContainer from './components/home/ItemListContainer.jsx'
import CategoryComponent from './components/categories/CategoryComponent.jsx';



function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
    <Route exact path="/" element={<ItemListContainer />} />
    <Route exact path="/product/:prodId" element={<ItemDetailContainer />} />
    <Route exact path="/category/:catName" element={<CategoryComponent />} />
    <Route exact path="/Contact" element={<ContactComponent />} />
   
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
