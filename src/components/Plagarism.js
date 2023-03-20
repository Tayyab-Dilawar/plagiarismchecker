import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


import img1 from '../images/plag-one.png';

const Plagarism = () => {
    return (
        <section id="home" className='block plagarism-block'>
            <Container>
                <Row>
                    <Col sm={6}>
                        <Image src={img1} className="plagarism-image" />
                    </Col>
                    <Col sm={6}>
                        <p className='plagarism-p'>
                            Plagiarism is the illegal use and theft of someone else's published work or written material. Material like, academic papers, articles, web content and books are considered as the spirtual properties of the creator. These properties are actually protected by the copyright laws and it is forbidden for everyone to take advantage or to use them without the consent of the aurthor. Plagiarism takes places when a person copies someone else's published work and use it as his own. Copying and pasting the same work from internet has now become a menace. Not only it hammers an individual's creativity, but it also taints the writing abilities of the plagiarists.
                        </p>
                    </Col>
                </Row>
            </Container>

        </section >
    )
}

export default Plagarism;