import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Contexts/AuthProvide/AuthProvider';
import Home from './Components/Home/Home/Home';
import SearchResultContainer from './Components/SearchResult/SearchResultContainer/SearchResultContainer';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/serched/" element={<SearchResultContainer/>} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
