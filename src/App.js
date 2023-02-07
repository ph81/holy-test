import Box from './components/Box';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [direction, setDirection] = useState('');

  return (
    <>
      <header>
        <button onClick={() => setDirection('top')}>Header</button>
      </header>
      <div className="columns">
        <nav>
          <button onClick={() => setDirection('left')}>Nav</button>
        </nav>
        <main>
          <Box direction={direction} />
        </main>
        <aside>
          <button onClick={() => setDirection('right')}>Aside</button>
        </aside>
      </div>
      <footer>
        <button onClick={() => setDirection('bottom')}>Footer</button>
      </footer>
    </>
  );
};

export default App;
