import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import AuthProvider from './core/AuthProvider';
import PrivateRoutes from './core/PrivateRoutes';
import Booking from "./pages/Booking";
import Catalogue from "./pages/Catalogue";
import Checkout from './pages/Checkout';
import Dashboard from "./pages/Dashboard";
import Dev from "./pages/Dev";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Stripe from "./pages/Stripe";
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
              <Route exact path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route element={<PrivateRoutes admin={false} redirect={"/"} />} >
              <Route exact path="v2/dashboard" element={<Dashboard2 />} />
              <Route exact path="v2/users/:id/info" element={<UserInfo />} />
            </Route>
            <Route path="/dev" element={<Dev history={history} />} />
            <Route path="/booking/:id" element={<Booking history={history} />} />
            <Route path="/login" element={<Login history={history} />} />
            <Route path="/signup" element={<Signup history={history} />} />
            <Route path="/stripe" element={<Stripe history={history} />} />
            <Route path="/sign" element={<Sign history={history} />} />
            <Route path="/v2/booking/checkout" element={<Checkout history={history} />} />
            <Route path="/v2/booking" element={<Booking2 history={history} />} />
            <Route path="/v2/dashboard/map" element={<DashboardMap history={history} />} />
          </Routes>
        </Router>
      </div>
    </AuthProvider>
    // <div className=""><UserInfo /></div>
  );
}

export default App;
