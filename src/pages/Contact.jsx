import { FaMapMarkedAlt } from "react-icons/fa";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="bg-slate-200 text-center">
      <h1 className="font-bold text-slate-700 text-2xl p-5">Contact</h1>
      <p className="text-slate-500 my-2">Contact us for more information.</p>
      <div className="flex justify-center">
        <div className="bg-white w-96 h-28 rounded-lg m-2 hover:shadow-2xl ease-in-out duration-200 flex items-center justify-center flex-col">
          <FaMapMarkedAlt className="text-slate-400 scale-150" />
          <h1 className="text-slate-800 text-lg font-semibold underline m-0.5">
            Our Address
          </h1>
          <a href="https://www.google.com/maps/place/BIM+Design+Studio/@27.691027,85.2411948,4006m/data=!3m1!1e3!4m6!3m5!1s0x39eb23004801efc7:0x5471c2fed6b48431!8m2!3d27.6932151!4d85.2449208!16s%2Fg%2F11wnbnnmxt?entry=ttu&g_ep=EgoyMDI2MDQyNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" className="hover:text-[#ff7a7a] duration-300">
            <p className="text-slate-700 font-thin hover:text-[#ff7a7a] duration-300">
              Balambu, Chandragiri-12, Nepal
            </p>
          </a>
        </div>
        <div className="bg-white w-56 h-28 rounded-lg m-2 hover:shadow-2xl ease-in-out duration-200 flex items-center justify-center flex-col">
          <FaEnvelopeOpenText className="text-slate-400 scale-150" />
          <h1 className="text-slate-800 text-lg font-semibold underline m-0.5">
            Email Us
          </h1>
          <a
            href="tel:+9779841710941"
            className="flex items-center gap-3 group cursor-pointer">
            <p className="text-slate-700 text-md font-thin hover:text-[#ff7a7a] duration-300">
              dikeshshrestha5@gmail.com
            </p>
          </a>
        </div>
        <div className="bg-white w-56 h-28 rounded-lg m-2 hover:shadow-2xl ease-in-out duration-200 flex items-center justify-center flex-col">
          <FaPhoneVolume className="text-slate-400 scale-150" />
          <h1 className="text-slate-800 text-lg font-semibold underline m-0.5">
            Contact Us
          </h1>
          <a
            href="tel:+9779841710941"
            className="flex items-center gap-3 group cursor-pointer">
            <p className="text-slate-700 text-md font-thin hover:text-[#ff7a7a] duration-300">
              +977 9841710941
            </p>
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="hover:shadow-2xl ease-in-out duration-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.779308521681!2d85.24234587623577!3d27.693215076190643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb23004801efc7%3A0x5471c2fed6b48431!2sBIM%20Design%20Studio!5e0!3m2!1sen!2snp!4v1777664310396!5m2!1sen!2snp"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="bg-white w-96 h-96 rounded-lg m-2"
          ></iframe>
        </div>
        <form className="p-2 bg-white m-2 rounded-lg flex justify-center items-center hover:shadow-2xl ease-in-out duration-200">
          <div className="w-96 mx-8 flex-col">
            <h1 className="font-bold my-2">Any Question? Feel free to ask.</h1>
            <div className="flex gap-3">
              <div className="bg-slate-200 py-2 rounded-lg">
                <input
                  type="text"
                  placeholder="Name"
                  className="focus:outline-none w-full bg-transparent mx-3"
                />
              </div>
              <div className="bg-slate-200 py-2 rounded-lg">
                <input
                  type="email"
                  placeholder="E-mail"
                  className="focus:outline-none w-full bg-transparent mx-3"
                />
              </div>
            </div>
            <div className="w-96 bg-slate-200 py-2 my-2 rounded-lg">
              <input
                type="text"
                placeholder="Subject"
                className="focus:outline-none w-full bg-transparent mx-3"
              />
            </div>
            <div className="w-96 bg-slate-200 py-2 my-2 rounded-lg">
              <textarea
                name="postContent"
                placeholder="Message"
                rows={6}
                cols={38}
                className="focus:outline-none w-full bg-transparent mx-3"
              ></textarea>
            </div>
            <Link to="">
              <button className="text-center w-96 bg-[#ff7a7a] rounded-lg p-3 hover:bg-slate-600 hover:text-slate-50 hover:scale-110 ease-in-out duration-300">
                <h1>Click Here</h1>
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}