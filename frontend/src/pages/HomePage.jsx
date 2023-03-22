import React from 'react';
import LeaderboardBar from '../components/LeaderboardBar';
import NavigationBar from '../components/NavigationBar';

export default function HomePage() {
  return (
    <div className="w-full bg-sky-400  bg-cover min-h-full py-4  ">
      <NavigationBar />
      <div className="flex items-center justify-center">
        <div className="w-[90vw] h-[90vh] text-white rounded-3xl flex ">
          <LeaderboardBar />
          <div></div>
        </div>
      </div>
    </div>
  );
}
