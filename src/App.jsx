import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Advertise from "./components/Advertise";
import Countdown from "./components/Countdown";
import ProductList from "./components/ProductList";
import Categories from "./components/Categories";
import GoTop from "./components/GoTop";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [products, setProducts] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then(
        (result) => {
          setProductsData(result);
          setProducts(result);

          const images = [];
          for (let i = 0; i < result.length; i++) {
            if (i > 9) {
              break;
            }
            images.push(result[i].image);
          }
          setImages(images);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      );
  }, []);

  const SearchFilter = (e) => {
    const searchValue = e.target.value.toLowerCase();

    setProducts(
      productsData.filter(
        (product) =>
          product.title.toLowerCase().includes(searchValue) ||
          product.description.toLowerCase().includes(searchValue)
      )
    );
  };

  const categoryFilter = (category) => {
    if (category === "All") {
      setProducts(productsData);
    } else {
      setProducts(
        productsData.filter(
          (product) => product.category === category.toLowerCase()
        )
      );
    }
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App">
        <Header
          SearchFilter={SearchFilter}
          categoryFilter={categoryFilter}
        ></Header>
        <Advertise images={images}></Advertise>
        <Countdown></Countdown>
        <ProductList products={products}></ProductList>
        <Categories categoryFilter={categoryFilter}></Categories>
        <GoTop></GoTop>
      </div>
    );
  }
}

export default App;
