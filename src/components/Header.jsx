import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  return (
    <header>
      <div className="search-bar">
        <FontAwesomeIcon icon={faSearch} className="search-btn" />
        <input type="text" className="search-input" />
        <FontAwesomeIcon icon={faTimesCircle} className="clear-btn" />
      </div>
    </header>
  );
}

export default Header;
