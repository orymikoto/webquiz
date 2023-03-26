import React from 'react';
import HealthBar from '../components/HealthBar';

export default function QuizPage({ nomor, soal }) {
  return (
    <div className="bg-gradient-to-tr from-rose-50 to-amber-200 w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="absolute w-[35rem] h-[35rem] rounded-2xl flex flex-col justify-end bg-white/50 backdrop-blur-md drop-shadow-xl  ">
        <div className="h-[33rem] bg-gradient-to-b from-rose-500/60 to-amber-500/60 rounded-2xl">
          <HealthBar />
          <div className="my-8 w-[35rem] h-[20rem] text-xl text-white text-center flex flex-col items-center ">
            <div className="px-4 py-1 bg-teal-600 rounded-full">
              <h1>Translate to English</h1>
            </div>
            <p className="text-3xl font-thin my-12">Kipas Angin</p>
            <div className="flex items-center justify-center gap-x-2">
              <div className=" px-2 py-1 bg-white/25 from-white/25 to-white/25 rounded-full backdrop-blur-sm w-[15rem] hover:bg-gradient-to-br hover:from-teal-400 hover:to-blue-700 cursor-pointer  ">
                Electric Fan
              </div>
              <div className=" px-2 py-1 bg-white/25 from-white/25 to-white/25 rounded-full backdrop-blur-sm w-[15rem] hover:bg-gradient-to-br hover:from-teal-400 hover:to-blue-700 cursor-pointer  ">
                Fryer
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
