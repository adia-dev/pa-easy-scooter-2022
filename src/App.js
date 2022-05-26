import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './core/AuthProvider';
import PrivateRoutes from './core/PrivateRoutes';
import Booking from './pages/Booking';
import Catalogue from './pages/Catalogue';
import Dashboard from './pages/Dashboard';
import Dev from './pages/Dev';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Stripe from './pages/Stripe';

function App() {

  const defaultRedirect = "/login"
  const history = createBrowserHistory();

  return (
    <AuthProvider>
      <div className="w-screen h-screen bg-[#F1EAE4]">
        <Router>
          <Routes>
            <Route element={<PrivateRoutes admin={false} redirect={defaultRedirect} />} >
              <Route exact path="/" element={<Home />} />
              <Route exact path="/catalogue" element={<Catalogue />} />
              <Route exact path=":id" element={<Home />} />
            </Route>
            <Route element={<PrivateRoutes admin={false} redirect={"/"} />} >
              <Route exact path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="/dev" element={<Dev history={history} />} />
            <Route path="/booking/:id" element={<Booking history={history} />} />
            <Route path="/login" element={<Login history={history} />} />
            <Route path="/signup" element={<Signup history={history} />} />
            <Route path="/stripe" element={<Stripe history={history} />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
