
import './App.css';
import FavoritesList from './components/FavoritesList';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Food is Good and Stuff</h1>
    <Router>
      <FavoritesList />
    </Router>
    </div>
  );
}

export default App;
