import { Container, Row, Col } from "react-bootstrap";
import './videos.css';
import "bootstrap/dist/css/bootstrap.min.css";


function VideosComponent() {
    return (
        <section className="videos" id="videos">
        <Container>
            <div className="title">
                <h1>Video</h1>
            </div>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={6}>
            <div className="video-container">
                <iframe width="720" height="315" 
                src="https://www.youtube.com/embed/EMa7OMWf2YM?si=YJXqUP2zZPNrbK6B" //change youtube promotional video
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
                </iframe>
            </div>
            </Col>
            <Col xs={12} md={6} xl={6}>
                <div className="tagline">
                <h2 style={{ fontFamily: 'angelina' }}>Having a baby is a life-changer. It gives you a whole other perspective on why you wake up every day.</h2>
                <h3>Taylor Hanson </h3>
                </div >

            </Col>
            </Row>
        </Container>
    </section>
    );
}

export default VideosComponent;
