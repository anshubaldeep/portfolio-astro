import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Tilt from 'react-tilt';
import projects from '../Data/ProjectData';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ProjectModal = React.lazy(() => import('./ProjectModal'));
const WorkSection=()=>{
        const [project,setProject]=useState({});

        const handleClose =(id)=>{
            const newProjects=[...projects];
            newProjects[id].modalShow=false;
            setProject(newProjects);
        }

        const handleShow =(id)=>{
            const newProjects=[...projects];
            newProjects[id].modalShow=true;
            setProject(newProjects);
        }

        const projectImages=projects.map((proj,index)=>{
            return (
                
                <Col md={6} sm={12} className="d-flex justify-content-center mt-md-5 mt-2" key={index}>
                    <Tilt className="Tilt" options={{ max : 25 , scale: 1.1}} style={{ height: 441, width: 450 }}>
                        <Card className="bg-transparent text-center ml-md-0 ml-5" onClick={()=>setProject(proj)}>
                            <Card.Img as={LazyLoadImage} src={proj.path} alt={proj.alt} loading="lazy" className='img-fluid'/>
                            <Card.ImgOverlay className="text-left">
                                <Card.Title className='tilt-inner font-weight-bold text-left' style={{position:"absolute",bottom:40 , left:-45,width:'260px'}}>{proj.name}<hr/><p className='mt-4' style={{fontSize:'0.5em'}}>→ 0{proj.id}</p></Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </Tilt>
                </Col>
            )
        })

        return(
            <>
            <Container className='work mt-5' id='work'>
            <Row>
            <Col className='position-relative'>
                <p className='section-start'>Work/&gt;</p>
                <h4>Some selected projects.....</h4>
                <br/> 
                <div id='web' className='mb-3 d-none d-sm-none d-md-block img-responsive'></div>
                <Row className='justify-content-center'>
                    {projectImages}
                </Row>
            </Col>
            </Row>
            <br/>
            </Container>
            <React.Suspense fallback={<div>Loading...</div>}>
                {
                    Object.keys(project).length>0 && (
                        <ProjectModal
                            show={Object.keys(project).length>0}
                            index={project.id}
                            handleClose={()=>setProject({})}
                            proj={project}
                        />
                    )
                }
            </React.Suspense>
            </>
        );
}

export default WorkSection;