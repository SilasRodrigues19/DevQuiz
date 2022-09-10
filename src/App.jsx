import { useContext, useEffect } from 'react';

import { Wave } from './components/Wave';
import { Welcome } from './components/Welcome';
import { Question } from './components/Question';
import { GameOver } from './components/GameOver';
import { QuizContext } from './context/quizContext';

const App = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: 'REORDER_QUESTIONS' });
  }, []);

  return (
    <main className='relative bg-gradient-to-r from-zinc-900 to-zinc-800 text-center pt-4 flex flex-col items-center justify-center h-full min-h-screen'>
      <Wave />
      <h1 className='z-10	text-5xl font-bold my-4'>
        JS
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-violet-500 via-indigo-400 to-violet-600'>
          Quiz
        </span>
      </h1>
      {quizState.gameStage === 'Start' && <Welcome />}
      {quizState.gameStage === 'Playing' && <Question />}
      {quizState.gameStage === 'End' && <GameOver />}
    </main>
  );
};

export default App;
