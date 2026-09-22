import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Downloads from "./pages/Downloads";
import Marketplace from "./pages/Marketplace";
import Blogs from "./pages/Blogs";

import ContactHeader from "./components/ContactHeader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BottommostFooter from "./components/BottommostFooter";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import ABCPolicy from "./pages/ABCPolicy";

import ArchitecturalDesignAndBIMModelling from "./pages/ArchitecturalDesignAndBIMModelling";
import ArchitecturalAnimation from "./pages/ArchitecturalAnimation";
import StructuralBIMModelling from "./pages/StructuralBIMModelling";
import MEFFBIMModelling from "./pages/MEPFBIMModelling";
import BIMCoordinationAndClashDetection from "./pages/BIMCoordinationAndClashDetection";
import RevitFamilyContentCreation from "./pages/RevitFamilyContentCreation";
import ScanToBIMCAD from "./pages/ScanToBIMCAD";
import _4D5DBIM from "./pages/4D5DBIM";
import Scripting from "./pages/Scripting";

import BIMTemplates from "./pages/BIMTemplates";
import RevitContentsFamilies from "./pages/RevitContentsFamilies";
import BIMCourses from "./pages/BIMCourses";
import ArchitecturalEBooks from "./pages/ArchitecturalEBooks";
import ArchitecturalCheatSheets from "./pages/ArchitecturalCheatSheets";
import Scripts from "./pages/Scripts";
import { fromJSON } from "postcss";

export default function App() {
  return (
    <BrowserRouter>
      <ContactHeader />
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/downloads" element={<Downloads />}></Route>
        <Route path="/marketplace" element={<Marketplace />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>

        <Route path="/courses" element={<BIMCourses />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>

        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/terms-and-conditions" element={<TermsAndConditions />}></Route>
        <Route path="/abc-policy" element={<ABCPolicy />}></Route>

        <Route path="/architectural-design-and-bim-modelling" element={<ArchitecturalDesignAndBIMModelling />}></Route>
        <Route path="/architectural-animation" element={<ArchitecturalAnimation />}></Route>
        <Route path="/structural-bim-modelling" element={<StructuralBIMModelling />}></Route>
        <Route path="/mepf-bim-modelling" element={<MEFFBIMModelling />}></Route>
        <Route path="/bim-coordination-and-clash-detection" element={<BIMCoordinationAndClashDetection />}></Route>
        <Route path="/revit-family-content-creation" element={<RevitFamilyContentCreation />}></Route>
        <Route path="/scan-to-bim-cad" element={<ScanToBIMCAD />}></Route>
        <Route path="/4d-5d-bim" element={<_4D5DBIM />}></Route>
        <Route path="/scripting" element={<Scripting />}></Route>

        <Route path="/bim-templates" element={<BIMTemplates />}></Route>
        <Route path="/revit-contents-families" element={<RevitContentsFamilies />}></Route>
        <Route path="/bim-courses" element={<BIMCourses />}></Route>
        <Route path="/architectural-ebooks" element={<ArchitecturalEBooks />}></Route>
        <Route path="/architectural-cheat-sheets" element={<ArchitecturalCheatSheets />}></Route>
        <Route path="/scripts" element={<Scripts />}></Route>

        <Route path="*" element={
          <div className="min-h-screen bg-slate-100 px-6 py-12">
            <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-10 text-slate-800">
              <h1 className="text-3xl font-bold mb-4">Page not found</h1>
              <p className="text-slate-700">The page you are looking for does not exist.</p>
            </div>
          </div>
        } />
      </Routes>
      <Footer />
      <BottommostFooter />
    </BrowserRouter>
  );
}