import HomeImg from "../assets/homeimg.png";
import { Link } from "react-router-dom";

export default function HSection1() {
  return (
    <div className="h-fit bg-slate-200 py-5 px-12 sm:h-screen sm:flex sm:justify-between sm:items-center">
      <div className="w-full">
        <h1 className="text-3xl pt-5 font-bold font-serif text-slate-700 md:text-5xl">
          Learn BIM and Revit
        </h1>
        <p className="font-semibold text-slate-500 my-5">
          Revit is not just a 3D modeling software, but it is a platform for the
          BIM (Building Information Modeling). If you want to develop a complete
          understanding of how this operates and become more powerful, creative
          and efficient in a fast paced world,
        </p>
        <Link to="https://www.youtube.com/@BIM_Design_Studio">
          <button className="text-center w-fit bg-[#ff7a7a] rounded-lg p-3 hover:bg-slate-600 hover:text-slate-50 hover:scale-110 ease-in-out duration-300">
            <span>Click Here</span>
          </button>
        </Link>
      </div>
      <div className="w-full">
        <img src={HomeImg} alt="" width="500" />
      </div>
    </div>
  );
}
