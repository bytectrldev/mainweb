import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Landing from './Pages/Landing';
import { useState } from 'react';

import { BrowserRouter } from 'react-router-dom';

function App() {
  const [Theme, setTheme] = useState(true);
  return (
    <BrowserRouter>
      <div className="App">
        <Landing Theme={Theme} setTheme={setTheme} />
      </div>
    </BrowserRouter>
  );
}

export default App;
