import React from "react";
import Image from "next/image"; // Import Image component for Next.js (if using Next.js)

const About = () => {
  return (
    <section className="relative bg-[url('/assets/images/bg3.jpg')] bg-cover bg-center bg-no-repeat py-20 px-6 sm:px-16 lg:px-32 font-poppins">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left Section: Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 mb-6 drop-shadow-lg">
            About Us
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Localeventfinder is your ultimate platform for discovering a diverse
            range of local events. From tech meetups to entertainment, we aim to
            connect people with opportunities to learn, network, and have fun.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Whether you're interested in attending a tech talk, joining a
            hackathon, or enjoying a concert, Localeventfinder helps you find
            the best events near you with ease.
          </p>
          <a
            href="#events"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white rounded-full text-lg font-semibold hover:bg-gradient-to-l transition-transform duration-300 hover:scale-105 shadow-md"
          >
            Explore Events Now
          </a>
        </div>

        {/* Right Section: Image */}
        <div className="lg:w-1/2 relative bg-white p-6 rounded-full shadow-2xl transition-transform duration-500 hover:scale-105">
          <Image
            src="/assets/images/main-image.png"
            alt="Event Illustration"
            width={1000}
            height={1000}
            className="w-full h-auto rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
