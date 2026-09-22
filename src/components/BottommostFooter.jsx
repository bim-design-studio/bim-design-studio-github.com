import React from "react";

export default function BottommostFooter() {
  return (
    <div className="bg-slate-800 text-center">
      <div className="w-full h-0.5 bg-slate-50"></div>
      <div className="text-slate-100">
        <span className="font-thin">© Copyright 2025</span>
        <span className="font-bold"> BIM Design Studio</span>
      </div>
      <div>
        <span className="font-thin text-slate-100 text-xs">Designed by</span>
        <span className="font-bold text-slate-500 text-xs"> Dikesh Shrestha</span>
      </div>
    </div>
  );
}
