import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header ";
import Footer from "./components/Footer ";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Admin from "./components/Admin";
import Students from "./components/Student";

const App = () => {
  return (
    <Router>
      <div className="">
      <div className="flex flex-col h-screen w-screen">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <Routes>
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/students" element={<Students />} />
          </Routes>
        </div>
        <Footer />
      </div>
      </div>
    </Router>
  );
};

export default App;