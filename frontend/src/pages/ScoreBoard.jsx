import React from 'react';
import NavigationBar from '../components/NavigationBar';

export default function ScoreBoard() {
  return (
    <div className="w-full h-screen bg-gradient-to-tr  from-rose-50 to-amber-300">
      <NavigationBar />
      <div className="w-full mt-8 flex flex-col items-center justify-center">
        <h1 className="text-rose-600 font-bebasneue text-3xl">SCOREBOARD</h1>
        <table className="table-auto w-[30rem] bg-white/50 text-rose-600 font-comforta overflow-hidden">
          <thead>
            <tr className=" h-8 ">
              <th className="border border-rose-600 ">Nomor</th>
              <th className="border border-rose-600 ">Nama</th>
              <th className="border border-rose-600 ">Score</th>
              <th className="border border-rose-600 ">Waktu Submit</th>
            </tr>
          </thead>
          <tbody>
            <tr className="h-8">
              <td className="border border-rose-600 text-center">1</td>
              <td className="border border-rose-600 text-center">Mikoto</td>
              <td className="border border-rose-600 text-center">270</td>
              <td className="border border-rose-600 text-center">2023-03-27 18:30:00</td>
            </tr>
            <tr className="h-8">
              <td className="border border-rose-600 text-center">2</td>
              <td className="border border-rose-600 text-center">Mikoto</td>
              <td className="border border-rose-600 text-center">270</td>
              <td className="border border-rose-600 text-center">2023-03-27 18:30:00</td>
            </tr>
            <tr className="h-8">
              <td className="border border-rose-600 text-center">3</td>
              <td className="border border-rose-600 text-center">Mikoto</td>
              <td className="border border-rose-600 text-center">270</td>
              <td className="border border-rose-600 text-center">2023-03-27 18:30:00</td>
            </tr>
            <tr className="h-8">
              <td className="border border-rose-600 text-center">4</td>
              <td className="border border-rose-600 text-center">Mikoto</td>
              <td className="border border-rose-600 text-center">270</td>
              <td className="border border-rose-600 text-center">2023-03-27 18:30:00</td>
            </tr>
            <tr className="h-8">
              <td className="border border-rose-600 text-center">5</td>
              <td className="border border-rose-600 text-center">Mikoto</td>
              <td className="border border-rose-600 text-center">270</td>
              <td className="border border-rose-600 text-center">2023-03-27 18:30:00</td>
            </tr>
            <tr className="h-8">
              <td className="border border-rose-600 text-center">6</td>
              <td className="border border-rose-600 text-center">Mikoto</td>
              <td className="border border-rose-600 text-center">270</td>
              <td className="border border-rose-600 text-center">2023-03-27 18:30:00</td>
            </tr>
            <tr className="h-8">
              <td className="border border-rose-600 text-center">7</td>
              <td className="border border-rose-600 text-center">Mikoto</td>
              <td className="border border-rose-600 text-center">270</td>
              <td className="border border-rose-600 text-center">2023-03-27 18:30:00</td>
            </tr>
            <tr className="h-8">
              <td className="border border-rose-600 text-center">8</td>
              <td className="border border-rose-600 text-center">Mikoto</td>
              <td className="border border-rose-600 text-center">270</td>
              <td className="border border-rose-600 text-center">2023-03-27 18:30:00</td>
            </tr>
            <tr className="h-8">
              <td className="border border-rose-600 text-center">9</td>
              <td className="border border-rose-600 text-center">Mikoto</td>
              <td className="border border-rose-600 text-center">270</td>
              <td className="border border-rose-600 text-center">2023-03-27 18:30:00</td>
            </tr>
            <tr className="h-8">
              <td className="border border-rose-600 text-center">10</td>
              <td className="border border-rose-600 text-center">Mikoto</td>
              <td className="border border-rose-600 text-center">270</td>
              <td className="border border-rose-600 text-center">2023-03-27 18:30:00</td>
            </tr>
          </tbody>
        </table>
        <div className="flex my-4 rounded-full bg-white/50 overflow-hidden">
          <div className="hover:bg-rose-600 duration-200 font-comforta font-semibold px-4 py-1 cursor-pointer text-rose-600 hover:text-white flex-1">
            prev
          </div>
          <div className="hover:bg-rose-600 duration-200 font-comforta font-semibold px-4 py-1 cursor-pointer text-rose-600 hover:text-white flex-1">
            next
          </div>
        </div>
      </div>
    </div>
  );
}
