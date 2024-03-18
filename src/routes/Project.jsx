import React from "react";

const Project = () => {
  return (
    <div class="flex flex-col items-center justify-center h-screen px-4">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Coming Soon</h1>
      <p class="text-gray-600 text-lg mb-8">
        We're working hard to bring you an amazing new website. Stay tuned!
      </p>
      <div class="flex space-x-4">
        <a
          href="#"
          class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full shadow-lg transition duration-300"
        >
          Subscribe
        </a>
        <a
          href="#"
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-full shadow-lg transition duration-300"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Project;
