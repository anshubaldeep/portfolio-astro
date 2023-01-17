import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Avatar from '../Assets/Avatar.webp';
import ReactRotatingText from 'react-rotating-text';



const JumbotronComponent=(props)=>{
        const develop=['websites','webapps','mobile-apps','ux/ui'];
        
        return(
            <div fluid className="jumbotron w-100 section align-items-center" id='home'>
                <Container>
                    <Row>
                        <Col lg={8}  md={6} xs={12} className=''>
                            <p className='section-start'>Start/&gt;</p>
                            <h1>Hi, my name is <span className='name font-weight-bold'>Baldeep Singh</span></h1>
                            <h1>I <span className='font-italic'>design</span> and <span className='text-monospace'>develop</span><br/> <ReactRotatingText className='rotating-text' items={develop} /></h1>
                            <h4 className="mt-md-3">Let me show You....</h4>
                            <button className='btn-custom custom-btn d-none d-md-block d-sm-none' onClick={props.showModal}>Contact Me   ➔</button>
                        </Col>
                        <Col lg={4} md={6} xs={12}>
                            <div className='text-center'>
                                <img src={Avatar} alt='My_Avatar' className='img img-responsive'/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
}

export default JumbotronComponent;