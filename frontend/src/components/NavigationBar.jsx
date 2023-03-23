import React from 'react';

export default function () {
  return (
    <div className="flex w-[70rem] backdrop-blur-[60px] shadow-xl justify-between rounded-[3rem] px-4 bg-white/20 items-center mx-auto py-4">
      <div className="flex font-medium text-white gap-x-2 items-center text-2xl">
        <div className="w-[2.5rem] h-[2.5rem] bg-cover bg-[url('/logo.png')]"></div>
        <h2>Language Quiz Web App</h2>
      </div>
      <div className="flex gap-x-4">
        <div className="bg-amber-600 rounded-2xl text-center py-1 w-[5rem] font-medium text-white cursor-pointer duration-200 hover:bg-amber-400">
          Home
        </div>
        <div className="bg-amber-600 rounded-2xl text-center py-1 w-[5rem] font-medium text-white cursor-pointer duration-200 hover:bg-amber-400">
          About
        </div>
        <div className="bg-teal-600 rounded-2xl text-center py-1 w-[7rem] font-medium text-white cursor-pointer duration-200 hover:bg-teal-400">
          Start Quiz
        </div>
      </div>
    </div>
  );
}
