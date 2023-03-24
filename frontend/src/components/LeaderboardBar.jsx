import React from 'react';

export default function LeaderboardBar({ list = [{ name: '', score: 0 }] }) {
  return (
    <div className="bg-white shadow-md flex flex-col rounded-lg p-4 gap-y-2">
      {list.map((e, i) => (
        <div
          className={`flex items-center h-8 text-neutral-900 text-lg gap-x-2 px-2 rounded-md ${
            i % 2 == 0 ? 'bg-neutral-200' : 'bg-neutral-100'
          } `}>
          <p className="font-bold text-amber-400 ">{i + 1}</p>
          <p className=" font-light text-neutral-600 w-24">{e.name}</p>
          <p className=" ">{e.score}</p>
        </div>
      ))}
    </div>
  );
}
