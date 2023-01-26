import Box from './components/Box';
import './App.css';

const App = () => {
  return (
    <>
      <header>
        <Box type="this is header" direction="top" />
      </header>
      <div className="columns">
        <nav>
          <Box type="nav" direction="left" />
        </nav>
        <main></main>
        <aside>
          <Box type="aside" direction="right" />
        </aside>
      </div>
      <footer>
        <Box type="footer" direction="bottom" />
      </footer>
    </>
  );
};

export default App;
