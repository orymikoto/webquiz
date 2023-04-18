import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import Deskripsi from './Deskripsi';
import Tutorial from './Tutorial';

export default function HowToPlay({ controller }) {
  return (
    <div className="flex flex-col z-10 items-center justify-center w-full h-screen absolute bg-black/50">
      <div className="flex flex-col w-[40rem] bg-gradient-to-tr from-amber-500/75 to-rose-700/75 rounded-lg h-[25rem] relative">
        <div
          onClick={() => controller(false)}
          className="top-2 right-2 absolute hover:bg-white/25 rounded-md duration-200">
          <RxCross2 className="text-white w-8 h-8 cursor-pointer " />
        </div>
        <Tutorial />
      </div>
    </div>
  );
}
