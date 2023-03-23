import React from 'react';
import LeaderboardBar from '../components/LeaderboardBar';
import NavigationBar from '../components/NavigationBar';

export default function HomePage() {
  return (
    <div className="w-full bg-sky-400  bg-cover min-h-full py-4  ">
      <NavigationBar />
      <div className="flex items-center justify-center">
        <div className="w-[90vw] h-[90vh] text-white rounded-3xl flex items-start ">
          <LeaderboardBar
            list={[
              { name: 'Mikoto', score: 240 },
              { name: 'Mikail', score: 210 },
              { name: 'Mikoto2', score: 190 },
              { name: 'Mikail2', score: 180 },
              { name: 'Mikoto3', score: 155 },
              { name: 'Mikail3', score: 135 }
            ]}
          />
          <div></div>
        </div>
      </div>
    </div>
  );
}
