import "./Advertise.css";
import { useState, useEffect, useRef } from "react";

function Advertise(props) {
  const { images } = props;
  const [slideIndex, setSlideIndex] = useState(0);
  const slides = useRef([]);
  const dots = useRef([]);
  const slideDoms = slides.current;
  const dotsDoms = dots.current;

  const listImages = images.map((image, i) => (
    <img
      ref={(element) => {
        slideDoms[i] = element;
      }}
      className="slide"
      src={image}
      key={i}
    />
  ));

  const listDots = images.map((image, i) => (
    <div
      ref={(element) => {
        dotsDoms[i] = element;
      }}
      className="dot"
      onClick={() => {
        setSlideIndex(i);
      }}
      key={i}
    ></div>
  ));

  useEffect(() => {
    for (let i = 0; i < slideDoms.length; i++) {
      slideDoms[i].style.display = "none";
    }
    for (let i = 0; i < dotsDoms.length; i++) {
      dotsDoms[i].className = dotsDoms[i].className.replace(" active", "");
    }
    slideDoms[slideIndex].style.display = "block";
    dotsDoms[slideIndex].className += " active";
  }, [slideIndex]);

  return (
    <section id="advertise">
      {listImages}
      <div
        className="prev"
        onClick={() => {
          slideIndex !== 0 && setSlideIndex(slideIndex - 1);
        }}
      >
        &#10094;
      </div>
      <div
        className="next"
        onClick={() => {
          slideIndex !== slideDoms.length - 1 && setSlideIndex(slideIndex + 1);
        }}
      >
        &#10095;
      </div>
      <div className="dot-group">{listDots}</div>
    </section>
  );
}

export default Advertise;
