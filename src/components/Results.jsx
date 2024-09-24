import React, { useRef, useState, useEffect } from "react";
import Confetti from "react-confetti";
import result from '../assets/result.jpeg'; 
import result3 from '../assets/result3.jpeg'; 
import result5 from '../assets/result5.jpeg'; 
import image4 from "../assets/result4.jpeg"; 
import image5 from "../assets/result7.jpeg"; 
import image6 from "../assets/result13.jpeg";

import { heroBackground } from "../assets";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import StarRating from "./Stars";

// Example profile pictures
import profilePic1 from '../assets/profile1.webp';
import profilePic2 from '../assets/profile2.jfif';
import profilePic3 from '../assets/profile3.webp';  
import image1 from "../assets/result11.jpeg"; 
import image2 from "../assets/result10.jpeg"; 
import image3 from "../assets/result9.jpeg"; 
import profilePic4 from '../assets/profile4.jfif';
import profilePic5 from '../assets/profile5.jfif'; 
import Footer from "./Footer";

const images = [
  { src: result, campaign: 'Youtube Campaign' },
  { src: result3, campaign: 'Spotify Campaign' },
  { src: result5, campaign: 'Spotify Campaign' },
];

const testimonials = [
  { text: "Excellent service and amazing results!", author: "Little Joshua Music", profilePic: profilePic1 },
  { text: "A fantastic exp from start to finish.", author: "Queen Pheena", profilePic: profilePic2 },
  { text: "Recommend for top-notch campaigns!", author: "Chadsflame", profilePic: profilePic3 }, 
  { text: "The results speak for themselves.", author: "Rxchworld", profilePic: profilePic4 }, 
  { text: "A game-changer for marketing strategy!", author: "Treat4real", profilePic: profilePic5 },
];

const duplicatedTestimonials = [...testimonials, ...testimonials];

const ResultPage = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    let intervalId;

    if (container) {
      intervalId = setInterval(() => {
        if (container) {
          const scrollWidth = container.scrollWidth;
          const clientWidth = container.clientWidth;
          const scrollLeft = container.scrollLeft;

          if (scrollLeft + clientWidth >= scrollWidth) {
            container.scrollLeft = 0;
          } else {
            container.scrollLeft += 20;
          }
        }
      }, 10);

      return () => clearInterval(intervalId);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Hide confetti after 5 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen text-white bg-transparent">
      {/* Confetti Animation */}
      {showConfetti && (
        <Confetti 
          width={windowWidth} 
          height={windowHeight} 
          style={{ position: 'fixed', top: 0, left: 0, zIndex: 50 }} 
        />
      )}

      {/* Hero Section */}
      <div className="relative">
        {/* Background Image */}
        <img
          src={heroBackground}
          className="absolute inset-0 w-full h-full object-cover -z-10"
          width={1440}
          height={1800}
          alt="background"
        />
        <BackgroundCircles />

        <div className="relative pt-[8rem] -mt-[5.25rem] bg-transparent">
          <div className="relative w-full p-6 bg-transparent rounded-lg shadow-lg z-10 backdrop-blur-md transform -translate-y-16">
            <h1 className="text-4xl mt-10 font-bold mb-10 text-center">Our  <span className="text-yellow-500">Results</span></h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="bg-transparent mt-8 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 flex flex-col justify-center"
                >
                  <div>
                    <img
                      src={image.src}
                      alt={`Product ${index + 1}`}
                      className="w-full h-[600px] object-cover"
                    />
                  </div>
                  <div className="flex justify-center mt-4">
                    <button className="px-8 mt-4 py-3 bg-gradient-to-r from-[#f83939] to-[#07b8b8] text-white font-semibold rounded-full hover:bg-gradient-to-l transition duration-300 shadow-lg hover:shadow-xl transform hover:translate-y-[-3px] border-2 border-transparent hover:border-white">
                      {image.campaign}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="relative mt-16 px-6 py-12 bg-transparent rounded-lg shadow-lg z-10">
          <h2 className="text-3xl font-bold mb-8 text-center">That's How We Work <span className="text-yellow-500">Strategically</span></h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <div className="w-full md:w-1/3">
              <img src={image1} className="w-full h-auto rounded-lg shadow-md" alt="Strategic Work 1" />
              <p className="text-center text-gray-300 mt-4">Strategic Planning</p>
            </div>
            <div className="w-full md:w-1/3">
              <img src={image2} className="w-full h-auto rounded-lg shadow-md" alt="Strategic Work 2" />
              <p className="text-center text-gray-300 mt-4">Execution & Monitoring</p>
            </div>
            <div className="w-full md:w-1/3">
              <img src={image3} className="w-full h-auto rounded-lg shadow-md" alt="Strategic Work 3" />
              <p className="text-center text-gray-300 mt-4">Results & Optimization</p>
            </div>
          </div>
        </div> 
        <BottomLine />
      </div>

      {/* Testimonials Section */}
      <section className="py-16 bg-transparent">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">What Our <span className="text-yellow-500">Clients </span>Say</h2>
          <div className="relative">
            <div ref={scrollContainerRef} className="flex overflow-x-auto whitespace-nowrap hide-scrollbar">
              {duplicatedTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="testimonial-item border h-[200px] border-gray-600 text-gray-200 p-6 rounded-lg shadow-lg flex flex-col items-center bg-transparent"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.profilePic}
                      alt={`Profile of ${testimonial.author}`}
                      className="w-16 h-16 rounded-full border-2 border-gray-600 object-cover"
                    />
                    <div className="ml-4">
                      <p className="text-xl font-semibold">{testimonial.author}</p>
                    </div>
                  </div>
                  <StarRating rating={5} />
                  <p className="mt-4 text-sm">{testimonial.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div> 
      </section> 
      <Footer/>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .hide-scrollbar {
          overflow: hidden; /* Hide the scrollbar */
          scrollbar-width: none; /* For Firefox */
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* For Chrome, Safari, and Opera */
        }

        .testimonial-item {
          display: inline-block;
          width: 30vw; /* Width for larger screens */
          margin: 0 1rem; /* Margin between items */
          vertical-align: top;
        }

        @media (max-width: 1024px) {
          .testimonial-item {
            width: 88vw; /* Width for smaller screens */
          }
        }
      `}</style>
    </section>
  );
};

export default ResultPage;
