import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import momee_logo from '../../assets/logo-momee.svg';
import {
  BrowserRouter as Router
} from "react-router-dom";


function NavbarComponent() {

  const [linkStatus, setLink] = useState("home");
  const [scrollStatus, setScroll] = useState(false);
  const url_download = import.meta.env.VITE_API_KEY + "vite.svg";

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleDownload = (url) => {
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = `${url}?t=${new Date().getTime()}`; 
    aTag.setAttribute('download', fileName);
    document.body.appendChild(aTag);
    aTag.click();
    document.body.removeChild(aTag);
  };
  return (
    <>
    <Router>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className={`navbar ${scrollStatus ? "scrolled" : ""}`}>
          <Container fluid>
            <Navbar.Brand href="/">
              <img src={momee_logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link
                  href="#home"
                  className={
                    linkStatus === "home" ? "active navbar-link" : "navbar-link"
                  }
                  onClick={() => setLink("home")}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="#background"
                  className={
                    linkStatus === "background" ? "active navbar-link" : "navbar-link"
                  }
                  onClick={() => setLink("background")}
                >
                  Background
                </Nav.Link>
                <Nav.Link
                  href="#feature"
                  className={
                    linkStatus === "feature" ? "active navbar-link" : "navbar-link"
                  }
                  onClick={() => setLink("feature")}
                >
                  Feature
                </Nav.Link>
                <Nav.Link
                  href="#videos"
                  className={
                    linkStatus === "videos" ? "active navbar-link" : "navbar-link"
                  }
                  onClick={() => setLink("videos")}
                >
                  Video
                </Nav.Link>
                <Nav.Link
                  href="#faq"
                  className={
                    linkStatus === "faq" ? "active navbar-link" : "navbar-link"
                  }
                  onClick={() => setLink("faq")}
                >
                  FAQ
                </Nav.Link>
                <Nav.Link
                  href="#contact"
                  className={
                    linkStatus === "contact" ? "active navbar-link" : "navbar-link"
                  }
                  onClick={() => setLink("contact")}
                >
                  Contact
                </Nav.Link>
              </Nav>
              <span className="navbar-text ms-auto">
                <button
                  className="button-23"
                  onClick={() => handleDownload(url_download)}
                >
                  Download
                </button>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ))}
      </ Router>
    </>
  );
}

export default NavbarComponent;
