import "./App.css";
import Home from "./pages/home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Signup from "./pages/Auth/signup/Signup";
import Login from "./pages/Auth/login/Login";
import Profile from "./pages/profile/Profile";
// import Chat from './pages/chat/Chat';
import CHAT from "./pages/chat/CHAT";

function App() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="signup" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../signup" />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="../home" /> : <Signup />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="../home" /> : <Login />}
        />
        <Route
          path="/profile/:id"
          element={user ? <Profile /> : <Navigate to="../login" />}
        />
        <Route
          path="/chat"
          element={user ? <CHAT /> : <Navigate to="../signup" />}
        />
      </Routes>
    </div>
  );
}

export default App;
