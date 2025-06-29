import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { isLoggedIn } from "./utlis";
import StudentsPage from "./pages/StudentsPage";
import AuthPage from "./pages/AuthPage";

const ProtectedRoute = ({ children }) => {
  return isLoggedIn() ? children : <Navigate to='/'/>;
}
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthPage/>} />
        <Route path="/students" element={
          <ProtectedRoute>
            <StudentsPage />
          </ProtectedRoute>          
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
