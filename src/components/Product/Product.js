import "./Product.css";

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

export default Product;
