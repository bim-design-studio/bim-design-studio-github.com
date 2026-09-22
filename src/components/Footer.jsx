import { FaLinkedin, FaYoutube, FaFacebookSquare, FaPinterestSquare, FaInstagramSquare, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Footer() {
  const headerStyle = "text-xl text-slate-100 pb-1 mb-4 border-b-2 border-slate-500 w-full";
  const linkStyle = "text-slate-100 w-fit p-1 hover:text-[#ff7a7a] transition-colors duration-300 block";

  return (
    <footer className="bg-slate-800 p-10 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 items-start justify-items-center">
        
        <div className="bg-white w-72 flex justify-center items-center flex-col py-6 rounded-lg shadow-lg">
          <Link to="/">
            <img
              src={logo}
              width="75"
              height="75"
              alt="Logo"
              className="bg-slate-50 rounded-full"
            />
          </Link>
          <h1 className="font-bold text-slate-800 text-xl my-2">
            BIM Design Studio
          </h1>
          <div className="text-slate-700 text-sm px-4 text-center">
            <div className="mb-1">
              <span className="font-semibold">Address: </span>
              <a href="https://www.google.com/maps/place/BIM+Design+Studio/@27.691027,85.2411948,4006m/data=!3m1!1e3!4m6!3m5!1s0x39eb23004801efc7:0x5471c2fed6b48431!8m2!3d27.6932151!4d85.2449208!16s%2Fg%2F11wnbnnmxt?entry=ttu&g_ep=EgoyMDI2MDQyNy4wIKXMDSoASAFQAw%3D%3D" className="hover:text-[#ff7a7a] duration-300">Balambu, Chandragiri-12</a>
            </div>
            <div className="mb-1">
              <span className="font-semibold">Phone: </span>
              <a href="tel:+9779841710941" className="hover:text-[#ff7a7a] duration-300">+977 9841710941</a>
            </div>
            <div className="break-all">
              <span className="font-semibold">E-mail: </span>
              <a href="mailto:dikeshshrestha5@gmail.com" className="hover:text-[#ff7a7a] duration-300">dikeshshrestha5@gmail.com</a>
            </div>
          </div>

          <div className="flex gap-4 scale-125 mt-6 mb-2 text-slate-700">
              <Link to="#"><FaLinkedin className="hover:text-[#ff7a7a] duration-300 hover:scale-150" /></Link>
              <Link to="#"><FaYoutube className="hover:text-[#ff7a7a] duration-300 hover:scale-150" /></Link>
              <Link to="#"><FaFacebookSquare className="hover:text-[#ff7a7a] duration-300 hover:scale-150" /></Link>
              <Link to="#"><FaPinterestSquare className="hover:text-[#ff7a7a] duration-300 hover:scale-150" /></Link>
              <Link to="#"><FaInstagramSquare className="hover:text-[#ff7a7a] duration-300 hover:scale-150" /></Link>
              <Link to="#"><FaTiktok className="hover:text-[#ff7a7a] duration-300 hover:scale-150" /></Link>
          </div>
        </div>

        <div className="w-72">
          <h1 className={headerStyle}>Explore More</h1>
          <p className="flex flex-col gap-1 text-white">
            <li>
              <Link to="/services" className={linkStyle}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/downloads" className={linkStyle}>
                Downloads
              </Link>
            </li>
            <li>
              <Link to="/marketplace" className={linkStyle}>
                Marketplace
              </Link>
            </li>
            <li>
              <Link to="/blogs" className={linkStyle}>
                Blogs
              </Link>
            </li>
          </p>
        </div>

        <div className="w-72">
          <h1 className={headerStyle}>Our Services</h1>
          <p className="flex flex-col gap-1 text-white">
            <li>
              <Link to="/architectural-design-and-bim-modelling" className={linkStyle}>
                Architectural Design and BIM Modelling
              </Link>
            </li>

            <li>
              <Link to="/architectural-animation" className={linkStyle}>
                Architectural Animation
              </Link>
            </li>
            <li>
              <Link to="/structural-bim-modelling" className={linkStyle}>
                Structural BIM Modelling
              </Link>
            </li>
            <li>
              <Link to="/mepf-bim-modelling" className={linkStyle}>
                MEPF BIM Modelling
              </Link>
            </li>
            <li>
              <Link to="/bim-coordination-and-clash-detection" className={linkStyle}>
                BIM Coordination & Clash Detection
              </Link>
            </li>
            <li>
              <Link to="/revit-family-content-creation" className={linkStyle}>
                Revit Family/Content Creation
              </Link>
            </li>
            <li>
              <Link to="/scan-to-bim-cad" className={linkStyle}>
                Scan to BIM/CAD
              </Link>
            </li>
            <li>
              <Link to="/4d-5d-bim" className={linkStyle}>
                4D/5D BIM
              </Link>
            </li>
            <li>
              <Link to="/scripting" className={linkStyle}>
                Scripting (Dynamo + Python + C#)
              </Link>
            </li>
          </p>
        </div>

        <div className="w-72">
          <h1 className={headerStyle}>Policies</h1>
          <p className="flex flex-col gap-1 text-white">
            <li>
              <Link to="/privacy-policy" className={linkStyle}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-and-conditions" className={linkStyle}>
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link to="/abc-policy" className={linkStyle}>
                ABC Policy
              </Link>
            </li>
          </p>
        </div>

      </div>
    </footer>
  );
}