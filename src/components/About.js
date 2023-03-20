import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const About = () => {
    return (
        <section id="about" className='block about-block'>
            <Container>
                <div className='title-holder'>
                    <h2>About Us</h2>
                </div>
                <Row>
                    <Col sm={12} className='mt-4'>
                        <p className='about-block-p'>
                            <span className='hr-line'></span>
                            Plagiarism is the illegal use and theft of someone else's published work or written material. Material like, academic papers, articles, web content and books are considered as the spirtual properties of the creator. These properties are actually protected by the copyright laws and it is forbidden for everyone to take advantage or to use them without the consent of the aurthor. Plagiarism takes places when a person copies someone else's published work and use it as his own. Copying and pasting the same work from internet has now become a menace. Not only it hammers an individual's creativity, but it also taints the writing abilities of the plagiarists.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About;