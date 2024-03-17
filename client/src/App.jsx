import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/index.jsx';
import {SearchInput} from "./components/Atoms/SearchInput";

function App() {
  return (
    
        <Router>

            <Routes />
        </Router>
    
);
}

export default App;
