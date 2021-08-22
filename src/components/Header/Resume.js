import React,{useState} from 'react'
import './Resume.css'
import { Card,Navbar, Nav, Container, ProgressBar, Offcanvas,Image,Button } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';
import Zoom from 'react-reveal/Zoom'
import Fade from 'react-reveal/Fade'
import Shake from 'react-reveal/Shake'
// import {Slider} from '@material-ui/lab'
import MenuIcon from '@material-ui/icons/Menu';
import ReactPic from '../../react.jpg'
import NodePic from '../../node.jpg'
import ProfilePicture from '../../Photo.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

const Resume = () =>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return(
    <div>
      <div className="desktop">
        <Navbar bg="black" sticky="bottom" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Balogun jamiu</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#skills">Skills</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#education">Education</Nav.Link>
      <Nav.Link href="#certification">Certification</Nav.Link>
      <Nav.Link href="#education">Experience</Nav.Link>
      <Nav.Link href="#hobbies">Hobbies</Nav.Link>
    </Nav>
    <Navbar.Brand href="#home"><img  alt="HNG logo" className="header__title" src='https://www.logolynx.com/images/logolynx/s_f8/f87fd3b9b3fb411a37d90d3bf4bd9464.jpeg'/></Navbar.Brand>
    </Container>
    </Navbar>
          </div>
          <header className="header">
          <div className="mobile">
          <Button variant="primary" onClick={handleShow}>
        <MenuIcon></MenuIcon>
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>Balogun jamiu</p>
          <div><Image className="about-pic" src={ProfilePicture} roundedCircle fluid/></div>
        
        <div>
        <ol>
               <Nav className="me-auto"> 
              <li><Nav.Link href="#features">Skills</Nav.Link></li>
               <li><Nav.Link href="#about">About</Nav.Link></li>
              <li><Nav.Link href="#education">Education</Nav.Link></li>
              <li><Nav.Link href="#certification">Certification</Nav.Link></li>
              <li><Nav.Link href="#education">Experience</Nav.Link></li>
              <li><Nav.Link href="#hobbies">Hobbies</Nav.Link></li>
            </Nav>
      
        </ol>
        </div>
        </Offcanvas.Body>
      </Offcanvas>
          </div>
          
    <         Zoom>
             <div className="typing">
             <h1> I am  <ReactTypingEffect text={[" a frontend ", " a backend "]}/> web developer </h1>
               </div>

               </Zoom>    
        </header>
        <div className="content-container">
                                      
        <div  id="skills" className=''>
                         <h2 className="skills-title">Proficiency</h2>
                         <Shake>
                       <div  className="skills">
                          <h3> Frontend(Reactjs)</h3>
                       <ProgressBar variant="success"  animated now={65} />
                       </div>
                       <div id="skills" className="skills">
                          <h3> Backend(Nodejs)</h3>
                       <ProgressBar variant="success"  animated now={60} />
                       </div>
                       <div id="skills" className="skills">
                          <h3>Programming</h3>
                       <ProgressBar variant="success"  animated now={80} />
                       </div>
                              </Shake>

                       </div>

                       <Fade left>
                        <div className="line"></div>
                            </Fade>
                            <h3 className="career-objectives_b">About me</h3>
                      <div id="about" className="about">
                      <Fade left>
                                <h5 className="about-text">To be in a position where I can maximize my potential as a productive and active individual
giving quality performance at all times for the attainments of the goal of the organization I
become part of. I am committed to maintaining the organization’s standard and reputation. In
addition, the world is innovation driven, with passion I will relentlessly contribute immensely to
the greatness of the company</h5>
                                </Fade>
                                <Fade right>
                                  <Image className="about-pic" src={ProfilePicture} roundedCircle fluid/>
                                </Fade>
                      </div>
                      <div id="education" className="education">
                      <h3 className="career-objectives_b">Education Backgrounds With Dates</h3>
                      <Fade left>
                        <div className="line"></div>
                            </Fade>

                    <div className="data_b">
                      <p>(OND)Kwara State Polythecnic</p>
                      <p>2018 –2021</p>
                    </div>
                    <div className="data_b">
                      <p>O’Level WASSCE (St. Lawrence Greater Heights College)</p>
                      <p>2013-2016</p>
                    </div>
                    <div className="data_b">
                      <p>Hope International Nur/primary school. </p>
                      <p>2005-2010</p>
                    </div>
                      </div>
                      <div id="certification" className="achievement push">
                      <h3 className="career-objectives_b">Programming Certificates</h3>
                      <Fade right>
                        <div className="line"></div>
                            </Fade>
                              <div className="achievement-body">

                            <Card style={{ width: '18rem' }}>
                                  <Card.Img variant="top" src={ReactPic} />
                                  <Card.Body>
                                    <Card.Title>React certificate</Card.Title>
                                    <Card.Text>
                                      certicate offered by udemy
                                    </Card.Text>
                                  </Card.Body>

                                </Card>
                                <Card style={{ width: '18rem' }}>
                                  <Card.Img variant="top" src={NodePic} />
                                  <Card.Body>
                                    <Card.Title>Node certicate </Card.Title>
                                    <Card.Text>
                                    Certificate offered by udemy
                                                                        </Card.Text>
                                  </Card.Body>
                                </Card>
                              </div>
                      </div>
                                  <div id="experience" className="Work experience">
                                  <h3 className="career-objectives_b">Experience</h3>
                                  <Fade right>
                                    <div className="line"></div>
                                         </Fade>
                                         <div className="dt push">
                                          <p >ZionWol Solutions </p>
                                          <p >2017-2018</p>
                                        </div>    
                    <div className="dt" >
                      <p>Kpie Trades and Services.</p>
                      <p >2021-Till date</p>
                    </div>
                                  </div>




                                  <div id="hobbies" className="Hobbies">
                                  <h3 className="career-objectives_b">Hobbies</h3>
                                  <Fade left>
                                    <div className="line"></div>
                                         </Fade>
                                         <div className="dt push">
                                          <p >Coding</p>
                                        </div>    
                    <div className="dt" >
                      <p>Reading</p>
                    </div>
                                  </div>
                                  <div>
                                  <h3>My Portfolio</h3>
                                  <Button variant="outline-dark"><a href="https://balogunjamiu-portfolio.netlify.app/">My portfolio</a></Button>
                                  </div>
              <footer>
                <p>Design By balogun jamiu</p></footer>        
        </div> 


</div>

     
)}

  export default Resume