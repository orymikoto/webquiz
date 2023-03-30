import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function () {
  const [Showscoreboard, setShowscoreboard] = useState(false);
  return (
    <div className="flex w-[90vw]  justify-between px-4  items-center mx-auto py-4">
      <div className="flex font-medium text-white gap-x-2 items-center text-2xl">
        <div className="min-w-[2.5rem] min-h-[2.5rem] bg-cover bg-[url('/logo.png')]"></div>
        <h2 className="md:inline-block hidden">Language Quiz Web App</h2>
      </div>
      <div className="flex gap-x-4">
        <Link
          to={'/'}
          className="sm:inline-block hidden  rounded-2xl text-center py-1 font-medium text-white cursor-pointer duration-200 hover:text-rose-400">
          Home
        </Link>
        <div
          onClick={() => {
            setShowscoreboard(!Showscoreboard);
          }}
          className="sm:inline-block hidden rounded-2xl text-center py-1 font-medium text-white cursor-pointer duration-200 hover:text-rose-400">
          Scoreboard
        </div>
        <Link
          to={'/quiz/indonesia-english'}
          className="bg-rose-600 rounded-2xl text-center py-1 w-[7rem] font-medium text-white cursor-pointer duration-200 hover:bg-rose-700">
          Start Quiz
        </Link>
      </div>
      {Showscoreboard ? (
        <div className="absolute w-64 h-80 top-20 right-6 bg-white rounded-lg z-20"></div>
      ) : // <LeaderboardBar
      //   list={[
      //     { name: 'Mikoto', score: 240 },
      //     { name: 'Mikail', score: 210 },
      //     { name: 'Mikoto2', score: 190 },
      //     { name: 'Mikail2', score: 180 },
      //     { name: 'Mikoto3', score: 155 },
      //     { name: 'Mikail3', score: 135 }
      //   ]}
      // />
      null}
    </div>
  );
}
