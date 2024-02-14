import logoDark from "../Images/Brickon Logo.png";
import logoLight from "../Images/logo-light.png";
import downloadicondarkmode from "../Images/download-icon-dark-mode.png";
import downloadiconlightmode from "../Images/download-icon-light-mode.png";
import notificationicondarkmode from "../Images/notification-icon-dark-mode.png";
import notificationiconlightmode from "../Images/notification-icon-light-mode.png";
import helpicondarkmode from "../Images/help-icon-dark-mode.png";
import helpiconlightmode from "../Images/help-icon-light-mode.png";
import worldicondarkmode from "../Images/world-icon-dark-mode.png";
import worldiconlightmode from "../Images/world-icon-light-mode.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../store/slices/darkModeSlice";
import { useEffect } from "react";

const Navbar = () => {
  const darkModes = useSelector((state) => state.darkModeSlice);
  console.log(darkModes);

  const dispatch = useDispatch();
  const darkMode = () => {
    dispatch(toggleDarkMode());
  };
  const modeCheck = () => {
    const root = document.documentElement;

    if (darkModes.darkMode) {
      document.body.classList.add("light-mode");
      root.style.setProperty("--font-color", "black");
      root.style.setProperty("--background-color", "white");
      root.style.setProperty("--nav-container-color", "#f1f1f1");
      root.style.setProperty("--footer-span-color", "black");

    } else {
      document.body.classList.remove("light-mode");
      root.style.setProperty("--font-color", "white");
      root.style.setProperty("--background-color", "black");
      root.style.setProperty("--nav-container-color", "#2c2c2c");
      root.style.setProperty("--footer-span-color", "#909090");
    }
  };

  const showSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  };
  const hidesidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  };
  useEffect(() => {
    modeCheck();
  }, [darkModes.darkMode]);

  return (
    <nav className="navbar">
      <div className="sidebar">
        <li onClick={hidesidebar}>
          <a href="#" className="cross-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={24}
              viewBox="0 -960 960 960"
              width={24}
              fill={darkModes.darkMode ? "black" : "white"}
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </a>
        </li>
        <div className="nav-btn-one">
          <button type="button" className="exchange-btn">
            Exchange
          </button>
          <button type="button" className="wallet-btn">
            Wallet
          </button>
        </div>
        <div className="small-dropdown">
          <select name="cars" id="cars" className="dropdown">
            <option value="volvo">Buy Crypto</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <select name="cars" id="cars" className="dropdown">
            <option value="volvo">Discover</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <select name="cars" id="cars" className="dropdown">
            <option value="volvo">Trade</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <select name="cars" id="cars" className="dropdown">
            <option value="volvo">Grow</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <select name="cars" id="cars" className="dropdown">
            <option value="volvo">Build</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <div className="search-box">
          <i className="bi bi-search search-icon" />
          <input
            className="me-2 custom-search"
            type="search"
            placeholder="Search for anything"
            aria-label="Search"
          />
        </div>
        <div className="nav-btn-two">
          <button>Log in</button>
          <button>Signup</button>
        </div>
        <div className="nav-last-icons">
          {darkModes.darkMode ? (
            <img src={downloadicondarkmode} alt="download-icon" />
          ) : (
            <img src={downloadiconlightmode} alt="download-icon" />
          )}
          {darkModes.darkMode ? (
            <img src={notificationicondarkmode} alt="notification-icon" />
          ) : (
            <img src={notificationiconlightmode} alt="notification-icon" />
          )}
          {darkModes.darkMode ? (
            <img src={helpicondarkmode} alt="help-icon" />
          ) : (
            <img src={helpiconlightmode} alt="help-icon" />
          )}
          {darkModes.darkMode ? (
            <img src={worldicondarkmode} alt="world-icon" />
          ) : (
            <img src={worldiconlightmode} alt="world-icon" />
          )}
        </div>
      </div>

      {/* Navigation on Large Screen */}
      <div className="nav-container">
        <div className="nav-logo">
          {darkModes.darkMode ? (
            <img src={logoLight} alt="logo" width={83} />
          ) : (
            <img src={logoDark} alt="logo" width={83} />
          )}
        </div>
        <div className="nav-btn-one hideOnMobile">
          <button type="button" className="exchange-btn">
            Exchange
          </button>
          <button type="button" className="wallet-btn">
            Wallet
          </button>
        </div>
        <div className="pipe-line hideOnMobile">
          <span className="pipe-symbol">|</span>
        </div>
        <div className="nav-dropdown hideOnMobile">
          <div className="hideOnMobile">
            <select name="cars" id="cars" className="dropdown">
              <option value="volvo">Buy Crypto</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="hideOnMobile">
            <select name="cars" id="cars" className="dropdown">
              <option value="volvo">Discover</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="hideOnMobile">
            <select name="cars" id="cars" className="dropdown">
              <option value="volvo">Trade</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="hideOnMobile">
            <select name="cars" id="cars" className="dropdown">
              <option value="volvo">Grow</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="hideOnMobile">
            <select name="cars" id="cars" className="dropdown">
              <option value="volvo">Build</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
        <div className="search-box hideOnMobile">
          <i className="bi bi-search search-icon" />
          <input
            className="me-2 custom-search"
            type="search"
            placeholder="Search for anything"
            aria-label="Search"
          />
        </div>
        <div className="nav-btn-two hideOnMobile">
          <button>Log in</button>
          <button>Signup</button>
        </div>
        <div className="pipe-line hideOnMobile">
          <span className="pipe-symbol">|</span>
        </div>
        <div className="nav-last-icons hideOnMobile">
          {darkModes.darkMode ? (
            <img src={downloadiconlightmode} alt="download-icon" />
          ) : (
            <img src={downloadicondarkmode} alt="download-icon" />
          )}
          {darkModes.darkMode ? (
            <img src={notificationiconlightmode} alt="notification-icon" />
          ) : (
            <img src={notificationicondarkmode} alt="notification-icon" />
          )}
          {darkModes.darkMode ? (
            <img src={helpiconlightmode} alt="help-icon" />
          ) : (
            <img src={helpicondarkmode} alt="help-icon" />
          )}
          {darkModes.darkMode ? (
            <img src={worldiconlightmode} alt="world-icon" />
          ) : (
            <img src={worldicondarkmode} alt="world-icon" />
          )}
        </div>

        <li onClick={showSidebar} className="menu-button">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height={30}
              viewBox="0 -960 960 960"
              width={30}
              fill={darkModes.darkMode ? "black" : "white"}
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </a>
        </li>
        <div className="form-check form-switch custom-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={darkMode}
            checked={darkModes.darkMode ? false : true}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
