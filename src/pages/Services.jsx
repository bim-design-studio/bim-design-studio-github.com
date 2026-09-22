import { Link } from "react-router-dom";
import img_service01 from "../assets/service01.jpg";
import img_service02 from "../assets/service02.jpg";
import img_service03 from "../assets/service03.jpg";

export default function Services() {
  return (
    <div className="bg-slate-200 text-center pb-10">
      <h1 className="font-bold text-slate-700 text-2xl p-5">Services</h1>
      <p className="text-slate-500 my-2 px-4">
        We specialize in providing a wide range of BIM services including,
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-fit mx-auto px-4">

        <div className="group bg-slate-50 p-2 rounded-lg w-fit h-fit">
          <div
            style={{
              backgroundImage: `url(${img_service01})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-80 h-52 rounded-lg m-2 py-3 opacity-50 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center flex-col"
          ></div>
          <div className="flex justify-center items-center flex-col pb-2">
            <h1 className="text-slate-800 text-lg font-semibold m-0.5">
              Architectural Design and BIM Modelling
            </h1>
            <Link to="/architectural-design-and-bim-modelling">
              <button className="text-center w-fit bg-[#ff7a7a] rounded-lg p-3 hover:bg-slate-600 hover:text-slate-50 hover:scale-110 ease-in-out duration-300">
                <h1>More Details</h1>
              </button>
            </Link>
          </div>
        </div>

        <div className="group bg-slate-50 p-2 rounded-lg w-fit h-fit">
          <div
            style={{
              backgroundImage: `url(${img_service02})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-80 h-52 rounded-lg m-2 py-3 opacity-50 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center flex-col"
          ></div>
          <div className="flex justify-center items-center flex-col pb-2">
            <h1 className="text-slate-800 text-lg font-semibold m-0.5">
              Architectural Animation
            </h1>
            <Link to="/architectural-animation">
              <button className="text-center w-fit bg-[#ff7a7a] rounded-lg p-3 hover:bg-slate-600 hover:text-slate-50 hover:scale-110 ease-in-out duration-300">
                <h1>More Details</h1>
              </button>
            </Link>
          </div>
        </div>

        <div className="group bg-slate-50 p-2 rounded-lg w-fit h-fit">
          <div
            style={{
              backgroundImage: `url(${img_service03})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-80 h-52 rounded-lg m-2 py-3 opacity-50 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center flex-col"
          ></div>
          <div className="flex justify-center items-center flex-col pb-2">
            <h1 className="text-slate-800 text-lg font-semibold m-0.5">
              Structural BIM Modelling
            </h1>
            <Link to="/structural-bim-modelling">
              <button className="text-center w-fit bg-[#ff7a7a] rounded-lg p-3 hover:bg-slate-600 hover:text-slate-50 hover:scale-110 ease-in-out duration-300">
                <h1>More Details</h1>
              </button>
            </Link>
          </div>
        </div>

        <div className="group bg-slate-50 p-2 rounded-lg w-fit h-fit">
          <div
            style={{
              backgroundImage: `url(${img_service01})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-80 h-52 rounded-lg m-2 py-3 opacity-50 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center flex-col"
          ></div>
          <div className="flex justify-center items-center flex-col pb-2">
            <h1 className="text-slate-800 text-lg font-semibold m-0.5">
              MEPF BIM Modelling
            </h1>
            <Link to="/mepf-bim-modelling">
              <button className="text-center w-fit bg-[#ff7a7a] rounded-lg p-3 hover:bg-slate-600 hover:text-slate-50 hover:scale-110 ease-in-out duration-300">
                <h1>More Details</h1>
              </button>
            </Link>
          </div>
        </div>

        <div className="group bg-slate-50 p-2 rounded-lg w-fit h-fit">
          <div
            style={{
              backgroundImage: `url(${img_service02})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-80 h-52 rounded-lg m-2 py-3 opacity-50 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center flex-col"
          ></div>
          <div className="flex justify-center items-center flex-col pb-2">
            <h1 className="text-slate-800 text-lg font-semibold m-0.5">
              BIM Coordination and Clash Detection
            </h1>
            <Link to="/bim-coordination-and-clash-detection">
              <button className="text-center w-fit bg-[#ff7a7a] rounded-lg p-3 hover:bg-slate-600 hover:text-slate-50 hover:scale-110 ease-in-out duration-300">
                <h1>More Details</h1>
              </button>
            </Link>
          </div>
        </div>

        <div className="group bg-slate-50 p-2 rounded-lg w-fit h-fit">
          <div
            style={{
              backgroundImage: `url(${img_service01})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-80 h-52 rounded-lg m-2 py-3 opacity-50 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center flex-col"
          ></div>
          <div className="flex justify-center items-center flex-col pb-2">
            <h1 className="text-slate-800 text-lg font-semibold m-0.5">
              Revit Family/Content Creation
            </h1>
            <Link to="/revit-family-content-creation">
              <button className="text-center w-fit bg-[#ff7a7a] rounded-lg p-3 hover:bg-slate-600 hover:text-slate-50 hover:scale-110 ease-in-out duration-300">
                <h1>More Details</h1>
              </button>
            </Link>
          </div>
        </div>

        <div className="group bg-slate-50 p-2 rounded-lg w-fit h-fit">
          <div
            style={{
              backgroundImage: `url(${img_service01})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-80 h-52 rounded-lg m-2 py-3 opacity-50 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center flex-col"
          ></div>
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-slate-800 text-lg font-semibold m-0.5">
              Scan to BIM/CAD
            </h1>
            <Link to="/scan-to-bim-cad">
              <button className="text-center w-fit bg-[#ff7a7a] rounded-lg p-3 hover:bg-slate-600 hover:text-slate-50 hover:scale-110 ease-in-out duration-300">
                <h1>More Details</h1>
              </button>
            </Link>
          </div>
        </div>

        <div className="group bg-slate-50 p-2 rounded-lg w-fit h-fit">
          <div
            style={{
              backgroundImage: `url(${img_service02})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-80 h-52 rounded-lg m-2 py-3 opacity-50 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center flex-col"
          ></div>
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-slate-800 text-lg font-semibold m-0.5">
              4D/5D BIM
            </h1>
            <Link to="/4d-5d-bim">
              <button className="text-center w-fit bg-[#ff7a7a] rounded-lg p-3 hover:bg-slate-600 hover:text-slate-50 hover:scale-110 ease-in-out duration-300">
                <h1>More Details</h1>
              </button>
            </Link>
          </div>
        </div>

        <div className="group bg-slate-50 p-2 rounded-lg w-fit h-fit">
          <div
            style={{
              backgroundImage: `url(${img_service03})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-80 h-52 rounded-lg m-2 py-3 opacity-50 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center flex-col"
          ></div>
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-slate-800 text-lg font-semibold m-0.5">
              Scripting (Dynamo + Python + C#)
            </h1>
            <Link to="/scripting">
              <button className="text-center w-fit bg-[#ff7a7a] rounded-lg p-3 hover:bg-slate-600 hover:text-slate-50 hover:scale-110 ease-in-out duration-300">
                <h1>More Details</h1>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
