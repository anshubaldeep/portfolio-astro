import React, { useEffect, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../../Assets/logo.webp';
import Scrollspy from 'react-scrollspy';
import ThemeChanger from '../ThemeChanger.jsx';
import Container from 'react-bootstrap/Container';


const NavbarComponent=()=>{
      const [state,setState]=useState({
        show: true,
        scrollPos: 0
    });
    const [expand,setExpand]=useState(false);
    
    const handleScroll=()=> {
        const { scrollPos } =state;
        setState({
          scrollPos: document.body.getBoundingClientRect().top,
          show: document.body.getBoundingClientRect().top > scrollPos
        });
      }

    const handleExpand=()=>{
      setExpand(!expand);
    }

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        return()=>{
            window.removeEventListener("scroll", handleScroll);
        }
    })


    
  const navItems=[
                    {
                      name:'About',
                      id:'#about'
                    },
                    {
                      name:'Work',
                      id:'#work'
                    },
                    {
                      name:'My Journey',
                      id:'#myjourney'
                    },
                    {
                      name:'Contact',
                      id:'#contact'
                    },
                  ];
  const nav=navItems.map((i,index)=> <Nav.Item key={index}><li><Nav.Link href={i.id}  className=''>{i.name}/&gt;</Nav.Link></li> </Nav.Item>);
 
    return(
        <Navbar fixed ='top' collapseOnSelect expand="md" variant="dark" className={`${state.show ? "active-navbar" : "hidden-navbar"} ${expand?'navbar-expanded':''}`} onToggle={handleExpand}>
        <Container>
        <Navbar.Brand href="#home"><img className='navbar-logo' src={logo} alt='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='ml-auto text-center' >
          <Scrollspy items={ ['home', 'about', 'work','myjourney','contact'] } currentClassName="active-option">
          <Nav.Item><li><Nav.Link className='' href='#home'>Start/&gt;</Nav.Link></li> </Nav.Item>
          {nav}
          <Nav.Item><li><Nav.Link className=''><ThemeChanger/></Nav.Link></li> </Nav.Item>
          </Scrollspy>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavbarComponent;