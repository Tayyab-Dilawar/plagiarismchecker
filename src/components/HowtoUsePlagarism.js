import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const buttonsList = [
    {
        id: 1,
        title: 1,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
        id: 2,
        title: 2,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.',
    },
    {
        id: 3,
        title: 3,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.',
    },
    {
        id: 4,
        title: 4,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.',
    },
    {
        id: 5,
        title: 5,
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.',
    },
]


const HowtoUsePlagarism = () => {
    const [focusValue, setFocusValue] = useState(1);

    const changeId = (focusId) => {
        setFocusValue(focusId)
    }

    return (
        <section id="how-to-use" className='block plagarism-two-block'>
            <Container>
                <div className='title-holder'>
                    <h2>Plagiarism Software</h2>
                    <div className='hr-line'></div>
                </div>
                <Row>
                    <Col sm={12} className='mt-5'>
                        <div className='d-flex flex-row'>
                            <div className='d-flex flex-column mt-5'>
                                {buttonsList.map(buttonLst => {
                                    const styles = {
                                        color: buttonLst.id === focusValue ? 'white' : '',
                                        backgroundColor: buttonLst.id === focusValue ? '#5b4181' : '',
                                        borderColor: buttonLst.id === focusValue ? '#5b4181' : ''
                                    };
                                    return (
                                        <button className='btn btn-primary' style={styles} key={buttonLst.id} onClick={() => changeId(buttonLst.id)}>{buttonLst.title}</button>
                                    )
                                })}
                            </div>
                            <div className='plagarism-text-show'>
                                <p>
                                    {buttonsList[focusValue-1].description}
                                </p>
                            </div>
                        </div>

                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col sm={6}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text className='form-data'>
                                <i className="fa-solid fa-earth-americas"></i>
                            </InputGroup.Text>
                            <Form.Control type='text' placeholder="Enter URL to check plagiarim..." />
                            <InputGroup.Text className='form-data'>
                                <i className="fa-solid fa-paper-plane"></i>
                            </InputGroup.Text>
                        </InputGroup>
                    </Col>
                    {/* <Col sm={1}></Col> */}
                    <Col sm={6}>
                        <InputGroup className="mb-3">
                            <InputGroup.Text className='form-data'>
                                Browse...
                            </InputGroup.Text>
                            <Form.Control type='text' placeholder="Enter URL to check plagiarim..." />
                            <InputGroup.Text className='form-data'>
                                <i className="fa-solid fa-paper-plane"></i>
                            </InputGroup.Text>
                        </InputGroup>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col sm={6} className='position-relative'>
                        <button className='plagiarism-two-btn btn-one'>
                            <i className="fa-solid fa-check"></i>
                            <span>Check Plagiarism</span>
                        </button>
                    </Col>
                    <Col sm={6}>
                        <button className='plagiarism-two-btn' >
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <span>Try Another Search</span>
                        </button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HowtoUsePlagarism;