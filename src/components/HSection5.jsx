import { Link } from "react-router-dom";

export default function HSection5() {
  return (
    <div className="flex bg-slate-400 px-12 justify-between items-center flex-col pb-8">
      <h1 className="font-bold text-slate-700 text-2xl p-5">
        Architectural Products
      </h1>
      <p className="w-full sm:w-full font-semibold text-slate-500 my-5 text-center">
        Disclaimer: There are the links on this website that can be defined as
        Affiliate Links.
      </p>
      <div className="flex-col gap-3">
        <div className="flex flex-col justify-center items-center bg-slate-200 w-60 p-3 mb-3 rounded-lg">
          <img
            src="https://img.drz.lazcdn.com/static/np/p/b85bc9cc8e8960bed689cd6c1f16cbcd.jpg_720x720q80.jpg_.webp"
            alt=""
          />
          <p className="font-bold text-slate-800 m-2">Rs. 124,900</p>
          <a
            href="https://s.daraz.com.np/s.eo0w?cc"
            target="_blank"
            rel="noreferrer"
          >
            <button className="text-center w-fit bg-[#ff7a7a] rounded-lg p-3 hover:bg-slate-600 hover:text-slate-50 hover:scale-110 ease-in-out duration-300">
              <h1>Buy Now</h1>
            </button>
          </a>
        </div>
        <div className="flex flex-col justify-center items-center bg-slate-200 w-60 p-3 mb-3 rounded-lg">
          <img
            src="https://img.drz.lazcdn.com/static/np/p/4116e6634662d9e9de05b60ef9a76702.jpg_720x720q80.jpg_.webp"
            alt=""
          />
          <p className="font-bold text-slate-800 m-2">Rs. 3,499</p>
          <a
            href="https://s.daraz.com.np/s.eoYs?cc"
            target="_blank"
            rel="noreferrer"
          >
            <button className="text-center w-fit bg-[#ff7a7a] rounded-lg p-3 hover:bg-slate-600 hover:text-slate-50 hover:scale-110 ease-in-out duration-300">
              <h1>Buy Now</h1>
            </button>
          </a>
        </div>
        <div className="flex flex-col justify-center items-center bg-slate-200 w-60 p-3 mb-3 rounded-lg">
          <img
            src="https://img.drz.lazcdn.com/static/np/p/6086484edbded31e8f2c202f86b04325.jpg_720x720q80.jpg_.webp"
            alt=""
          />
          <p className="font-bold text-slate-800 m-2">Rs. 3,699</p>
          <a
            href="https://s.daraz.com.np/s.eo12?cc"
            target="_blank"
            rel="noreferrer"
          >
            <button className="text-center w-fit bg-[#ff7a7a] rounded-lg p-3 hover:bg-slate-600 hover:text-slate-50 hover:scale-110 ease-in-out duration-300">
              <h1>Buy Now</h1>
            </button>
          </a>
        </div>
        <div className="flex flex-col justify-center items-center bg-slate-200 w-60 p-3 mb-3 rounded-lg">
          <img
            src="https://img.drz.lazcdn.com/static/np/p/7c471a2338c5d634804d2e7ed00c9cac.jpg_720x720q80.jpg_.webp"
            alt=""
          />
          <p className="font-bold text-slate-800 m-2">Rs. 4,499</p>
          <a
            href="https://s.daraz.com.np/s.eo1g?cc"
            target="_blank"
            rel="noreferrer"
          >
            <button className="text-center w-fit bg-[#ff7a7a] rounded-lg p-3 hover:bg-slate-600 hover:text-slate-50 hover:scale-110 ease-in-out duration-300">
              <h1>Buy Now</h1>
            </button>
          </a>
        </div>
        <div className="flex flex-col justify-center items-center bg-slate-200 w-60 p-3 mb-3 rounded-lg">
          <img
            src="https://img.drz.lazcdn.com/static/np/p/179392b5ff6fa463748e0a38d841a451.jpg_720x720q80.jpg_.webp"
            alt=""
          />
          <p className="font-bold text-slate-800 m-2">Rs. 62,999</p>
          <a
            href="https://s.daraz.com.np/s.eo1l?cc"
            target="_blank"
            rel="noreferrer"
          >
            <button className="text-center w-fit bg-[#ff7a7a] rounded-lg p-3 hover:bg-slate-600 hover:text-slate-50 hover:scale-110 ease-in-out duration-300">
              <h1>Buy Now</h1>
            </button>
          </a>
        </div>
      </div>
      <Link to="marketplace">
        <button className="text-center w-fit bg-fit bg-[#ff7a7a] rounded-lg p-3 hover:bg-slate-600 hover:text-slate-50 hover:scale-110 ease-in-out duration-300 mb-2">
          <h1>Go to Marketplace</h1>
        </button>
      </Link>
    </div>
  );
}
