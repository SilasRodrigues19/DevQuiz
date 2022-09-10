import { useContext } from 'react';
import { QuizContext } from '../context/quizContext';

const Option = ({ option, selectOption, answer }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <section
      onClick={() => selectOption()}
      className={`
        border-2 border-purple-300 max-w-sm mx-auto my-4 rounded-lg px-4 py-2 mb-2 cursor-pointer hover:bg-purple-400 
      ${
        quizState.answerSelected && option === answer
          ? 'bg-purple-700 hover:bg-purple-700 cursor-not-allowed'
          : ''
      } ${
        quizState.answerSelected && option !== answer
          ? 'bg-red-900 hover:bg-red-900 cursor-not-allowed'
          : ''
      }
      `}
    >
      <p className='text-purple-200'>{option}</p>
    </section>
  );
};

export default Option;
