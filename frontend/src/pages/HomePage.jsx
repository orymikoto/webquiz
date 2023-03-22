import React from 'react';
import NavigationBar from '../components/NavigationBar';

export default function HomePage() {
  return (
    <div className="w-full bg-sky-400  bg-cover min-h-full py-4  ">
      <NavigationBar />
      <div className="flex items-center justify-center">
        <div className="w-[90vw] h-[90vh] text-white backdrop-blur-sm rounded-3xl "></div>
      </div>
    </div>
  );
}
