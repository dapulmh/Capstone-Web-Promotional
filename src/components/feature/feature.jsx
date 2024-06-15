import { Container, Row, Col } from "react-bootstrap";
import './feature.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Bs1Square, Bs2Square, Bs3Square, Bs4Square } from "react-icons/bs";
import mock_rental from '../../assets/Mockup_rental.png'
import mock_search from '../../assets/Mockup_search.png'
import mock_chat from '../../assets/Mockup_chat.png'
import mock_review from '../../assets/Mockup_review.png'


function FeatureComponent() {
    return (
        <section className="feature" id="feature">
        <Container>
            <div className="title">
                <h1>Our Features</h1>
            </div>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={6}>
                    <div className="point">
                        <Bs1Square className="icon" />
                        <h3>Fitur Rental</h3>
                    </div>
                    <div className="point">
                        <h4>Fitur ini merupakan fitur utama dimana kamu dapat melakukan rental peralatan bayi seperti stroller, mainan, dll</h4>
                    </div>
                    <div className="point">
                    <img src={mock_rental} alt="Rental" ></img>
                    </div>
                </Col>
                <Col xs={12} md={6} xl={6}>
                    <div className="point">
                        <img src={mock_chat} alt="Chat" ></img>
                    </div>
                    <div className="point">
                        <Bs2Square className="icon" />
                        <h3>Fitur Chat</h3>
                    </div>
                    <div className="point">
                        <h4>Fitur ini memungkinkan kamu dalam menghubungi supplier untuk menanyakan kondisi ataupun hal lainnya terkait barang yang kamu inginkan untuk disewakan</h4>
                    </div>
                </Col>
                <Col xs={12} md={6} xl={6}>
                    <div className="point">
                        <Bs3Square className="icon" />
                        <h3>Fitur Review</h3>
                    </div>
                    <div className="point">
                        <h4>Fitur ini memmungkinkan kamu dalam melihat testimoni penyewa lainnya terkait supplier yang ingin kamu sewa</h4>
                    </div>
                    <div className="point">
                    <img src={mock_search} alt="Review" ></img>
                    </div>
                </Col>
                <Col xs={12} md={6} xl={6}>
                    <div className="point">
                        <img src={mock_review} alt="Search" ></img>
                    </div>
                    <div className="point">
                        <Bs4Square className="icon" />
                        <h3>Fitur Fast Searching</h3>
                    </div>
                    <div className="point">
                        <h4>Fitur ini memungkinkan kamu dalam mengetahui barang yang ingin kamu sewa dengan menggunakan kamera</h4>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    );
}

export default FeatureComponent;
