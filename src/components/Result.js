import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import img1 from '../images/result-1.png';
import img2 from '../images/result-2.png';
import img3 from '../images/result-3.png';

const Result = () => {
    return (
        <section id="result" className='block result-block'>
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className='result-block-images'>
                            <Image src={img1} />
                            <Image src={img2} />
                            <Image src={img3} />
                        </div>
                    </Col>
                </Row>
            </Container>

        </section >
    )
}

export default Result