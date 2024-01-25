import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Layout from "./Layout";
import ProductLisingPage from "./pages/ProductLisingPage";
import Home from "./pages/Home/Home";
import Premium from "./pages/Premium";
import { useEffect } from "react";

function App() {

  // While routing, the user may be at any part of the screen. To bring the user to the top of the page...
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/premium" element={<Premium />} />

          <Route path="/products" element={<ProductLisingPage />} />

          {/* Catch-all route for 404 */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
