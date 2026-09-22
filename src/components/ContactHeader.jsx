import { FaEnvelopeOpenText, FaPhoneVolume, FaLinkedin, FaYoutube, FaFacebookSquare, FaPinterestSquare, FaInstagramSquare, FaTiktok } from "react-icons/fa";

export default function ContactHeader() {
  return (
    <div className="flex justify-between p-3 bg-slate-200">
      <div className="flex gap-4">
        {/* EMAIL SECTION */}
        <a
          href="mailto:dikeshshrestha5@gmail.com"
          className="flex items-center gap-3 group cursor-pointer">
          <FaEnvelopeOpenText className="text-slate-400 text-xs group-hover:text-[#ff7a7a] duration-300" />
          <p className="text-slate-400 text-xs group-hover:text-[#ff7a7a] duration-300">dikeshshrestha5@gmail.com</p>
        </a>

        {/* PHONE SECTION */}
        <a
          href="tel:+9779841710941"
          className="flex items-center gap-3 group cursor-pointer">
          <FaPhoneVolume className="text-slate-400 text-xs group-hover:text-[#ff7a7a] duration-300" />
          <p className="text-slate-400 text-xs group-hover:text-[#ff7a7a] duration-300">+977 9841710941</p>
        </a>
      </div>

      <div className="flex gap-3">
        <a
          href="https://www.linkedin.com/company/bim-design-studio-balambu/?viewAsMember=true"
          target="_blank"
          rel="noreferrer">
          <FaLinkedin className="text-slate-400 text-xs hover:text-[#ff7a7a] duration-300 hover:scale-150" />
        </a>
        <a
          href="https://www.youtube.com/@BIM_Design_Studio?sub_confirmation=1"
          target="_blank"
          rel="noreferrer">
          <FaYoutube className="text-slate-400 text-xs hover:text-[#ff7a7a] duration-300 hover:scale-150" />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61566133000819"
          target="_blank"
          rel="noreferrer">
          <FaFacebookSquare className="text-slate-400 text-xs hover:text-[#ff7a7a] duration-300 hover:scale-150" />
        </a>
        <a
          href="https://www.pinterest.com/BIM_Design_Studio/"
          target="_blank"
          rel="noreferrer">
          <FaPinterestSquare className="text-slate-400 text-xs hover:text-[#ff7a7a] duration-300 hover:scale-150" />
        </a>
        <a
          href="https://www.instagram.com/bim_design_studio_balambu/"
          target="_blank"
          rel="noreferrer">
          <FaInstagramSquare className="text-slate-400 text-xs hover:text-[#ff7a7a] duration-300 hover:scale-150" />
        </a>
        <a
          href="https://www.tiktok.com/@bim_design_studio"
          target="_blank"
          rel="noreferrer">
          <FaTiktok className="text-slate-400 text-xs hover:text-[#ff7a7a] duration-300 hover:scale-150" />
        </a>
      </div>
    </div>
  );
}