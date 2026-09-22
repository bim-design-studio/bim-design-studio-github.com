import { Link } from "react-router-dom";
import Presentation from "../assets/Graphics/presentation.png";
import Documentation from "../assets/Graphics/documentation.png";
import FamilyCreation from "../assets/Graphics/family-creation.png";
import Automation from "../assets/Graphics/automation.png";
import Collaboration from "../assets/Graphics/collaboration.png";

export default function HSection2() {
  return (
    <div className="flex justify-center items-center flex-col bg-slate-400 p-5">
      <p className="font-bold text-slate-700 text-2xl p-5">Explore Contents</p>
      <div className="flex-col sm:flex">
        <div className="sm:flex sm:justify-center sm:items-center">
          <div className="flex flex-col justify-center items-center bg-slate-200 w-48 p-3 rounded-lg m-2">
            <Link to="">
              <img
                src={Presentation}
                alt=""
                width="100"
                className="hover:scale-110 ease-in-out duration-300"
              />
            </Link>
            <h1 className="font-medium text-slate-600">BIM Presentation</h1>
          </div>
          <div className="flex flex-col justify-center items-center bg-slate-200 w-48 p-3 rounded-lg m-2">
            <Link to="">
              <img
                src={Documentation}
                alt=""
                width="100"
                className="hover:scale-110 ease-in-out duration-300"
              />
            </Link>
            <h1 className="font-medium text-slate-600">BIM Documentation</h1>
          </div>
          <div className="flex flex-col justify-center items-center bg-slate-200 w-48 p-3 rounded-lg m-2">
            <Link to="">
              <img
                src={FamilyCreation}
                alt=""
                width="100"
                className="hover:scale-110 ease-in-out duration-300"
              />
            </Link>
            <h1 className="font-medium text-slate-600">
              Revit Family Creation
            </h1>
          </div>
        </div>
        <div className="sm:flex sm:justify-center sm:items-center">
          <div className="flex flex-col justify-center items-center bg-slate-200 w-48 p-3 rounded-lg m-2">
            <Link to="">
              <img
                src={Automation}
                alt=""
                width="100"
                className="hover:scale-110 ease-in-out duration-300"
              />
            </Link>
            <h1 className="font-medium text-slate-600">BIM Automation</h1>
          </div>
          <div className="flex flex-col justify-center items-center bg-slate-200 w-48 p-3 rounded-lg m-2">
            <Link to="">
              <img
                src={Collaboration}
                alt=""
                width="100"
                className="hover:scale-110 ease-in-out duration-300"
              />
            </Link>
            <h1 className="font-medium text-slate-600">BIM Collaboration</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
