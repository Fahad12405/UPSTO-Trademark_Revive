import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';

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
import Scroll from "./Components/Pages/Scroll";
import DropdownServiceCards from "./Components/Pages/DropdownServiceCards";
import RegistrationForm from "./Components/Pages/RegistrationForm";
import FormButton from "./Components/Pages/FormButton";

import About1 from "./Components/Routes/About1";
import FAQ1 from "./Components/Routes/FAQ1";
import Testimonial1 from "./Components/Routes/Testimonial1";
import Contact1 from "./Components/Routes/Contact1";
import ErrorPage from "./Components/Pages/ErrorPage";

import { useAuth0 } from "@auth0/auth0-react";
import Footer from "./Components/Pages/Footer";
import Navbar from "./Components/Pages/Navbar";

function App() {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Upsto Trademark Revive",
              "url": "https://upstotrademarkrevive.com",
              "logo": "https://firebasestorage.googleapis.com/v0/b/vehware-logo.appspot.com/o/trademarklogo.png?alt=media&token=ba9179c8-afec-4a6d-9fcd-0bb866e1dc93",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-800-000-0000",
                "contactType": "Customer Service"
              }
            }
          `}
        </script>
      </Helmet>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About1 />} />
          <Route path="/FAQ1" element={<FAQ1 />} />
          <Route path="/testimonial" element={<Testimonial1 />} />
          <Route path="/contact" element={<Contact1 />} />
          <Route path="/About1" element={<About1 />} />
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
          <Route path="/Scroll" element={<Scroll />} />
          <Route path="/DropdownServiceCards" element={<DropdownServiceCards />} />
          <Route path="/RegistrationForm" element={<RegistrationForm />} />
          <Route path="/FormButton" element={<FormButton />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <BotpressChatbot /> */}
    </>
  );
}

export default App;
