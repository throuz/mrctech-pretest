import "./App.css";
// import { useState, useEffect } from "react";
import Header from "./components/Header";
import Advertise from "./components/Advertise";
import Countdown from "./components/Countdown";
import data from "./data.json";

function App() {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [items, setItems] = useState([]);
  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //         setItems(result);

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
  for (let i = 0; i < data.length; i++) {
    if (i > 9) {
      break;
    }
    images.push(data[i].image);
  }

  return (
    <div className="App">
      <Header></Header>
      <Advertise images={images}></Advertise>
      <Countdown></Countdown>
    </div>
  );
}

export default App;
