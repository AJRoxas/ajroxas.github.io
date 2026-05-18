import TitleGenerator from './components/TitleGenerator';
import WelcomeBox from './components/WelcomeBox';

const App = () => {
  return (
    <>
      <main className="mb-16">
        <div className="h-hdh min-h-87 flex flex-col justify-center items-center gap-4">
          <WelcomeBox />
          <TitleGenerator />
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="container">
            <h2>// About</h2>
          </div>
          <div className="container">
            <h2>// Work</h2>
          </div>
          <div className="container">
            <h2>// Projects</h2>
          </div>
          <div className="container">
            <h2>// Education</h2>
          </div>
          <div className="container">
            <h2>// Contact</h2>
          </div>
        </div>
      </main>
      <footer className="fixed bottom-0 left-0 right-0 h-16 flex justify-center items-center w-full bg-off-black border-t-2">
        &copy; 2026-Present Aliel Jacob Roxas :)
      </footer>
    </>
  );
};

export default App;
