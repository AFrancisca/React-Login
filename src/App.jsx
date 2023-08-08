import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./assets/Login"
import Signup from "./assets/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </Router>
  );
}

export default App;