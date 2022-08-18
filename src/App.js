import "./App.css";
import Product from "./components/Product/Product";
import IconButton from "./components/ui/IconButton/IconButton";
import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import MainHeader from "./components/MainHeader/MainHeader";
import SubHeader from "./components/SubHeader/SubHeader";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./pages/Cart/Cart";
import Search from "./pages/Search/Search";

function Wrapper() {
  return (
    <div className="cover_page_container">
      <MainHeader />
      <div className="scroll-vertical">
        <main className="container">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:storeId" element={<Wrapper />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="search" element={<Search />} />
          <Route path="product/:productId" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
