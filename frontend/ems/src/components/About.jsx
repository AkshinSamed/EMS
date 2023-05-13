import React from 'react';

const About = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="text-gray-500 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis justo ac est fermentum sollicitudin vel vel lorem. Aenean posuere eros augue, nec ullamcorper eros hendrerit sit amet.</p>
        <div className="flex">
          <div className="w-1/2 p-4">
            <h2 className="text-xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis justo ac est fermentum sollicitudin vel vel lorem. Aenean posuere eros augue, nec ullamcorper eros hendrerit sit amet.</p>
          </div>
          <div className="w-1/2 p-4">
            <h2 className="text-xl font-bold mb-4">Our Team</h2>
            <div className="flex">
              <div className="w-1/3">
                <img className="rounded-full h-24 w-24 object-cover" src="https://unsplash.com/photos/lSXpV8bDeMA" alt="Person 1" />
                <p className="text-gray-500 mt-2">Kaizen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
