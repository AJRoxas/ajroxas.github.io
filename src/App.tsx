import TitleGenerator from './components/TitleGenerator';
import WelcomeBox from './components/WelcomeBox';

const App = () => {
  return (
    <main>
      <div className='h-dvh min-h-87 flex flex-col justify-center items-center gap-4'>
        <WelcomeBox />
        <TitleGenerator />
      </div>
    </main>
  );
};

export default App;
