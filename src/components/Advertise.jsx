import "./Advertise.css";

function Advertise(props) {
  return (
    <section id="advertise">
      <div className="slides fade">
        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/collage-1634625747.jpg?crop=0.487xw:0.974xh;0.00489xw,0.0163xh&resize=640:*" />
      </div>
      <div className="prev">&#10094;</div>
      <div className="next">&#10095;</div>
      <div className="dot-group">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </section>
  );
}

export default Advertise;
