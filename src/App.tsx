
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Catalog from './routes/ClientHome/Catalog';
import ProductDetails from './routes/ProductDetails';



export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ClientHome />}>
        <Route path='product-details' element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );

}


