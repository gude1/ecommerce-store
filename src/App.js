import "./App.css";
import Product from "./components/Product/Product";
import IconButton from "./components/ui/IconButton/IconButton";
import { BrowserRouter, Outlet, Routes, Route } from "react-router-dom";
import MainHeader from "./components/MainHeader/MainHeader";
import SubHeader from "./components/SubHeader/SubHeader";

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
        <Route path="/" element={<Wrapper />}></Route>
      </Routes>
    </BrowserRouter>
  );

  return (
    <div className="cover_page_container">
      <header className="store-header slideInDown">
        <nav className="store-header-cnt">
          <h2 className="store-name">My Store </h2>
          <nav className="navtabs-ctn">
            <ul className="navtabs">
              <li>
                <IconButton name={"Home"} className="navtabs-btn" />
              </li>
              <li>
                <IconButton name={"search"} className="navtabs-btn" />
              </li>
              <li>
                <IconButton name={"shopping_cart"} className="navtabs-btn" />
              </li>
            </ul>
          </nav>
        </nav>
      </header>
      <div className="scroll-vertical">
        <div className="container">
          <main className="page-ctn slideInUp">
            <header className="category-header">
              <div className="productdesc-ctn">
                <h3>Products for sale</h3>
              </div>
            </header>
            <div className="productlist-ctn">
              <Product
                className={"product"}
                src={
                  "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.webp?s=612x612&w=is&k=20&c=M-zkBx55YCn_UZg9cyuVMm1nS_PhSKGqoVybgO1Dp0Y="
                }
              />
              <Product
                className={"product"}
                src={
                  "https://media.istockphoto.com/id/1174472274/photo/connection-with-nature.webp?s=612x612&w=is&k=20&c=w1X2_iZd6p2vThXzYABvIMxwjJ9_kHoasLGxmff-xBM="
                }
              />
              <Product
                className={"product"}
                src={
                  "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.webp?s=612x612&w=is&k=20&c=WZZoms0dBlmanqXPkG61DA8js67F7rLZ8CA33ymxxj4="
                }
              />
              <Product className={"product"} />
              <Product className={"product"} />
              <Product className={"product"} />
              <Product className={"product"} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
