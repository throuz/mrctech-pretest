import "./App.css";
// import { useState, useEffect } from "react";
import Header from "./components/Header";
import Advertise from "./components/Advertise";
import Countdown from "./components/Countdown";
import ProductList from "./components/ProductList";
import products from "./data.json";

function App() {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [products, setProducts] = useState([]);
  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setProducts(result);

  //         const images = [];
  //         for (let i = 0; i < result.length; i++) {
  //           if (i > 9) {
  //             break;
  //           }
  //           images.push(result[i].image);
  //         }
  //         setImages(images);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     );
  // }, []);

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // } else if (!isLoaded) {
  //   return <div>Loading...</div>;
  // } else {
  //   return (
  //     <div className="App">
  //       <Header></Header>
  //       <Advertise images={images}></Advertise>
  //     </div>
  //   );
  // }

  const images = [];
  for (let i = 0; i < products.length; i++) {
    if (i > 9) {
      break;
    }
    images.push(products[i].image);
  }

  return (
    <div className="App">
      <Header></Header>
      <Advertise images={images}></Advertise>
      <Countdown></Countdown>
      <ProductList products={products}></ProductList>
    </div>
  );
}

export default App;
