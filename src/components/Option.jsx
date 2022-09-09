import { useContext } from 'react';
import { QuizContext } from '../context/quizContext';

const Option = ({ option }) => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <section className='border-2 border-purple-300 max-w-sm mx-auto my-4 rounded-lg px-4 py-2 mb-2 cursor-pointer hover:bg-purple-400'>
      <p className='text-purple-200'>{option}</p>
    </section>
  );
};

export default Option;
