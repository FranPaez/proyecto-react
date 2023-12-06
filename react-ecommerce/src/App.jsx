import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import NavbarBoost from '/src/components/Navbar.jsx';
import { ItemListContainer } from './components/ItemListContainer';
import { Error404 } from './components/Error404';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { CartProvider } from './contexts/CartContext';
import { Ayuda } from './components/views/Ayuda';
import { SobreNosotros } from './components/views/SobreNosotros';
import { Carrito } from './components/views/Carrito';


function App() {
  return(
  <CartProvider>
  <BrowserRouter>
    <NavbarBoost />
    <Routes>
      <Route path ="/ayuda" element={<Ayuda />}></Route>
      <Route path ="/nosotros" element={<SobreNosotros />}></Route>
      <Route path ="/cart" element={<Carrito />}></Route>
      <Route path ="/" element={<ItemListContainer greeting={"Lista de productos:"}/>} />
      <Route path ="/category/:id" element={<ItemListContainer greeting={"Lista de productos:"}/>} />
      <Route path="/items/:id" element={<ItemDetailContainer/>}></Route>
      <Route path ="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>
  </CartProvider>
  )
};

export default App
