import TitleGenerator from './components/TitleGenerator';
import WelcomeBox from './components/WelcomeBox';

const App = () => {
  return (
    <>
      <main>
        <div className="h-hdh min-h-87 flex flex-col justify-center items-center gap-4">
          <WelcomeBox />
          <TitleGenerator />
        </div>
      </main>
      <footer className="fixed bottom-0 left-0 right-0 h-16 flex justify-center items-center w-full bg-off-black border-t-2">
        &copy; 2026-Present Aliel Jacob Roxas :)
      </footer>
    </>
  );
};

export default App;
