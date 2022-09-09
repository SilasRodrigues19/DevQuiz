import { useContext } from 'react';
import { QuizContext } from '../context/quizContext';

import WellDone from '../img/welldone.svg';

export const GameOver = () => {
  return (
    <section>
      <h2 className='my-4 sm:text-3xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-indigo-400 to-violet-600'>
        Fim de jogo!
      </h2>
      <p className='my-4 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-indigo-400 to-violet-600'>
        Pontuação: x
      </p>
      <p>Você acertou y de z perguntas</p>
      <img
        className='max-w-xs mx-auto mt-8 hover:-translate-y-1 transition-transform
        md:max-w-md'
        src={WellDone}
        alt='Fim do quiz'
        loading='lazy'
      />
      <button
        className='mt-8 font-bold text-1xl uppercase cursor-pointer py-3.5 px-14 border-none rounded-full bg-gradient-to-r 
      from-purple-700 via-purple-600 to-purple-500 
        hover:bg-gradient-to-l'
      >
        Reiniciar
      </button>
    </section>
  );
};
