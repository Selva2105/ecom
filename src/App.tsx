import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductLisingPage from "./pages/ProductLisingPage";
import NotFound from "./pages/NotFound";

function App() {

  const activeUser = localStorage.getItem(('userLogged'));
  return (
    <div className="min-h-screen">

      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {activeUser === 'true' && <Route path="/products" element={<ProductLisingPage />} />}

        {/* Catch-all route for 404 */}
        <Route path='*' element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;