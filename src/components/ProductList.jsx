import "./ProductList.css";

function ProductList(props) {
  const { products } = props;
  const listProducts = products.map((product, i) => (
    <div className="product" key={i}>
      <img src={product.image} />
      <h3>${product.price}</h3>
      <div className="middle">Details</div>
    </div>
  ));

  return <section id="products">{listProducts}</section>;
}

export default ProductList;
