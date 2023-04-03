import React, { useState } from 'react';
import HealthBar from '../components/HealthBar';
import Countdown from 'react-countdown';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import CompletedQuiz from '../components/CompletedQuiz';
import NavigationBar from '../components/NavigationBar';

export default function QuizPageIndtoEng() {
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
  const Timeup = () => (
    <p className="text-xl font-medium text-white my-7">Waktu Anda Telah Habis!</p>
  );

  // Fungsi miik Countdown, untuk menampilkan waktu hitung mundur soal, dan menampilkan fungsi Timeup bila sudah habis
  const renderer = ({ seconds, completed }) => {
    // Jika Countdown / waktu soal habis
    if (completed) {
      // setSoal(Soal + 1);
      setLives(Lives - 1);
      setAnswer(2);
      setFinish(true);
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
    if (Soal == question.length - 1) {
      console.log('terprint');
      setCompleted(true);
      return true;
    } else {
      return false;
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
    // console.log(answer);

    // jika soal yang dipilih adalah benar
    if (answer) {
      setAnswer(1); // Mengubah Answer menjadi 0 yang bertujuan untuk menampilkan pesan benar
      setFinish(true); // Mengubah Finish menjadi true sehingga tombol untuk next ke soal berikutnya dapat ditampilkan
      setScore(Score + 10); // Menambahkan Score pengguna
    } else {
      setAnswer(0); // Mengubah Answer menjadi 0 yang bertujuan untuk menampilkan pesan benar
      setFinish(true); // Mengubah Finish menjadi true sehingga tombol untuk next ke soal berikutnya dapat ditampilkan
      setLives(Lives - 1); // Mengurangi nyawa/kesempatan pengguna
    }
  };

  const nextSoal = () => {
    const selesai = isLastSoal();
    console.log(selesai);
    if (selesai) {
      return;
    } else {
      setSoal(Soal + 1); // Mentrack nomor soal menjadi +1
      setAnswer(null);
      setFinish(false);
    }
  };

  // console.log(question.length, Soal);

  return (
    <div className="bg-gradient-to-tr  from-rose-50 to-amber-300 w-[100vw] h-full">
      <NavigationBar />
      <div className=" flex justify-center relative items-center w-full h-[90vh]">
        <div className=" absolute w-[35rem] h-[35rem] rounded-2xl flex flex-col justify-end bg-white/50 backdrop-blur-md drop-shadow-xl ">
          {Completed ? (
            <CompletedQuiz score={Score} />
          ) : (
            <div className="h-[33rem] bg-gradient-to-b from-rose-500/60 to-amber-500/60 rounded-2xl">
              <HealthBar soal={Soal} score={Score} lives={Lives} language={0} />
              <div className="my-8 w-[35rem] h-[25rem] text-xl text-white text-center flex flex-col items-center ">
                <div className="px-4 py-1 bg-teal-600 rounded-full">
                  <h1>Terjemahkan dalam Bahasa Inggris</h1>
                </div>
                <p className="text-3xl font-thin my-12">{question[Soal].question}</p>
                <div className="flex items-center justify-center gap-x-2 my-4">
                  <div
                    onClick={() => {
                      if (!Finish) {
                        pilihJawaban(question[Soal].a.correct);
                      }
                    }}
                    className={`  px-2 py-1 bg-white/25 from-white/25 to-white/25 rounded-full backdrop-blur-sm w-[15rem] ${
                      !Finish
                        ? ' hover:bg-gradient-to-br hover:from-teal-400 hover:to-blue-700 cursor-pointer'
                        : null
                    } `}>
                    {question[Soal].a.answer}
                  </div>
                  <div
                    onClick={() => {
                      if (!Finish) {
                        pilihJawaban(question[Soal].b.correct);
                      }
                    }}
                    className={` px-2 py-1 bg-white/25 from-white/25 to-white/25 rounded-full backdrop-blur-sm w-[15rem] ${
                      !Finish
                        ? ' hover:bg-gradient-to-br hover:from-teal-400 hover:to-blue-700 cursor-pointer'
                        : null
                    }`}>
                    {question[Soal].b.answer}
                  </div>
                </div>
                {Finish ? null : (
                  <div className=" flex-1 w-[15rem] h-[5rem] flex items-center justify-center ${}">
                    <Countdown date={Date.now() + 5000} renderer={renderer} />
                  </div>
                )}
                {Answer == 1 ? (
                  <div className=" flex-1  text-white flex flex-col items-center w-[15rem] justify-center ">
                    <AiOutlineCheckCircle className="w-12 h-12 text-emerald-600 " />
                    <p className=" text-white text-xl font-normal ">Jawaban Benar!</p>
                  </div>
                ) : Answer == 0 ? (
                  <div className=" flex-1  text-white flex flex-col items-center w-[15rem] justify-center ">
                    <AiOutlineCheckCircle className="w-12 h-12 text-red-600 " />
                    <p className=" text-white text-xl font-normal ">Jawaban Salah!</p>
                  </div>
                ) : Answer == 2 ? (
                  <Timeup className=" my-7 " />
                ) : null}
                {Finish && Lives >= 1 ? (
                  <div
                    onClick={() => nextSoal()}
                    className="bg-teal-600 hover:bg-teal-400 rounded-full cursor-pointer duration-200 px-8 py-1">
                    <p className="text-white">Berikutnya</p>
                  </div>
                ) : Finish && Lives == 0 ? (
                  <div>
                    <p className="text-white text-3xl">GAME OVER</p>
                    <div className="flex gap-x-2  cursor-pointer duration-200 px-8 py-1">
                      <div className="py-1 px-4 bg-white/20 rounded-md hover:bg-white/50 hover:text-pink-700 duration-200">
                        Finish
                      </div>
                      <div className="py-1 px-4 bg-white/20 rounded-md hover:bg-white/50 hover:text-pink-700 duration-200">
                        Retry
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}