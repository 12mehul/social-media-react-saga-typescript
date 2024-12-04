import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Register from "./Register";
import Login from "./Login";
import AuthenticatedRoutes from "./routes/AuthenticatedRoutes";
import ProtectedRoutes from "./routes/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              <ProtectedRoutes>
                <AuthenticatedRoutes />
              </ProtectedRoutes>
            }
          />
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
