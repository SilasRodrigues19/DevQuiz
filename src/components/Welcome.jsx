import { useContext } from 'react';
import { QuizContext } from '../context/quizContext';

import QuizImage from '../img/quiz.svg';

export const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <section className='z-10 text-center max-w-lg'>
      <p className='my-4 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-indigo-400 to-violet-600'>
        Clique no botão abaixo para começar:
      </p>
      <button
        onClick={() => dispatch({ type: 'CHANGE_STATE' })}
        className='font-bold text-1xl uppercase cursor-pointer py-3.5 px-14 border-none rounded-full bg-gradient-to-r 
      from-purple-700 via-purple-600 to-purple-500 
        hover:bg-gradient-to-l'
      >
        Iniciar
      </button>
      <img
        className='max-w-xs mx-auto mt-8 hover:-translate-y-1 transition-transform
        md:max-w-md'
        src={QuizImage}
        alt='Imagem de quiz'
        loading='lazy'
      />
    </section>
  );
};
