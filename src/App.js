import "./App.css";
import Product from "./components/Product/Product";
import IconButton from "./components/ui/IconButton/IconButton";
import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import MainHeader from "./components/MainHeader/MainHeader";
import SubHeader from "./components/SubHeader/SubHeader";
import Home from "./pages/Home/Home";

function Wrapper() {
  return (
    <div className="cover_page_container">
      <MainHeader />
      <div className="scroll-vertical">
        <main className="container">
          <SubHeader />
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
