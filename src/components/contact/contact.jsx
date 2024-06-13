import { Container, Row, Col } from "react-bootstrap";
import './contact.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHandPointRight, FaLinkedin, FaInstagramSquare, FaFacebookSquare  } from 'react-icons/fa';
import { SiGmail } from "react-icons/si";

function ContactComponent() {
    return (
        <section className="contact" id="contact">
            <Container>
                <div className="title">
                    <h1>Contact</h1>
                </div>
                <Row className="align-items-center">
                <Col xs={12} md={6} xl={6}>
                <div className="section1">
                <div className="point">
                <SiGmail className="icon" />
                    <h3>Email</h3>
                </div>
                <h4>maulanadaffa342@gmail.com</h4>
                </div>         
                <div className="section1">
                <div className="point">
                    <FaLinkedin className="icon" />
                    <h3>Linkedin</h3>
                </div>
                <h4>Momee.id </h4>
                </div>
                </Col>
                <Col xs={12} md={6} xl={6}>
                <div className="section1">
                <div className="point">
                    <FaInstagramSquare className="icon" />
                    <h3>Instagram</h3>
                </div>
                <h4>Momee_ind</h4>
                </div>
                <div className="section1">
                <div className="point">
                    <FaFacebookSquare className="icon" />
                    <h3>Facebook</h3>
                </div>
                <h4>Momee.Indonesia</h4>
                </div>
                </Col>
            </Row>
            </Container>
        </section>
    );
}

export default ContactComponent;