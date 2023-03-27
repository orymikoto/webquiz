import React, { useState } from 'react';
import HealthBar from '../components/HealthBar';
import Countdown from 'react-countdown';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { IoCheckmarkSharp } from 'react-icons/io5';

export default function QuizPage() {
  // Variable untuk menyimpan kebenaran jawaban
  const [Answer, setAnswer] = useState(null);

  // Variable untuk mengecek apakah soal sudah terjawab atau belum
  const [Finish, setFinish] = useState(false);

  // Variable untuk mentrack nomor soal
  const [Soal, setSoal] = useState(0);

  // Variable untuk mencatat sisa nyawa yang dimiliki oleh pengguna
  const [Lives, setLives] = useState(3);

  // Variable untuk menyimpan Skor
  const [Score, setScore] = useState(0);

  // Variable untuk mengecek apakah soal sudah sampai terakhir atau belum
  const [Completed, setCompleted] = useState(false);

  // Variable fungsi untuk mereturn tag paragraf apabila waktu untuk menjawab soal telah habis
  const Timeup = () => <p className="text-xl font-medium text-white my-7">Your Time is up!</p>;

  // Fungsi miik Countdown, untuk menampilkan waktu hitung mundur soal, dan menampilkan fungsi Timeup bila sudah habis
  const renderer = ({ seconds, completed }) => {
    // Jika Countdown / waktu soal habis
    if (completed) {
      setAnswer(1);
      setFinish(true);
      setSoal(Soal + 1);
      setLives(Lives - 1);
      return <Timeup className=" my-7 " />;
    }

    // Jika belum selesai maka ditampilkan sisa waktu berupa detikannya
    else {
      return (
        <div className="flex flex-col my-6">
          <p className="text-lg text-white font-light my-0">Countdown!</p>
          <p className="text-4xl text-white font-semibold my-0">{seconds}</p>
        </div>
      );
    }
  };

  // Fungsi untuk mengecek apakah soal yang terakhir sudah terjawab
  const isLastSoal = () => {
    if (Soal == question.length) {
      setCompleted(true);
    }
  };

  // Untuk menyimpan data Soal yang akan ditampilkan
  const question = [
    {
      question: 'Kipas Angin',
      a: { answer: 'Electric Fan', correct: true },
      b: { answer: 'Fryer', correct: false }
    },
    {
      question: 'Sepeda Motor',
      a: { answer: 'Motorcycle', correct: true },
      b: { answer: 'Speed Boat', correct: false }
    },
    {
      question: 'Piring',
      a: { answer: 'Bowl', correct: false },
      b: { answer: 'Plate', correct: true }
    },
    {
      question: 'Dompet',
      a: { answer: 'Pocket', correct: false },
      b: { answer: 'Wallet', correct: true }
    }
  ];

  // Fungsi untuk mengecek apakah jawaban yang diberikan benar atau salah
  const pilihJawaban = (answer) => {
    console.log(answer);

    // jika soal yang dipilih adalah benar
    if (answer) {
      setAnswer(0); // Mengubah Answer menjadi 0 yang bertujuan untuk menampilkan pesan benar
      setFinish(true); // Mengubah Finish menjadi true sehingga tombol untuk next ke soal berikutnya dapat ditampilkan
      setSoal(Soal + 1); // Mentrack nomor soal menjadi +1
      setScore(Score + 10); // Menambahkan Score pengguna
    } else {
      setAnswer(1); // Mengubah Answer menjadi 0 yang bertujuan untuk menampilkan pesan benar
      setFinish(true); // Mengubah Finish menjadi true sehingga tombol untuk next ke soal berikutnya dapat ditampilkan
      setSoal(Soal + 1); // Mentrack nomor soal menjadi +1
      setLives(Lives - 1); // Mengurangi nyawa/kesempatan pengguna
    }
  };

  return (
    <div className="bg-gradient-to-tr from-rose-50 to-amber-200 w-[100vw] h-[100vh] flex items-center justify-center">
      <div className="absolute w-[35rem] h-[35rem] rounded-2xl flex flex-col justify-end bg-white/50 backdrop-blur-md drop-shadow-xl ">
        {Completed ? (
          <div className="h-[33rem] bg-gradient-to-b from-rose-500/60 to-amber-500/60 rounded-2xl"></div>
        ) : (
          <div className="h-[33rem] bg-gradient-to-b from-rose-500/60 to-amber-500/60 rounded-2xl">
            <HealthBar soal={Soal} score={Score} lives={Lives} />
            <div className="my-8 w-[35rem] h-[25rem] text-xl text-white text-center flex flex-col items-center ">
              <div className="px-4 py-1 bg-teal-600 rounded-full">
                <h1>Translate to English</h1>
              </div>
              <p className="text-3xl font-thin my-12">{question[Soal].question}</p>
              <div className="flex items-center justify-center gap-x-2 my-4">
                <div
                  onClick={() => pilihJawaban(question[Soal].a.correct)}
                  className=" px-2 py-1 bg-white/25 from-white/25 to-white/25 rounded-full backdrop-blur-sm w-[15rem] hover:bg-gradient-to-br hover:from-teal-400 hover:to-blue-700 cursor-pointer">
                  {question[Soal].a.answer}
                </div>
                <div
                  onClick={() => pilihJawaban(question[Soal].b.correct)}
                  className=" px-2 py-1 bg-white/25 from-white/25 to-white/25 rounded-full backdrop-blur-sm w-[15rem] hover:bg-gradient-to-br hover:from-teal-400 hover:to-blue-700 cursor-pointer">
                  {question[Soal].b.answer}
                </div>
              </div>
              {Finish ? null : (
                <div className=" flex-1 w-[15rem] h-[5rem] flex items-center justify-center ${}">
                  <Countdown date={Date.now() + 15000} renderer={renderer} />
                </div>
              )}
              {Answer == 1 ? (
                <div className=" flex-1  text-white flex flex-col items-center w-[15rem] justify-center ">
                  <AiOutlineCheckCircle className="w-12 h-12 text-emerald-600 " />
                  <p className=" text-white text-xl font-normal ">Correct Answer!</p>
                </div>
              ) : Answer == 0 ? (
                <div className=" flex-1  text-white flex flex-col items-center w-[15rem] justify-center ">
                  <AiOutlineCheckCircle className="w-12 h-12 text-red-600 " />
                  <p className=" text-white text-xl font-normal ">Wrong Answer!</p>
                </div>
              ) : null}
              {Finish ? (
                <div className="bg-teal-600 hover:bg-teal-400 rounded-full cursor-pointer duration-200 px-8 py-1">
                  <p className="text-white">Next</p>
                </div>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
