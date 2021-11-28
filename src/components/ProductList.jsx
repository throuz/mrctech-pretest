import "./ProductList.css";
import { useState, useRef } from "react";

function ProductList(props) {
  const { products } = props;
  const [productInfo, setProductInfo] = useState({});
  const modal = useRef(null);

  const listProducts = products.map((product, i) => (
    <div className="product" key={i}>
      <img src={product.image} />
      <h3>${product.price}</h3>
      <div
        className="middle"
        onClick={() => {
          modal.current.style.display = "block";
          setProductInfo(product);
        }}
      >
        Details
      </div>
    </div>
  ));

  return (
    <section id="products">
      {listProducts}
      <div ref={modal} className="modal">
        <div className="modal-content">
          <span
            className="close"
            onClick={() => {
              modal.current.style.display = "none";
            }}
          >
            &times;
          </span>
          <img src={productInfo.image} />
          <p className="strong-text">{productInfo.title}</p>
          <p className="strong-text">${productInfo.price}</p>
          <p>{productInfo.description}</p>
        </div>
      </div>
    </section>
  );
}

export default ProductList;
