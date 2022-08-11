import "./App.css";
import IconButton from "./components/ui/IconButton/IconButton";

const Product = ({ style, className, src }) => {
  return (
    <div className={`product-ctn ${className || ""}`}>
      <img
        // src="https://react.pixelstrap.com/multikart-admin/static/media/001.2822b78e.jpg"
        src={
          src ||
          "https://react.pixelstrap.com/multikart-admin/static/media/1.a7d938d0.jpg"
        }
        className="product-img"
      />
      <div className="productdesc-ctn">
        <span className="product-name">Slim Fit cotton shirt</span>
        <span className="product-amount">N4000</span>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="cover_page_container">
      <header className="store-header slideInDown">
        <nav className="store-header-cnt">
          <h2 className="store-name">My Store</h2>
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
          <main className="page-ctn  slideInUp">
            <div className="productlist-ctn">
              <Product
                src={
                  "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.webp?s=612x612&w=is&k=20&c=M-zkBx55YCn_UZg9cyuVMm1nS_PhSKGqoVybgO1Dp0Y="
                }
              />
              <Product
                src={
                  "https://media.istockphoto.com/id/1174472274/photo/connection-with-nature.webp?s=612x612&w=is&k=20&c=w1X2_iZd6p2vThXzYABvIMxwjJ9_kHoasLGxmff-xBM="
                }
              />
              <Product
                src={
                  "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.webp?s=612x612&w=is&k=20&c=WZZoms0dBlmanqXPkG61DA8js67F7rLZ8CA33ymxxj4="
                }
              />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
