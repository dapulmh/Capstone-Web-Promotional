import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";
import './home.css';
import "bootstrap/dist/css/bootstrap.min.css";
import momee_display from '../../assets/Mockup_momee.svg';
import google_logo from '../../assets/google_play.svg';


function HomeComponent() {
  const [index, setIndex] = useState(1);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Your Best Solution Rental Baby Tools and Needs"];
  const period = 1000;
  const link_url_playstore ="https://www.youtube.com/watch?v=dQw4w9WgXcQ"; //change to link playstore

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = async () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={10} md={5} xl={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Momee Mobile Apps</span>
                  <h1>
                    {`Momee.id:`}{" "}
                    <span
                      className="txt-rotate"
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                  Momee.id menangani segala keperluan penyewaan peralatan bayi,
                  Kami memastikan kebutuhan bayi setara bagi semua kalangan.
                  </p>
                  <a href={link_url_playstore} target="_blank" rel="noopener noreferrer" className="clickable-image">
                  <img className="img2" src={google_logo} alt="Logo">
                  </ img>
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }  
                ><img className="img1" src={momee_display} alt="Logo" >
                  
                  </ img></div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HomeComponent;
