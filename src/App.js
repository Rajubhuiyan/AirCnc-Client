import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Contexts/AuthProvide/AuthProvider';
import Home from './Components/Home/Home/Home';
import ReservedContainer from './Components/Reserved/ReservedContainer/ReservedContainer';
import ReviewHouseAndPaidContainer from './Components/ReviewHouseAndPaid/ReviewHouseAndPaidContainer/ReviewHouseAndPaidContainer/ReviewHouseAndPaidContainer';
import SearchResultContainer from './Components/SearchResult/SearchResultContainer/SearchResultContainer';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/serched/" element={<SearchResultContainer/>} />
            <Route path="/reserve/:reserveId/" element={<ReservedContainer/>} />
            <Route path="/reserve/review/" element={<ReviewHouseAndPaidContainer/>} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
