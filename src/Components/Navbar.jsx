import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Fade as Hamburger } from "hamburger-react";
function Navbar(props) {
  const [isOpen, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [transform, settransform] = useState("");
  const handleClick = (toggled) => {
    if (toggled) {
      settransform("transform");
    } else {
      settransform("");
    }
  };
  const hidesidebar = ()=>{
    settransform("");
    setOpen(false);
  }
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleLinkClick = (path) => {
    hideSidebar();
    history.push(path, { top: 0 }); // Step 3
  };

  if (isMobile) {
    return (
      <nav>
        <ul className="nav-container">
          <li className="items">
            <Link to="/" onClick={() => handleLinkClick("/")}>
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="20.000000pt"
                height="20.000000pt"
                viewBox="0 0 300.000000 300.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                {" "}
                <g
                  transform="translate(0.000000,300.000000) scale(0.050000,-0.050000)"
                  fill="#ffffff"
                  stroke="none"
                >
                  {" "}
                  <path d="M2700 5981 c-1193 -127 -2207 -956 -2558 -2091 -572 -1856 721 -3733 2673 -3880 l185 -14 0 1502 0 1502 1502 0 1503 0 -14 175 c-140 1725 -1616 2984 -3291 2806z" />{" "}
                </g>{" "}
              </svg>
              Stellar Space
            </Link>
          </li>
          <li className="ham">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              onToggle={handleClick}
            />
          </li>
        </ul>
        <div className="glowing-line"></div>
        <div className={`contain ${transform}`}>
          <div className="glass">
            <ul>
              <li className={`items`}>
                <Link onClick={() => handleLinkClick("/")} to="/"><img src="/src/images/home.svg" alt="home icon" />Home</Link>
              </li>
              <li className={`items`}>
                <Link onClick={() => handleLinkClick("/")} to="/spacecrafts"><img src="/src/images/rocket.svg" alt="home icon" />Spacecraft</Link>
              </li>
              <li className={`items`}>
                <Link onClick={() => handleLinkClick("/")} to="/colonies"><img src="/src/images/colonies.svg" alt="colonies icon" />Colonies</Link>
              </li>
              <li className={`items`}>
                <Link onClick={() => handleLinkClick("/")} to="/exploration"><img src="/src/images/globe.svg" alt="exploration icon" />Exploration</Link>
              </li>
              <li className={`items`}>
                <Link onClick={() => handleLinkClick("/")} to="/culture"><img src="/src/images/culture.svg" alt="culture icon" />Culture</Link>
              </li>
              <li className={`items`}>
                <Link onClick={() => handleLinkClick("/")} to="/science"><img src="/src/images/science.svg" alt="science icon" />Science</Link>
              </li>
              <li className={`items`}>
                <Link onClick={() => handleLinkClick("/")} to="/history"><img src="/src/images/ancient.svg" alt="History icon" />History</Link>
              </li>
              <li className={`items login`}>
                <Link onClick={() => handleLinkClick("/")} to="/login"><img src="/src/images/login.svg" alt="login icon" />Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav>
      <ul className="nav-container">
        <li className="items">
          <Link to="/">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="20.000000pt"
              height="20.000000pt"
              viewBox="0 0 300.000000 300.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              {" "}
              <g
                transform="translate(0.000000,300.000000) scale(0.050000,-0.050000)"
                fill="#ffffff"
                stroke="none"
              >
                {" "}
                <path d="M2700 5981 c-1193 -127 -2207 -956 -2558 -2091 -572 -1856 721 -3733 2673 -3880 l185 -14 0 1502 0 1502 1502 0 1503 0 -14 175 c-140 1725 -1616 2984 -3291 2806z" />{" "}
              </g>{" "}
            </svg>
            Stellar Space
          </Link>
        </li>
        <li className={`items ${props.visi}`}>
          <Link to="/spacecrafts">Spacecraft</Link>
        </li>
        <li className={`items ${props.visi}`}>
          <Link to="/colonies">Colonies</Link>
        </li>
        <li className={`items`}>
          <Link to="/exploration">Exploration</Link>
        </li>
        <li className={`items`}>
          <Link to="/culture">Culture</Link>
        </li>
        <li className={`items`}>
          <Link to="/science">Science</Link>
        </li>
        <li className={`items`}>
          <Link to="/history">History</Link>
        </li>
        <li className={`items ${props.visi}`}>
          <Link to="/signup">
            <button className="primary bn632-hover bn26" to="/login">
              Join
            </button>
          </Link>
          <Link to="/login">
            <button className="secondary bn632-hover bn26 bn27" to="/login">
              Log in
            </button>
          </Link>
        </li>
      </ul>
      <div className="glowing-line"></div>
    </nav>
  );
}

export default Navbar;
