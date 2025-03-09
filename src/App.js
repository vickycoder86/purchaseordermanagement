import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Auth/Login';
import Home from './Home';
import Suppliers from './Suppliers';
import AddSuppliers from './AddSuppliers';
import ItemsManagment from './ItemsManagment';
import AddItems from './AddItems';
import ViewPurchaseOrder from './ViewPurchaseOrder';
import AddPurchaseOrder from './AddPurchaseOrder';
import SinglePurchaseOrder from './SinglePurchaseOrder';
import OrderArrivals from './OrderArrivals';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Suppliers' element={<Suppliers />} />
          <Route path='/AddSuppliers' element={<AddSuppliers />} />
          <Route path='/ItemsManagment' element={<ItemsManagment />} />
          <Route path='/AddItems' element={<AddItems />} />
          <Route path='/ViewPurchaseOrder' element={<ViewPurchaseOrder />} />
          <Route path='/AddPurchaseOrder' element={<AddPurchaseOrder />} />
          <Route path='/SinglePurchaseOrder/:orderNo' element={<SinglePurchaseOrder />} />
          <Route path='/OrderArrivals' element={<OrderArrivals />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
