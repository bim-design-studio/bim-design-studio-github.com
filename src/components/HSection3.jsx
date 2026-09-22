import React, { useState } from "react";
import { FaRegPlusSquare, FaRegMinusSquare } from "react-icons/fa";

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-slate-500 p-3 rounded-lg my-4 overflow-hidden">
      <div 
        className="flex justify-between items-center cursor-pointer select-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="font-bold text-slate-50">{question}</h2>
        <div className="text-xl text-slate-50 ml-2">
          {/* Icons toggle based on state */}
          {isOpen ? <FaRegMinusSquare /> : <FaRegPlusSquare />}
        </div>
      </div>
      
      {/* 
          ANIMATION WRAPPER 
          - grid-template-rows: 0fr (closed) vs 1fr (open) creates the height transition
          - duration-500 makes it slow and smooth
      */}
      <div 
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen 
          ? "grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-slate-400" 
          : "grid-rows-[0fr] opacity-0 mt-0 pt-0 border-t-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-slate-100 italic leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function HSection3() {
  const leftColumnFaqs = [
    { q: "What is BIM?", a: "Building Information Modeling (BIM) is a digital process that creates 3D models integrated with detailed information about the architecture, structure, and MEP systems of a building." },
    { q: "Who can benefit from BIM?", a: "BIM is valuable for architects, engineers, contractors, and facility managers involved in any stage of a building’s lifecycle." },
    { q: "What’s the difference between 3D CAD and BIM?", a: "While 3D CAD focuses on drawings, BIM integrates materials, costs, and timelines for lifecycle management." },
    { q: "Can BIM be used for renovation projects?", a: "Yes, BIM is highly beneficial for renovation, especially when combined with point cloud data for accuracy." },
    { q: "How does BIM support sustainability?", a: "BIM enables energy analysis and efficient material use, reducing waste and improving performance." },
    { q: "How does clash detection in BIM work?", a: "It identifies conflicts (like pipes hitting beams) early in design, saving time and money." }
  ];

  const rightColumnFaqs = [
    { q: "Can BIM be used after construction?", a: "Yes, it provides a digital twin used for operations, maintenance, and eventual renovations." },
    { q: "What is a BIM Execution Plan (BEP)?", a: "A BEP outlines specific BIM strategies, roles, and responsibilities for all stakeholders." },
    { q: "Are there industry standards for BIM?", a: "Yes, standards like ISO 19650 provide guidelines for data management and collaboration." },
    { q: "How does BIM improve communication?", a: "BIM centralizes data in a shared model, allowing real-time updates and reducing errors." },
    { q: "What’s the difference between 4D, 5D, and 6D BIM?", a: "4D adds time (scheduling), 5D adds cost (budgeting), and 6D adds sustainability data." },
    { q: "Is BIM only for architects?", a: "No, it is used by structural/MEP engineers, contractors, and facility managers." }
  ];

  return (
    <div className="flex flex-col items-center bg-slate-200 py-10">
      <h1 className="font-bold text-slate-700 text-3xl p-5 mb-5">FAQs</h1>
      
      <div className="w-11/12 md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-x-8">
        <div className="flex flex-col">
          {leftColumnFaqs.map((faq, index) => (
            <AccordionItem key={index} question={faq.q} answer={faq.a} />
          ))}
        </div>
        <div className="flex flex-col">
          {rightColumnFaqs.map((faq, index) => (
            <AccordionItem key={index} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </div>
  );
}