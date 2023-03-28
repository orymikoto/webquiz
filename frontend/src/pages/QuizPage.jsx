import React, { useState } from 'react';
import HealthBar from '../components/HealthBar';
import Countdown from 'react-countdown';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { IoCheckmarkSharp } from 'react-icons/io5';

export default function QuizPage() {
  const [Answer, setAnswer] = useState(null);

  const Timeup = () => <p className="text-xl font-medium text-white my-7">Your Time is up!</p>;

  const renderer = ({ seconds, completed }) => {
    if (completed) {
      return <Timeup className=" my-7 " />;
    } else {
      return (
        <div className="flex flex-col my-6">
          <p className="text-lg text-white font-light my-0">Countdown!</p>
          <p className="text-4xl text-white font-semibold my-0">{seconds}</p>
        </div>
      );
    }
  };

  const question = ['Kipas Angin', 'Piring', 'Wajan', 'Tas'];

  const pilihJawaban = (answer) => {
    console.log(answer);
    if (answer) {
      setAnswer(0);
    } else {
      setAnswer(1);
    }
  };

  return (
    <div className="bg-gradient-to-tr from-rose-50 to-amber-200 w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="absolute w-[35rem] h-[35rem] rounded-2xl flex flex-col justify-end bg-white/50 backdrop-blur-md drop-shadow-xl ">
        <div className="h-[33rem] bg-gradient-to-b from-rose-500/60 to-amber-500/60 rounded-2xl">
          <HealthBar />
          <div className="my-8 w-[35rem] h-[20rem] text-xl text-white text-center flex flex-col items-center ">
            <div className="px-4 py-1 bg-teal-600 rounded-full">
              <h1>Translate to English</h1>
            </div>
            <p className="text-3xl font-thin my-12">Kipas Angin</p>
            <div className="flex items-center justify-center gap-x-2">
              <div
                onClick={() => pilihJawaban(true)}
                className=" px-2 py-1 bg-white/25 from-white/25 to-white/25 rounded-full backdrop-blur-sm w-[15rem] hover:bg-gradient-to-br hover:from-teal-400 hover:to-blue-700 cursor-pointer">
                Electric Fan
              </div>
              <div
                onClick={() => pilihJawaban(false)}
                className=" px-2 py-1 bg-white/25 from-white/25 to-white/25 rounded-full backdrop-blur-sm w-[15rem] hover:bg-gradient-to-br hover:from-teal-400 hover:to-blue-700 cursor-pointer">
                Fryer
              </div>
            </div>
            <div className=" w-[15rem] h-[5rem] flex items-center justify-center ">
              {Answer == null ? <Countdown date={Date.now() + 15000} renderer={renderer} /> : null}
            </div>
            {Answer == 1 ? (
              <div className=" text-white flex flex-col items-center w-[15rem] justify-center ">
                <AiOutlineCheckCircle className="w-12 h-12 text-emerald-600 " />
                <p className=" text-white text-xl font-normal ">Correct Answer!</p>
              </div>
            ) : Answer == 0 ? (
              <div className=" text-white flex flex-col items-center w-[15rem] justify-center ">
                <AiOutlineCheckCircle className="w-12 h-12 text-red-600 " />
                <p className=" text-white text-xl font-normal ">Wrong Answer!</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
