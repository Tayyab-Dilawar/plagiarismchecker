import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

import img1 from '../images/contact-logo-1.png';
import img2 from '../images/contact-logo-2.png';
import img3 from '../images/contact-logo-3.png';
import img4 from '../images/contact-logo-4.png';
import img5 from '../images/contact-logo-5.png';
import img6 from '../images/contact-logo-6.png';


const Contact = () => {
    return (
        <section id="contact" className='block contact-block'>
            <Container>
                <div className='title-holder'>
                    <h2>Contact Us</h2>
                    <span className='hr-line'></span>
                </div>
                <Row className='mt-5'>
                    <Col sm={6}>
                        <div className='contact-block-div'>
                            <h4 className='contact-block-h4'>Contact Form</h4>
                            <Form className='contact-form'>
                                <Form.Control type='text' placeholder="Your Name" required className='mt-3' />
                                <Form.Control type='email' placeholder="Your Email" required className='mt-3' />
                                <Form.Control type='password' placeholder="Your Password" required className='mt-3' />
                                <Form.Control as="textarea" placeholder="Your message" required className='mt-3' />
                                {/* <div className='btn-holder'>
                                        <Button type='submit' className='btn btn-primary'>Submit</Button>
                                    </div> */}
                                <button type='submit' className='plagiarism-two-btn contact-btn mt-4 mb-5' >
                                    <i className="fa-solid fa-paper-plane"></i>
                                    <span>Submit</span>
                                </button>
                            </Form>
                        </div>
                    </Col>
                    <Col sm={2}></Col>
                    <Col sm={4}>
                        <div className='conact-icons'>
                            <h4 className='mb-5 contact-block-h4'>Contact Information</h4>
                            <p><i className="fa-solid fa-location-dot"></i> Office # 61, Regent Mall, Chen One Road, Faisalabad</p>
                            <p><i className="fa-solid fa-mobile-screen-button"></i> +92 300 6697558</p>
                            <p><i className="fa-regular fa-envelope"></i> contentmarker@gmail.com</p>
                        </div>
                        <div className='contact-block-images'>
                            <Image src={img1} />
                            <Image src={img2} />
                            <Image src={img3} />
                            <Image src={img4} />
                            <Image src={img5} />
                            <Image src={img6} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact;