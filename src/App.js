import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerPage from './components/customer/pages/customerpage';
import Register from './components/customer/components/Register/Register';
import Signin from './components/customer/components/Signin/Signin';
import { BrowserRouter as Router, Routes, Route, Redirect, useHistory } from "react-router-dom"
import ManagerRegister from './components/Manager/components/ManagerRegister/ManagerRegister';
import ManagerSignin from './components/Manager/components/ManagerSignin/ManagerSignin';
import Managerpage from './components/Manager/pages/Managerpage';
import AdminRegister from './components/Admin/components/AdminRegister/AdminRegister';
import AdminSignin from './components/Admin/components/AdminSignin/AdminSignin';
import Adminpage from './components/Admin/pages/Adminpage';
import Staffpage from './components/staff/pages/Staffpage';
import StaffRegister from './components/staff/components/StaffRegister/StaffRegister';
import StaffSignin from './components/staff/components/StaffSignin/StaffSignin';
import Chefpage from './components/chef/pages/Chefpage';
import ChefRegister from './components/chef/components/ChefRegister/ChefRegister';
import ChefSignin from './components/chef/components/ChefSignin/ChefSignin';


function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" element= {<LandingPage/>} />
      <Route exact path='/customer' element={<CustomerPage/>} />
      <Route exact path='/customer/register' element={<Register/>} />
      <Route exact path='/customer/signin' element={<Signin/>} />

      {/* manager */}
      <Route exact path='/manager' element={<Managerpage/>} />
      <Route exact path='/manager/register' element={<ManagerRegister/>} />
      <Route exact path='/manager/signin' element={<ManagerSignin/>} />

      {/* Admin */}
      <Route exact path='/admin' element={<Adminpage/>} />
      <Route exact path='/admin/register' element={<AdminRegister/>} />
      <Route exact path='/admin/signin' element={<AdminSignin/>} />

      {/* staff */}
      <Route exact path='/staff' element={<Staffpage/>} />
      <Route exact path='/staff/register' element={<StaffRegister/>} />
      <Route exact path='/staff/signin' element={<StaffSignin/>} />

      {/* chef */}
      <Route exact path='/chef' element={<Chefpage/>} />
      <Route exact path='/chef/register' element={<ChefRegister/>} />
      <Route exact path='/chef/signin' element={<ChefSignin/>} />

      </Routes>
    </Router>
  );
}

export default App;
