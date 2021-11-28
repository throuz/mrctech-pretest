import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  return (
    <header>
      <div id="search-bar">
        <FontAwesomeIcon icon={faSearch} id="search-btn" />
        <input type="text" id="search-input" />
        <FontAwesomeIcon icon={faTimesCircle} id="clear-btn" />
      </div>
    </header>
  );
}

export default Header;
