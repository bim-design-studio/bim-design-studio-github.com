import { Link } from "react-router-dom";
import React from 'react';

export default function ArchitecturalAnimation() {
  const slides = [
    {
      src: "https://img.youtube.com/vi/miuY9ftTIG8/maxresdefault.jpg",
      alt: "Architectural Animation sample 1",
      videoId: "miuY9ftTIG8"
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [playingIndex, setPlayingIndex] = React.useState(null);
  const intervalRef = React.useRef(null);

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
    if (playingIndex !== null) return;

    const id = window.setInterval(goToNextSlide, 4000);
    intervalRef.current = id;

    return () => clearInterval(id);
  }, [playingIndex]);

  React.useEffect(() => {
    setPlayingIndex(null);
  }, [currentIndex]);

  const resetAutoPlay = () => {
    window.clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(goToNextSlide, 4000);
  };

  return (
    <div className="bg-slate-200 text-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl shadow-lg px-6 py-8 sm:px-10 sm:py-10 text-left text-center">
        <h1 className="font-bold text-slate-700 text-2xl p-5 text-center">
          Architectural Animation
        </h1>
        <div className="mx-auto w-full max-w-4xl">
          <div className="w-full rounded-lg overflow-hidden bg-slate-100 aspect-video">
            <div
              className="flex h-full transition-transform duration-700 ease-out cursor-grab active:cursor-grabbing"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide, idx) => (
                <div key={idx} className="min-w-full h-full flex-shrink-0 relative">
                  {playingIndex === idx ? (
                    <iframe
                      className="w-full h-full no-drag"
                      onMouseDown={(e) => e.stopPropagation()}
                      onTouchStart={(e) => e.stopPropagation()}
                      src={`https://www.youtube.com/embed/${slide.videoId}?autoplay=1`}
                      title={slide.alt}
                      frameBorder="0"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  ) : (
                    <div
                      className="w-full h-full relative cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setPlayingIndex(idx);
                      }}
                    >
                      <img
                        src={slide.src}
                        alt={slide.alt}
                        className="w-full h-full object-cover select-none"
                        draggable={false}
                      />

                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black bg-opacity-50 rounded-full p-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-10 w-10 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
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
              We provide architectural animation services that turn your designs into engaging, lifelike visual experiences. By transforming drawings and 3D models into smooth, cinematic walkthroughs, we help you showcase how a project will look, feel, and function long before it’s built.
            </p>
            <p>
              Our animations make it easier to communicate ideas clearly and convincingly to clients, investors, and stakeholders. Whether for presentations, marketing, or approvals, we focus on realism and storytelling to bring your architectural vision to life in a way that’s both clear and memorable.
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