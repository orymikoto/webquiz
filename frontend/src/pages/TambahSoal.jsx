import React, { useEffect, useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import axios from 'axios';

export default function TambahSoal() {
  const [Scoreboard, setScoreboard] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/api/score').then((res) => {
      setScoreboard(res.data.data);
    });
  });
  return (
    <div className="w-full h-screen bg-gradient-to-tr from-rose-50 to-amber-300 overflow-y-hidden">
      <NavigationBar Score={Scoreboard} />
      <div className="flex justify-center relative w-full h-full ">
        <div className="absolute w-[30rem] h-[30rem] my-12 rounded-2xl flex flex-col justify-end bg-white/50 backdrop-blur-md drop-shadow-xl overflow-hidden">
          <div className="h-[28rem] bg-gradient-to-b from-rose-500/60 to-amber-500/60 rounded-2xl items-center flex flex-col">
            <div className=" text-white my-4">
              <h1 className=" text-2xl ">Tambah Soal</h1>
            </div>
            <div className=" flex flex-col self-start px-8 my-2 text-white w-full ">
              <p>Jenis Soal</p>
              <select
                id="question"
                className="outline-none rounded-md bg-white/50 py-1 text-neutral-700 ">
                <option selected> Pilih Jenis Soal </option>
                <option value="Indonesia">Indonesia</option>
                <option value="English">English</option>
              </select>
            </div>
            <div className="flex flex-col self-start px-8 my-2 text-white w-full ">
              <p>Question</p>
              <input className="outline-none rounded-md bg-white/50 py-1 text-neutral-700 px-1 " />
            </div>
            <div className="flex justify-between gap-x-2 w-full px-8">
              <div className="flex flex-col  flex-1 my-2 text-white w-full ">
                <p>Answer</p>
                <input className="outline-none rounded-md bg-white/50 py-1 text-neutral-700 px-1 " />
              </div>
              <div className=" flex flex-col  flex-1 my-2 text-white w-full ">
                <p>Jenis Soal</p>
                <select
                  id="question"
                  className="outline-none rounded-md bg-white/50 py-1 text-neutral-700 ">
                  <option selected> Pilih Jenis Soal </option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="English">English</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
