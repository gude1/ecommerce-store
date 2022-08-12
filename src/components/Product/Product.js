import Button from "../ui/Button/Button";
import "./Product.css";

const Product = ({
  style = {},
  className,
  src,
  buttonStyle = {},
  buttonTtitle = "View Details",
  onBtnClick = null,
}) => {
  return (
    <div className={`product-ctn ${className}`} style={style}>
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
      <Button
        className="product-actionbtn"
        title="View Details"
        style={buttonStyle}
        buttonProps={{
          onClick: onBtnClick,
        }}
      />
    </div>
  );
};

export default Product;
