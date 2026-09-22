import { Link } from "react-router-dom";
import React from 'react';
import img_design01 from "../assets/design01.jpg";
import img_design02 from "../assets/design02.jpg";
import img_design03 from "../assets/design03.jpg";
import img_design04 from "../assets/design04.jpg";
import img_design05 from "../assets/design05.jpg";
import img_design06 from "../assets/design06.jpg";
import img_design07 from "../assets/design07.jpg";
import img_design08 from "../assets/design08.jpg";
import img_design09 from "../assets/design09.jpg";
import img_design10 from "../assets/design10.jpg";
import img_design11 from "../assets/design11.jpg";
import img_design12 from "../assets/design12.jpg";
import img_design13 from "../assets/design13.jpg";

export default function StructuralBIMModelling() {
  const slides = [
    { src: img_design01, alt: "Architectural Design and BIM Modelling sample 1" },
    { src: img_design02, alt: "Architectural Design and BIM Modelling sample 2" },
    { src: img_design03, alt: "Architectural Design and BIM Modelling sample 3" },
    { src: img_design04, alt: "Architectural Design and BIM Modelling sample 4" },
    { src: img_design05, alt: "Architectural Design and BIM Modelling sample 5" },
    { src: img_design06, alt: "Architectural Design and BIM Modelling sample 6" },
    { src: img_design07, alt: "Architectural Design and BIM Modelling sample 7" },
    { src: img_design08, alt: "Architectural Design and BIM Modelling sample 8" },
    { src: img_design09, alt: "Architectural Design and BIM Modelling sample 9" },
    { src: img_design10, alt: "Architectural Design and BIM Modelling sample 10" },
    { src: img_design11, alt: "Architectural Design and BIM Modelling sample 11" },
    { src: img_design12, alt: "Architectural Design and BIM Modelling sample 12" },
    { src: img_design13, alt: "Architectural Design and BIM Modelling sample 13" },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const intervalRef = React.useRef(null);
  const touchStartX = React.useRef(0);
  const touchEndX = React.useRef(0);
  const minSwipeDistance = 50;
  const mouseStartX = React.useRef(0);
  const mouseEndX = React.useRef(0);
  const isDragging = React.useRef(false);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    mouseStartX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    mouseEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;

    const distance = mouseStartX.current - mouseEndX.current;

    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        goToNextSlide();
      } else {
        goToPreviousSlide();
      }
      resetAutoPlay();
    }

    isDragging.current = false;
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  React.useEffect(() => {
    intervalRef.current = window.setInterval(goToNextSlide, 4000);
    return () => window.clearInterval(intervalRef.current);
  }, []);

  const resetAutoPlay = () => {
    window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(goToNextSlide, 4000);
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        goToNextSlide();
      } else {
        goToPreviousSlide();
      }
      resetAutoPlay();
    }
  };

  return (
    <div className="bg-slate-200 text-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-lg px-6 py-8 sm:px-10 sm:py-10 text-left text-center">
        <h1 className="font-bold text-slate-700 text-2xl p-5 text-center">
          Structural BIM Modelling
        </h1>
        <div className="mx-auto w-full max-w-4xl">
          <div className="w-full rounded-lg overflow-hidden bg-slate-100 aspect-video">
            <div
              className="flex h-full transition-transform duration-700 ease-out cursor-grab active:cursor-grabbing"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {slides.map((slide, idx) => (
                <div key={idx} className="min-w-full h-full flex-shrink-0 relative">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-full object-cover pointer-events-none select-none"
                    draggable={false}
                  />
                  <div className="absolute inset-0" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  goToSlide(idx);
                  resetAutoPlay();
                }}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${idx === currentIndex ? 'bg-slate-800' : 'bg-slate-400 hover:bg-slate-600'
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <div className="mx-auto w-full max-w-4xl mt-6 space-y-4 text-slate-500 text-justify">
            <p>
              We provide architectural design services focused on creating spaces that reflect how you want to live, work, and feel. By carefully listening to your needs, we transform your ideas into functional, beautiful designs that are uniquely yours, from the initial concept to the smallest detail.
            </p>
            <p>
              Using Building Information Modelling (BIM), we offer a clear 3D view of your project before construction begins, helping you visualize the final result. BIM also ensures better coordination behind the scenes, reducing surprises and making the entire process smoother and more efficient.
            </p>
          </div>
          <div className="flex justify-center mt-6">
            <Link to="/contact">
              <button className="text-center w-fit bg-[#ff7a7a] rounded-lg p-3 hover:bg-slate-600 hover:text-slate-50 hover:scale-110 ease-in-out duration-300">
                <h1>Contact Us</h1>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}