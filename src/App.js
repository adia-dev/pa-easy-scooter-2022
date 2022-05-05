import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AuthProvider from './core/AuthProvider';
import PrivateRoutes from './core/PrivateRoutes';
import { createBrowserHistory } from 'history';

function App() {

  const defaultRedirect = "/login"
  const history = createBrowserHistory();

  return (
    <AuthProvider>
      <Router >
        <Routes>
          <Route element={<PrivateRoutes redirect={defaultRedirect} />} >
            <Route exact path="/" element={<Home />} />
            <Route exact path=":id" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login history={history} />} />
          <Route path="/signup" element={<Signup history={history} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
