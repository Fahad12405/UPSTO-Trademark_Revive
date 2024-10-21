import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Pages/Home";
import TrademarkRegistration from './Components/Pages/Service-dropdown-pages/Trademark-registration'; // Adjust the import path as necessary
import ComprehensiveTrademarkResearch from './Components/Pages/Service-dropdown-pages/Comprehensive-Trademark-Research';
import Statementofuse from './Components/Pages/Service-dropdown-pages/Statementofuse';
import Trademarkmonitoring from './Components/Pages/Service-dropdown-pages/Trademarkmonitoring';
import OfficeActionResponse from "./Components/Pages/Service-dropdown-pages/OfficeActionResponse";
import FillingRenewal from "./Components/Pages/Service-dropdown-pages/FillingRenewal";
import RevivalAbandonment from "./Components/Pages/Service-dropdown-pages/RevivalAbandonment";
import LogoDesignService from "./Components/Pages/Service-dropdown-pages/LogoDesignService";
import MidBanner from "./Components/Pages/MidBanner";


import About1 from "./Components/Routes/About1";
import FAQ1 from "./Components/Routes/FAQ1";
import Testimonial1 from "./Components/Routes/Testimonial1";
import Contact1 from "./Components/Routes/Contact1";
import ErrorPage from "./Components/Pages/ErrorPage";

import BotpressChatbot from "./Components/Ebook/BotpressChatbot";


import { useAuth0 } from "@auth0/auth0-react";


function App() {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About1 />} />
        
          <Route path="/FAQ1" element={<FAQ1 />} />
          <Route path="/testimonial" element={<Testimonial1 />} />
          <Route path="/contact" element={<Contact1 />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="/Trademark-registration" element={<TrademarkRegistration />} />
          <Route path="/Comprehensive-Trademark-Research" element={<ComprehensiveTrademarkResearch />} />
          <Route path="/Statementofuse" element={<Statementofuse />} />
          <Route path="/Trademarkmonitoring" element={<Trademarkmonitoring />} />
          <Route path="/OfficeActionResponse" element={<OfficeActionResponse />} />
          <Route path="/FillingRenewal" element={<FillingRenewal />} />
          <Route path="/RevivalAbandonment" element={<RevivalAbandonment />} />
          <Route path="/LogoDesignService" element={<LogoDesignService />} />
          <Route path="/MidBanner" element={<MidBanner />} />
         
          x

         

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <BotpressChatbot />
    </>
  );
}

export default App;
