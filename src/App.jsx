import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidepanel from './Components/sidepanel/Sidepanel';
import Angelclub from './Pages/Angel-club/Angelclub';
import SignInRegister from './Pages/SignInRegister/SignInRegister';
import CreateAccount from './Pages/CreateAccount/CreateAccount';
import SideButton from './Components/SideButton/SideButton';
import NavBar from './Components/Navigationbar/NavBar';
import Header from './Components/Navigationbar/Header';
import ScyllaZelus from './Pages/Scylla/Scylla';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import NewArrivals from './Pages/NewArrivals/NewArrivals';
import Collections from './Pages/Collections/Collections';
import WorkWear from './Pages/WorkWear/WorkWear';
import Linen from './Pages/Linen/Linen';
import Denim from './Pages/Denim/Denim';
import Men from './Pages/ShopMen/Men';
import Sale from './Pages/50off/Sale';
import ContactUs from './Pages/ContactUs/ContactUs';
import Redvers from './Pages/Redvers/Redvers';
import Casual from './Pages/Casual/Casual';
import Conditions from './Pages/Conditions/Conditions';
import Policy from './Pages/PrivacyPolicy/Policy';
import Shipping from './Pages/ShippingandReturn/Shipping';
import AboutUs from './Pages/AboutUs/AboutUs';
import Kelly from './Pages/KellyPage/Kelly';
import Evening from './Pages/Evening/Evening';
import Essential from './Pages/Essential/Essential';
import Over from './Pages/Over/Over';
import Crop from './Pages/Crop/Crop';
import Dress from './Pages/Dress/Dress';
import SignInRightsidePanel from './Components/SignInRightsidePanel/SignInRightsidePanel';
import Cart from './Pages/Cart/Cart';



function App() {
  return (
    <Router>
      <div className='overflow-auto w-full h-full '>
        <Header />
        <NavBar />
        <Routes>
          {/* Define your routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/new-arrivals" element={<NewArrivals/>} />
          <Route path="/collections" element={<Collections/>} />
          <Route path="/workwear" element={<WorkWear/>} />
          <Route path="/linen" element={<Linen/>} />
          <Route path="/denim" element={<Denim/>} />
          <Route path="/scylla" element={ <ScyllaZelus/>} />
          <Route path="/shop-men" element={<Men/>} />
          <Route path="/50-off" element={<Sale/>} />
          <Route path="/angel-club" element={<Angelclub />} />
          <Route path="/sign-in-register" element={<SignInRegister />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/Redvers" element={<Redvers />} />
          <Route path="/casual" element={<Casual />} />
          <Route path="/condition" element={<Conditions />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/returns" element={<Shipping />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/Kelly" element={<Kelly />} />
          <Route path="/Evening" element={<Evening />} />
          <Route path="/Essential" element={<Essential />} />
          <Route path="/Over" element={<Over />} />
          <Route path="/crop" element={<Crop />} />
          <Route path="/Dress" element={<Dress />} />
          <Route path="/SignInRightsidePanel" element={<SignInRightsidePanel />} />
          <Route path="/Cart" element={<Cart />} />
        
        </Routes>
        <SideButton />
        <Footer />
        
       
      </div>
    </Router>
  );
}

export default App;
