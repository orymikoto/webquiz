import React from 'react';
import NavigationBar from '../components/NavigationBar';

export default function HomePage() {
  return (
    <div className="w-full bg-sky-400  bg-cover h-[100vh]">
      <NavigationBar />
      <div className="flex items-center justify-center">
        <div className="w-[80%] h-[90vh] text-white backdrop-blur-sm rounded-3xl">Hallo</div>
      </div>
    </div>
  );
}
