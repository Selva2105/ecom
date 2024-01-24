import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Layout from "./Layout";
import ProductLisingPage from "./pages/ProductLisingPage";
import Home from "./pages/Home/Home";
import Premium from "./pages/Premium";

function App() {
  const activeUser = localStorage.getItem('loggedUser');
  const parsedUser = activeUser ? JSON.parse(activeUser) : null;

  return (
    <Layout>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />  
          <Route path="/premium" element={<Premium />} />


          {parsedUser && parsedUser[0].userLogged && (
            <Route path="/products" element={<ProductLisingPage />} />
          ) }

          {/* Catch-all route for 404 */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
