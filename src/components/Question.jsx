import { useContext } from 'react';
import { QuizContext } from '../context/quizContext';

export const Question = () => {
  const [{ questions, current }, dispatch] = useContext(QuizContext);
  const currentQuestion = questions[current];

  return (
    <div className='mx-12 border-4 border-violet-500 max-w-screen-lg p-16 rounded-lg'>
      <p className='sm:text-2xl lg:text-lg bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-indigo-400 to-violet-600'>
        Pergunta {current + 1} de {questions.length}
      </p>
      <h2 className='my-4 sm:text-3xl lg:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-indigo-400 to-violet-600'>
        {currentQuestion.question}
      </h2>
      <div id='options-container'>
        <p>Opções</p>
      </div>
      <button
        onClick={() => dispatch({ type: 'CHANGE_QUESTION' })}
        className='mt-8 font-bold text-1xl uppercase cursor-pointer py-3.5 px-14 border-none rounded-full bg-gradient-to-r 
      from-purple-700 via-purple-600 to-purple-500 
        hover:bg-gradient-to-l'
      >
        Continuar
      </button>
    </div>
  );
};
