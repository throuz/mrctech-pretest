import "./Categories.css";

function Categories(props) {
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const listCategories = categories.map((category, i) => (
    <div
      className="category"
      key={i}
      onClick={() => {
        props.categoryFilter(category);
      }}
    >
      {category}
    </div>
  ));
  return (
    <section id="categories">
      <h2>Categories</h2>
      {listCategories}
    </section>
  );
}

export default Categories;
