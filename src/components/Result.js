import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Testing from './Testing';

const Result = () => {
    return (
        <section id="result" className='block result-block'>
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className='result-block-images'>
                            <Testing color='#5b4181' percentage={100} />
                            <Testing color='#449d44' percentage={30} />
                            <Testing color='#c9302c' percentage={70} />
                        </div>
                    </Col>
                </Row>
            </Container>

        </section >
    )
}

export default Result