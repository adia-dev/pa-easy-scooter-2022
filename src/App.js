import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import AuthProvider from './core/AuthProvider';
import PrivateRoutes from './core/PrivateRoutes';
import Booking from "./pages/Booking";
import Catalogue from "./pages/Catalogue";
import Confirmed from './pages/Confirmed';
import Dashboard from "./pages/Dashboard";
import Dev from "./pages/Dev";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Stripe from "./pages/Stripe";
import Unlock from './pages/Unlock';
import Booking2 from "./pages/v2/Booking";
import Dashboard2 from "./pages/v2/Dashboard";
import DashboardMap from './pages/v2/DashboardMap';
import Sign from './pages/v2/Sign';
import UserInfo from "./pages/v2/UserInfo";
function App() {

  const defaultRedirect = "/login"
  const history = createBrowserHistory();


  return (
    <AuthProvider>
      <div className="w-screen h-screen bg-white">
        <Router>
          <Routes>
            <Route element={<PrivateRoutes admin={false} redirect={defaultRedirect} />} >
              <Route exact path="/" element={<Home />} />
              <Route exact path="/catalogue" element={<Catalogue />} />
              <Route exact path=":id" element={<Home />} />
            </Route>
            <Route element={<PrivateRoutes admin={false} redirect={"/"} />} >
              <Route exact path="v1/dashboard" element={<Dashboard />} />
            </Route>
            <Route element={<PrivateRoutes admin={true} redirect={"/"} />} >
              <Route exact path="dashboard" element={<Dashboard2 />} />
              <Route path="/dashboard/map" element={<DashboardMap history={history} />} />
              <Route exact path="users/:id/info" element={<UserInfo />} />
            </Route>
            <Route path="/dev" element={<Dev history={history} />} />
            <Route path="v1/booking/:id" element={<Booking history={history} />} />
            <Route path="/login" element={<Login history={history} />} />
            <Route path="/signup" element={<Signup history={history} />} />
            <Route path="/stripe" element={<Stripe history={history} />} />
            <Route path="/sign" element={<Sign history={history} />} />
            <Route path="/booking/confirmed/:id" element={<Confirmed history={history} />} />
            <Route path="/booking/unlock/:user_id/:scooter_id" element={<Unlock history={history} />} />
            <Route path="/booking" element={<Booking2 history={history} />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
    // <div className=""><UserInfo /></div>
  );
}

export default App;
