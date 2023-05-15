import logo from './logo.svg';
import './App.css';
import EditProfile from './views/Editprofile/EditProfile';
import AddDoctor from './views/AddDoctor/AddDoctor';
import DoctorSignin from './views/DoctorSignin/DoctorSignin';


//import AdminPanel from "./views/AdminPanel/adminPanel";

import AdminPanel from './views/adminPanel/AdminPanel'
import AdminSignin from './views/AdminSignin/AdminSignin';
import Payment from './views/Payment/Payment';
import AddPayment from './views/Payment/AddPayment';
import EditPayment from './views/Payment/EditPayment';


//import Admin from "./views/AdminPanel/AdminPanel";
//import AdminPanel from './views/AdminPanel/AdminPanel';

import Appointment from './views/Appointment/Appointment';
import AddAppointment from './views/Appointment/AddAppointment';
import EditAppointment from './views/Appointment/EditAppointment';
import Home from './views/Home/Home';
import Admin from "./views/adminPanel/AdminPanel";
//import WelcomePage from './views/Welcome/Welcome';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoctorProfile from './views/DoctorProfile/DoctorProfile';
import Feedback from './views/Feedback/Feedback';
import AddFeedback from './views/Feedback/AddFeedback';
import EditFeedback from './views/Feedback/EditFeedback';
import WelcomePage from './views/Welcome/Welcome';
import AboutUs from './views/AboutUs/AboutUs';
import DoctorList from './views/DoctorList/DoctorList';
import AddCardDetails from './views/AddCardDetails/AddCardDetails';
import AddShippingDetails from './views/AddShippingDetails/AddShippingDetails';
import Success from './views/Sucuss/Success';



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/editDoctor/:id' element={<EditProfile />} />
        </Routes>
        <Routes>
          <Route path='/adddoctor' element={<AddDoctor />} />
        </Routes>
        <Routes>
          <Route path='/' element={<DoctorSignin />} />
        </Routes>
        <Routes>
          <Route path='/DoctorProfile/:id' element={<DoctorProfile />} />
        </Routes>




        <Routes>
          <Route path='/AdminPanel' element={<AdminPanel />} />
        </Routes>

        <Routes>
          <Route path='/Home' element={<Home />} />
        </Routes>

        <Routes>
          <Route path='/Feedback' element={<Feedback />} />
        </Routes>

        <Routes>
          <Route path='/AddFeedback' element={<AddFeedback />} />
        </Routes>

        <Routes>
          <Route path='/EditFeedback/:id' element={<EditFeedback />} />
        </Routes>




        <Routes>
          <Route path='/AdminSignin' element={<AdminSignin />} />
        </Routes>


        <Routes>
          <Route path='/DoctorSignin' element={<DoctorSignin />} />
        </Routes>
        <Routes>
          <Route path='/Payment' element={<Payment />} />
        </Routes>

        <Routes>
          <Route path='/AddPayment' element={<AddPayment />} />
        </Routes>

        <Routes>
          <Route path='/EditPayment/:id' element={<EditPayment />} />
        </Routes>


        <Routes>
          <Route path='/Appointment' element={<Appointment />} />
        </Routes>
        <Routes>
          <Route path='/AddAppointment' element={<AddAppointment />} />
        </Routes>
        <Routes>
          <Route path='/EditAppointment/:id' element={<EditAppointment />} />
        </Routes>


        <Routes>
          <Route path='/Succuss' element={<Success />} />
        </Routes>
        <Routes>
          <Route path='/AddShippingDetails' element={<AddShippingDetails />} />
        </Routes>

        <Routes>
          <Route path='/AddCardDetails' element={<AddCardDetails />} />
        </Routes>

        {/* Add Card Details */}

      </Router>
    </div>
  );
}

export default App;
