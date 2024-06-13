import { Container, Row, Col } from "react-bootstrap";
import './feature.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBabyCarriage, FaHandHoldingHeart, FaDollarSign , FaClock } from 'react-icons/fa';


function FeatureComponent() {
    return (
        <section className="feature" id="feature">
        <Container>
            <div className="title">
                <h1>Our Features</h1>
                <h2>3 juta bayi tidak mendapatkan kebutuhan sepenuhnya</h2>
            </div>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={6}>
                    <div className="point">
                        <FaHandHoldingHeart className="icon" />
                        <h3>Banyaknya Keperluan Bayi yang Tidak Terpakai Setelah Bayi Mulai Besar</h3>
                    </div>
                    <div className="point">
                        <FaClock className="icon" />
                        <h3>Banyaknya Keperluan Bayi yang Dibutuhkan Dalam Jangka Pendek  </h3>
                    </div>
                </Col>
                <Col xs={12} md={6} xl={6}>
                    <div className="point">
                        <FaDollarSign className="icon" />
                        <h3>Mahalnya Keperluan Bayi yang Tersedia di Market</h3>
                    </div>
                    <div className="point">
                        <FaBabyCarriage className="icon" />
                        <h3>Sulitnya Mencari Toko Rental Terlebih untuk Keperluan Bayi</h3>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    );
}

export default FeatureComponent;
