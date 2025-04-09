import React from 'react';

function About() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We are passionate about delivering exceptional experiences and quality products
            to our customers. Our journey began with a simple idea: to create something
            meaningful that would make a difference in people's lives.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Today, we continue to grow and evolve, always staying true to our core values
            of excellence, integrity, and innovation. Our dedicated team works tirelessly
            to ensure that every interaction with our brand exceeds expectations.
          </p>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
            alt="Team collaboration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default About;