import "./GoTop.css";

function GoTop(props) {
  return (
    <section
      id="gotop"
      onClick={() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }}
    >
      TOP
    </section>
  );
}

export default GoTop;
