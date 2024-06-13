import { Container, Row, Col } from "react-bootstrap";
import './faq.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHandPointRight } from "react-icons/fa";



function FeatureComponent() {
    return (
        <section className="faq" id="faq">
        <Container>
            <div className="title">
                <h1>Frequently Ask Question (FAQ)</h1>
                <h2>Berikut pertanyaan yang sering ditanyakan terkait aplikasi kami</h2>
            </div>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={6}>
                <div className="section1">
                <div className="point">
                    <FaHandPointRight className="icon" />
                    <h3>Apakah Momee Gratis?</h3>
                </div>
                <h4>Ya, Momee dapat digunakan secara gratis, dengan beberapa fitur premium berbasis langganan dengan harga yang murah.</h4>
                </div>         
                <div className="section1">
                <div className="point">
                    <FaHandPointRight className="icon" />
                    <h3>Bagaimana cara mendapatkan aplikasi ini?</h3>
                </div>
                <h4>Anda hanya perlu mengunduh melalui appstore ataupun playstore tergantung device anda dan mari penuhi kebutuhan buah hati kita.</h4>
                </div>
                </Col>
                <Col xs={12} md={6} xl={6}>
                <div className="section1">
                <div className="point">
                    <FaHandPointRight className="icon" />
                    <h3>Saya ingin memberi saran terkait fitur ataupun kritik, bagaimana caranya?</h3>
                </div>
                <h4>Anda dapat menghubungi kami melalui akun Instagram, atau dengan mengirim email ke salesperson kami.</h4>
                </div>
                <div className="section1">
                <div className="point">
                    <FaHandPointRight className="icon" />
                    <h3>Apakah perlu memiliki toko peralatan bayi untuk membuka jasa perentalan peralatan bayi di Momee?</h3>
                </div>
                <h4>Tidak, anda dapat menyewakan peralatan bayi yang telah bayi anda pakai sebelumnya.</h4>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
    );
}

export default FeatureComponent;
