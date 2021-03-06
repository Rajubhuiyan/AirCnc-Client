import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Contexts/AuthProvide/AuthProvider';
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import ReservedContainer from './Components/Reserved/ReservedContainer/ReservedContainer';
import ReservedDataContainer from './Components/ReservedData/ReservedDataContainer/ReservedDataContainer';
import PaymentSucces from './Components/ReviewHouseAndPaid/Payment/PaymentSuccess/PaymentSucces';
import ReviewHouseAndPaidContainer from './Components/ReviewHouseAndPaid/ReviewHouseAndPaidContainer/ReviewHouseAndPaidContainer/ReviewHouseAndPaidContainer';
import SearchResultContainer from './Components/SearchResult/SearchResultContainer/SearchResultContainer';

function App() {
  

  return (
    <div>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:searchLoc" element={<SearchResultContainer/>} />
            <Route path="/reserve/:reserveId/" element={<PrivateRoute><ReservedContainer/></PrivateRoute>} />
            <Route path="/review/:reviewId" element={<ReviewHouseAndPaidContainer/>} />
            <Route path="/review/" element={<ReviewHouseAndPaidContainer/>} />
            <Route path="/login/" element={<Login/>} />
            <Route path="/paymentSuccess/" element={<PaymentSucces/>} />
            <Route path="/reserved/" element={<ReservedDataContainer/>} />
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
