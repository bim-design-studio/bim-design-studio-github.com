import { Link } from "react-router-dom";

export default function Downloads() {
  return (
    <div className="bg-slate-200 text-center pb-10">
      <h1 className="font-bold text-slate-700 text-2xl p-5">Downloads</h1>
      <p className="text-slate-500 my-2 px-4">
        Download our BIM Templates, Revit Contents/Families, and more.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-fit mx-auto px-4">

        <div className="group bg-slate-50 p-2 rounded-lg w-fit h-fit">
          <div
            style={{
              backgroundImage: `url("https://static.chaos.com/images/assets/000/011/316/full_width_original/Vision_video_1280x720.jpg?1604673750")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-80 h-52 rounded-lg m-2 py-3 opacity-50 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center flex-col"
          ></div>
          <div className="flex justify-center items-center flex-col pb-2">
            <h1 className="text-slate-800 text-lg font-semibold m-0.5">
              BIM Templates
            </h1>
            <Link to="/bim-templates">
              <button className="text-center w-fit bg-[#ff7a7a] rounded-lg p-3 hover:bg-slate-600 hover:text-slate-50 hover:scale-110 ease-in-out duration-300">
                <h1>Get Now</h1>
              </button>
            </Link>
          </div>
        </div>

        <div className="group bg-slate-50 p-2 rounded-lg w-fit h-fit">
          <div
            style={{
              backgroundImage: `url("https://static.chaos.com/images/assets/000/011/316/full_width_original/Vision_video_1280x720.jpg?1604673750")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-80 h-52 rounded-lg m-2 py-3 opacity-50 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center flex-col"
          ></div>
          <div className="flex justify-center items-center flex-col pb-2">
            <h1 className="text-slate-800 text-lg font-semibold m-0.5">
              Revit Contents/Families
            </h1>
            <Link to="/revit-contents-families">
              <button className="text-center w-fit bg-[#ff7a7a] rounded-lg p-3 hover:bg-slate-600 hover:text-slate-50 hover:scale-110 ease-in-out duration-300">
                <h1>Get Now</h1>
              </button>
            </Link>
          </div>
        </div>

        <div className="group bg-slate-50 p-2 rounded-lg w-fit h-fit">
          <div
            style={{
              backgroundImage: `url("https://static.chaos.com/images/assets/000/011/316/full_width_original/Vision_video_1280x720.jpg?1604673750")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-80 h-52 rounded-lg m-2 py-3 opacity-50 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center flex-col"
          ></div>
          <div className="flex justify-center items-center flex-col pb-2">
            <h1 className="text-slate-800 text-lg font-semibold m-0.5">
              BIM Courses
            </h1>
            <Link to="/bim-courses">
              <button className="text-center w-fit bg-[#ff7a7a] rounded-lg p-3 hover:bg-slate-600 hover:text-slate-50 hover:scale-110 ease-in-out duration-300">
                <h1>Get Now</h1>
              </button>
            </Link>
          </div>
        </div>

        <div className="group bg-slate-50 p-2 rounded-lg w-fit h-fit">
          <div
            style={{
              backgroundImage: `url("https://static.chaos.com/images/assets/000/011/316/full_width_original/Vision_video_1280x720.jpg?1604673750")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-80 h-52 rounded-lg m-2 py-3 opacity-50 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center flex-col"
          ></div>
          <div className="flex justify-center items-center flex-col pb-2">
            <h1 className="text-slate-800 text-lg font-semibold m-0.5">
              Architectural eBooks
            </h1>
            <Link to="/architectural-ebooks">
              <button className="text-center w-fit bg-[#ff7a7a] rounded-lg p-3 hover:bg-slate-600 hover:text-slate-50 hover:scale-110 ease-in-out duration-300">
                <h1>Get Now</h1>
              </button>
            </Link>
          </div>
        </div>

        <div className="group bg-slate-50 p-2 rounded-lg w-fit h-fit">
          <div
            style={{
              backgroundImage: `url("https://static.chaos.com/images/assets/000/011/316/full_width_original/Vision_video_1280x720.jpg?1604673750")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-80 h-52 rounded-lg m-2 py-3 opacity-50 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center flex-col"
          ></div>
          <div className="flex justify-center items-center flex-col pb-2">
            <h1 className="text-slate-800 text-lg font-semibold m-0.5">
              Architectural Cheat Sheets
            </h1>
            <Link to="/architectural-cheat-sheets">
              <button className="text-center w-fit bg-[#ff7a7a] rounded-lg p-3 hover:bg-slate-600 hover:text-slate-50 hover:scale-110 ease-in-out duration-300">
                <h1>Get Now</h1>
              </button>
            </Link>
          </div>
        </div>

        <div className="group bg-slate-50 p-2 rounded-lg w-fit h-fit">
          <div
            style={{
              backgroundImage: `url("https://static.chaos.com/images/assets/000/011/316/full_width_original/Vision_video_1280x720.jpg?1604673750")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-80 h-52 rounded-lg m-2 py-3 opacity-50 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center flex-col"
          ></div>
          <div className="flex justify-center items-center flex-col pb-2">
            <h1 className="text-slate-800 text-lg font-semibold m-0.5">
              Scripts (Dynamo + Python + C#)
            </h1>
            <Link to="/scripts">
              <button className="text-center w-fit bg-[#ff7a7a] rounded-lg p-3 hover:bg-slate-600 hover:text-slate-50 hover:scale-110 ease-in-out duration-300">
                <h1>Get Now</h1>
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}