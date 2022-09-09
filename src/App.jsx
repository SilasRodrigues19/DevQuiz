import { Welcome } from './components/Welcome';

const App = () => {
  return (
    <div class='bg-gradient-to-r from-zinc-900 to-zinc-800	text-center pt-4 flex flex-col items-center justify-center h-screen'>
      <h1 class='text-5xl font-bold my-4'>Quiz de programação</h1>
      <Welcome />
    </div>
  );
};

export default App;
