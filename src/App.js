import './App.css';
import 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faChartArea } from '@fortawesome/free-solid-svg-icons';
import { faWrench } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";


function App(props) {
    function Header({headerTxt,subTxt})
    {
       return (
           <header>
               {/* Start Logo Section */}
               <section id="logo-section" className="text-center">
                   <div className="container">
                       <div className="row">
                           <div className="col-md-12">
                               <div className="logo text-center">
                                   <h1>{headerTxt}</h1>
                                   <span><h3>{subTxt}</h3></span>
                               </div>
                           </div>
                       </div>
                   </div>
               </section>
               {/*} End Logo Section */}
           </header>
       );
    }

    function MainContent()
    {
      return (
          <main-content>
              {/* Start Main Body Section */}
              <div className="mainbody-section text-center">
                  <Container>
                      <Row>

                          <Col md={3}>

                              <div className="menu-item gold" style={{ height: '141px' }}>
                                  <a href="#feature-modal" data-toggle="modal">
                                      <FontAwesomeIcon icon={faCode} size="6x" />
                                      <p>Angular</p>
                                  </a>
                              </div>

                              <div className="menu-item black" style={{ height: '141px' }}>
                                  <a href="#portfolio-modal" data-toggle="modal">
                                      <FontAwesomeIcon icon={faHtml5} size="6x" />
                                      <p>Websites</p>
                                  </a>
                              </div>

                              <div className="menu-item gold" style={{ height: '141px' }}>
                                  <a href="#about-modal" data-toggle="modal">
                                      <FontAwesomeIcon icon={faUser} size="6x" />
                                      <p>About Us</p>
                                  </a>
                              </div>

                          </Col>

                          <Col md={6}>

                              {/* Start Carousel Section */}
                              <div className="home-slider">
                                  <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                                      {/* Indicators */}
                                      <ol className="carousel-indicators">
                                          <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                                          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                                      </ol>

                                      {/* Wrapper for slides */}
                                      <div className="carousel-inner">
                                          <div className="item active">
                                              <img src="./images/ihop.jpg" className="img-responsive" alt="" />
                                          </div>
                                          <div className="item">
                                              <img src="./images/planmember.jpg" className="img-responsive" alt="" />
                                          </div>
                                          <div className="item">
                                              <img src="./images/goarmy.jpg" className="img-responsive" alt="" />
                                          </div>

                                      </div>

                                  </div>
                              </div>

                              {/* Start Carousel Section */}
                              <Row style={{ paddingTop: '5%' }}>
                                  <Col md={6}>
                                      <div className="menu-item black responsive" style={{ height: '141px' }}>
                                          <a href="#service-modal" data-toggle="modal">
                                              <FontAwesomeIcon icon={faChartArea} size="6x" />
                                              <p>Projects</p>
                                          </a>
                                      </div>
                                  </Col>

                                  <Col md={6}>
                                      <div className="menu-item gold responsive-2" style={{ height: '141px' }}>
                                          <a href="#team-modal" data-toggle="modal">
                                              <FontAwesomeIcon icon={faWrench} size="6x" />
                                              <p>Tools</p>
                                          </a>
                                      </div>
                                  </Col>

                              </Row>

                          </Col>

                          <Col md={3}>

                              <div className="menu-item black" style={{ height: '141px' }}>
                                  <a href="#contact-modal" data-toggle="modal">
                                      <FontAwesomeIcon icon={faEnvelopeOpen} size="6x" />
                                      <p>Contact</p>
                                  </a>
                              </div>

                              <div className="menu-item gold" style={{ height: '141px' }}>
                                  <a href="#testimonial-modal" data-toggle="modal">
                                      <FontAwesomeIcon icon={faComment} size="6x" />
                                      <p>Social Media</p>
                                  </a>
                              </div>

                              <div className="menu-item black" style={{ height: '141px' }}>
                                  <a href="#news-modal" data-toggle="modal">
                                      <FontAwesomeIcon icon={faNewspaper} size="6x" />
                                      <p>Latest News</p>
                                  </a>
                              </div>

                          </Col>

                      </Row>
                  </Container>
              </div>
              {/* End Main Body Section */}
          </main-content>
      )
    }

    function Footer()
    {
        return (
            <footer>

            </footer>
        )
    }
    return (
        <div className="App">
            <Header
                headerTxt="Ricardo Peinado"
                subTxt="Improving one website at a time"
            />,
            <MainContent />,
            <Footer />
        </div>
    );
}

export default App;
