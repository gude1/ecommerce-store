import "./App.css";
import IconButton from "./components/ui/IconButton/IconButton";

const Product = ({ style, className }) => {
  return (
    <div className={`product-ctn ${className}`}>
      <img
        // src="https://react.pixelstrap.com/multikart-admin/static/media/001.2822b78e.jpg"
        src="https://react.pixelstrap.com/multikart-admin/static/media/1.a7d938d0.jpg"
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
    <div className="container">
      {/* Headers*/}
      <header className="store-header animate__animated  animate__slideInDown">
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
      <div className="productlist-ctn">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default App;
