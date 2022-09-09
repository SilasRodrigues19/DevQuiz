import { useContext } from 'react';
import { QuizContext } from '../context/quizContext';

import WellDone from '../img/welldone.svg';

export const GameOver = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <section>
      <p className='my-4 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-indigo-400 to-violet-600'>
        Pontuação: x
      </p>
      <p>
        Você acertou <span className='text-violet-500'>{quizState.score}</span>{' '}
        de <span className='text-violet-500'>{quizState.questions.length}</span>{' '}
        perguntas
      </p>
      <img
        className='max-w-xs mx-auto mt-8 hover:-translate-y-1 transition-transform
        md:max-w-md'
        src={WellDone}
        alt='Fim do quiz'
        loading='lazy'
      />
      <button
        onClick={() => dispatch({ type: 'NEW_GAME' })}
        className='mt-8 font-bold text-1xl uppercase cursor-pointer py-3.5 px-14 border-none rounded-full bg-gradient-to-r 
      from-purple-700 via-purple-600 to-purple-500 
        hover:bg-gradient-to-l'
      >
        Reiniciar
      </button>
    </section>
  );
};
