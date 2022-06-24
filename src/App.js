import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeComponent } from "./components/home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        draggable
        pauseOnHover
      />
      <Router>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
