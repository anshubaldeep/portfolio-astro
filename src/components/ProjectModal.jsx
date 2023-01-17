import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProjectModal = ({
    show, index, handleClose, proj
}) => {
  return (
    <Modal key ={index} show={show} onHide={()=>handleClose()} className='custom-map-modal' variant="dark" centered>
                        <Modal.Header closeButton>
                          <Modal.Title >{proj.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Row className='overflow-auto'>
                                <Col md={{span:9, order:'first' }} xs={{ span: 12, order: 'last' }} className='modal-image'>
                                    <div className='fullpage'>
                                    <LazyLoadImage
                                        alt={proj.alt}
                                        effect="blur" 
                                        className='img img-responsive w-100' 
                                        src={proj.fpScreenshot}
                                        loading='lazy'
                                    />
                                    </div>
                                </Col>
                                <Col xs={12} md={3} className='overflow-hidden project-content'>
                                    <p><span className='heading'>Technology Stack:</span><br/> <span className='content'>{proj.techStack.map(i=>('#'+i+'  '))}</span></p>
                                    <p className='mt-5'><span className='heading'>Description:</span><br/><p className='mt-2 content overflow-auto'><ul>{proj.description.split('.').map(i=><li>{i}</li>)}</ul></p></p>
                                    <p className='mt-2 mb-1 advisory d-sm-block d-md-none'>*Please scroll down to view Project Screenshots</p>
                                    <br/>
                                    
                                        {proj.link.length > 0 &&
                                                <Button variant='primary' className='visit-btn' href={proj.link} target='_blank'>VISIT</Button>   
                                        }
                                    
                                </Col>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={()=>handleClose()}>
                            Close
                          </Button>
                        </Modal.Footer>
                    </Modal>
  )
}

export default ProjectModal