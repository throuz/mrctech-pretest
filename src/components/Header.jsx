import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

function Header(props) {
  const searchInput = useRef(null);

  return (
    <header>
      <div className="search-bar">
        <FontAwesomeIcon icon={faSearch} className="search-btn" />
        <input
          ref={searchInput}
          type="text"
          className="search-input"
          onChange={props.SearchFilter}
        />
        <FontAwesomeIcon
          icon={faTimesCircle}
          className="clear-btn"
          onClick={() => {
            searchInput.current.value = "";
            props.categoryFilter("All");
          }}
        />
      </div>
    </header>
  );
}

export default Header;
