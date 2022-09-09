import { useContext } from 'react';
import { QuizContext } from '../context/quizContext';

import QuizImage from '../img/quiz.svg';

export const Welcome = () => {
  const quizState = useContext(QuizContext);

  return (
    <section class='text-center max-w-lg'>
      <p class='my-4 text-2xl bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-indigo-400 to-violet-600'>
        Clique no botão abaixo para começar:
      </p>
      <button
        class='font-bold text-1xl cursor-pointer py-3.5 px-8 border-none rounded-full bg-gradient-to-r 
      from-purple-700 via-purple-600 to-purple-500 
        hover:bg-gradient-to-l'
      >
        Iniciar
      </button>
      <img
        class='mt-8 hover:-translate-y-1 transition-transform'
        src={QuizImage}
        alt='Imagem de quiz'
        loading='lazy'
      />
    </section>
  );
};
