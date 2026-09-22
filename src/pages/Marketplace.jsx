import { Link } from "react-router-dom";

export default function Marketplace() {
  return (
    <div className="bg-slate-200 text-center pb-10">
      <h1 className="font-bold text-slate-700 text-2xl p-5">Marketplace</h1>
      <p className="text-slate-500 my-2">
        Find the best products for the architects and engineeers.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-fit mx-auto px-4">

        <div className="group bg-slate-50 p-2 rounded-lg w-fit h-fit">
          <div
            style={{
              backgroundImage: `url("https://img.drz.lazcdn.com/static/np/p/b85bc9cc8e8960bed689cd6c1f16cbcd.jpg_720x720q80.jpg_.webp")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-80 h-52 rounded-lg m-2 py-3 opacity-50 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center flex-col"
          ></div>
          <div className="flex justify-center items-center flex-col pb-2">
            <h1 className="text-slate-800 text-lg font-semibold m-0.5">
              Gaming PC
            </h1>
            <a href="https://s.daraz.com.np/s.eo0w?cc" target="_blank" rel="noopener noreferrer">
              <button className="text-center w-fit bg-[#ff7a7a] rounded-lg p-3 hover:bg-slate-600 hover:text-slate-50 hover:scale-110 ease-in-out duration-300">
                <h1>Buy Now</h1>
              </button>
            </a>
          </div>
        </div>
        
        <div className="group bg-slate-50 p-2 rounded-lg w-fit h-fit">
          <div
            style={{
              backgroundImage: `url("https://img.drz.lazcdn.com/static/np/p/b85bc9cc8e8960bed689cd6c1f16cbcd.jpg_720x720q80.jpg_.webp")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-80 h-52 rounded-lg m-2 py-3 opacity-50 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center flex-col"
          ></div>
          <div className="flex justify-center items-center flex-col pb-2">
            <h1 className="text-slate-800 text-lg font-semibold m-0.5">
              Gaming PC
            </h1>
            <a href="https://s.daraz.com.np/s.eo0w?cc" target="_blank" rel="noopener noreferrer">
              <button className="text-center w-fit bg-[#ff7a7a] rounded-lg p-3 hover:bg-slate-600 hover:text-slate-50 hover:scale-110 ease-in-out duration-300">
                <h1>Buy Now</h1>
              </button>
            </a>
          </div>
        </div>

        <div className="group bg-slate-50 p-2 rounded-lg w-fit h-fit">
          <div
            style={{
              backgroundImage: `url("https://img.drz.lazcdn.com/static/np/p/b85bc9cc8e8960bed689cd6c1f16cbcd.jpg_720x720q80.jpg_.webp")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="w-80 h-52 rounded-lg m-2 py-3 opacity-50 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center flex-col"
          ></div>
          <div className="flex justify-center items-center flex-col pb-2">
            <h1 className="text-slate-800 text-lg font-semibold m-0.5">
              Gaming PC
            </h1>
            <a href="https://s.daraz.com.np/s.eo0w?cc" target="_blank" rel="noopener noreferrer">
              <button className="text-center w-fit bg-[#ff7a7a] rounded-lg p-3 hover:bg-slate-600 hover:text-slate-50 hover:scale-110 ease-in-out duration-300">
                <h1>Buy Now</h1>
              </button>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}