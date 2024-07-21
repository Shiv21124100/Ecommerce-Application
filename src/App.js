import logo from './logo.svg'; // Assuming you have a logo file imported from './logo.svg'
           import './App.css'; // Assuming you have CSS styles imported from './App.css'
      
            import { Route, Routes } from 'react-router-dom'; // Importing necessary components from react-router-dom
             import About from './Pages/About';
               import Home from './Pages/Home';
               import PageNote from './Pages/PageNote';
               import Policy from './Pages/Policy';
                import Contact from './Pages/Contact';
                    import Register from './Pages/Auth/Register';
                   import Login from './Pages/Auth/Login';
                                import Dashboard from './Pages/user/Dashboard';
                  import PrivatesRoutes from './Components1/Routes/Privates';
import Forgot from './Pages/Auth/Forgot';
import AdminRoute from './Components1/Routes/AdminRoutes';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import CreateCategory from './Pages/Admin/CreateCategory';
import CreateProduct from './Pages/Admin/CreateProduct';
import Users from './Pages/Admin/Users';
import Order from './Pages/user/Order';
import Profile from './Pages/user/Profile';


           function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} /> 
                <Route path='/dashboard' element={<PrivatesRoutes />}>
                <Route path="user" element={<Dashboard/>} />
                <Route path="user/orders" element={<Order/>} />
                <Route path="user/profile" element={<Profile/>} />
              
                </Route>
                <Route path='/dashboard' element={<AdminRoute />}>
                 <Route path="admin" element={<AdminDashboard/>} />
                 <Route path="admin/create-category" element={<CreateCategory/>} />
                 <Route path="admin/create-product" element={<CreateProduct/>} /> 
                 <Route path="admin/users" element={<Users/>} /> 
                </Route>
              
                <Route path='/about' element={<About />} />
                <Route path='/register' element={<Register />} />
                <Route path='/forgot' element={<Forgot />} />
             <Route path='/login' element={<Login />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/*' element={<PageNote />} />
                 <Route path='/policy' element={<Policy />} />
            </Routes>
        </>
    );
}

export default App;
