import React from "react";

function About() {
  return (
    <section className="bg-white text-gray-900 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        {/* Nike Logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
          alt="Nike Logo"
          className="mx-auto h-16 mb-6"
        />

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          About <span className="text-black">Nike</span>
        </h1>

        {/* Main Paragraph */}
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10">
          Since its founding in 1964, <span className="font-semibold">Nike</span> has redefined what it means to move the world. 
          Built on innovation, passion, and performance, Nike inspires every athlete — and we believe that{" "}
          <span className="italic font-medium">if you have a body, you are an athlete.</span> From the 
          tracks of Oregon to the global stage, Nike has become a symbol of determination, creativity, 
          and excellence.
        </p>

        {/* Mission Section */}
        <div className="bg-black text-white p-8 rounded-2xl shadow-lg mb-10">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-200 text-lg leading-relaxed">
            To bring inspiration and innovation to every athlete in the world.
            Every product we create is a result of relentless focus on quality, 
            sustainability, and human potential — empowering people to break 
            barriers, push boundaries, and unleash greatness.
          </p>
        </div>

        {/* Global Impact */}
        <div className="text-gray-800">
          <h2 className="text-2xl font-bold mb-4">Global Legacy</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Today, Nike operates in more than 190 countries, partnering with
            world-class athletes and designing groundbreaking technologies
            such as <span className="font-semibold">Nike Air</span>,{" "}
            <span className="font-semibold">Flyknit</span>, and{" "}
            <span className="font-semibold">React Foam</span>.
            Our journey continues — not just to lead the industry, but to 
            redefine the future of sport and sustainability.
          </p>
        </div>

        {/* Footer Logo */}
        <div className="mt-12">
          <img
            src="https://1000logos.net/wp-content/uploads/2017/03/Nike-Logo-1971-now.png"
            alt="Nike Swoosh"
            className="mx-auto h-14 opacity-90"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
