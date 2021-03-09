import { Component } from "react";
import Particles from "react-tsparticles";
import Rellax from "rellax";
import Carousel from "react-bootstrap/Carousel";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./styles/homeStyles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: "Google Maps Places | React native",
          description: "React native Project using Google maps and Google places.",
          imgs: [
            {
              src:
                "https://github.com/hamzasajid1995/Google-Maps-Places-React-native/raw/master/Demo/20200519_235220.gif?raw=true",
            },
          ],
          detailsLink: "https://github.com/hamzasajid1995/Google-Maps-Places-React-native",
        },
        {
          title: "Google maps with carousel - React native",
          description: "React native project for google maps with carousel linked together.",
          imgs: [
            {
              src:
                "https://github.com/hamzasajid1995/google-maps-with-carousel-react-native/raw/master/demo/liveappdemo.gif?raw=true",
            },
            {
              src: "https://github.com/hamzasajid1995/google-maps-with-carousel-react-native/blob/master/demo/demo.gif?raw=true",
            },
          ],
          detailsLink: "https://github.com/hamzasajid1995/Google-maps-with-carousel-react-native",
        },
        {
          title: "Terra Santa Crypts",
          description: "Web Application using which users can add obituries and locate crypts on map",
          imgs: [{ src: "assets/img/terrasanta.jpg" }, { src: "assets/img/terrasanta2.jpg" }],
          detailsLink: "https://terrasanta.com.au",
        },
        {
          title: "Evenstar Enterprise",
          description: "Evenstar Enterprise",
          imgs: [{ src: "assets/img/evenstar.png" }],
          detailsLink: "https://evenstar.com.pk",
        },
      ],
    };
  }
  componentDidMount() {
    if (window.innerWidth >= 768) this.rellax = new Rellax(".rellax");
  }

  componentWillUnmount() {
    if (window.innerWidth >= 768) this.rellax && this.rellax.destroy && this.rellax.destroy();
  }
  render() {
    return (
      <div className="home">
        <div style={{ position: "fixed", top: 0, left: 0, overflow: "hidden", height: "100%", width: "100%" }}>
          <Particle />
        </div>

        <Navbar bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="https://github.com/hamzasajid1995" target="_blank" rel="noopener noreferrer">
                Github
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/hamza-1995/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </Nav.Link>
              <Nav.Link href="assets/docs/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div
          id="sectionHead"
          className="section d-flex justify-content-center align-items-center"
          style={{ pointerEvents: "none" }}
        >
          <div className="container py-5">
            <div className="row">
              <div className="col rellax" data-rellax-speed="-5">
                <h1 className="heading" style={{ color: "#fff" }}>
                  Hi, I'm Hamza
                </h1>
                <AnimateTyping className="animate-typing" />
              </div>
            </div>
          </div>
        </div>

        <div id="sectionAbout" className="section bg-light">
          <div className="container py-5">
            <div className="row">
              <div className="col">
                <h1 className="heading">About</h1>
                <p style={{ fontSize: "1.125rem", lineHeight: "1.35rem", color: "#000" }}>
                  I'm creating noice web experiences for the next generation of consumer-facing companies
                </p>
                <div>
                  <div className="mb-3">
                    <h3>Education</h3>
                    <ul>
                      <li>
                        <p className="font-weight-bold mb-0">NUST, Islamabad (Pakistan)</p>
                        <p style={{ fontStyle: "italic" }} className="text-secondary">
                          Bachelors of Science in Computer Science (2013 - 2017)
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="mb-3">
                    <h3>Experience</h3>
                    <div>
                      <ul>
                        <li>
                          <span className="font-weight-bold">
                            Roomy Pakistan (
                            <a href="https://roomy.pk" target="_black" rel="noopener noreferrer" className="font-weight-normal">
                              roomy.pk
                            </a>
                            )
                          </span>
                          {" - "}Software Engineer (Front-End Development lead)
                          <span style={{ fontStyle: "italic" }} className="text-secondary ml-3">
                            August 2018 - PRESENT
                          </span>
                        </li>
                        <li>
                          <span className="font-weight-bold">Simplicity Labs</span>
                          {" - "}Software Engineer
                          <span style={{ fontStyle: "italic" }} className="text-secondary ml-3">
                            September 2017 - June 2018
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mb-3">
                    <h3>Technicle Skills</h3>
                    <ul>
                      <li>
                        <span className="font-weight-bold">Web Development:</span> HTML, CSS, Bootstrap, Javascript (JQuery,
                        Reactjs, Redux, ElectronJs), AMP
                      </li>
                      <li>
                        <span className="font-weight-bold">Mobile Development:</span> React-Native (IOS, Android)
                      </li>
                      <li>
                        <span className="font-weight-bold">Desktop Development:</span> ElectronJs
                      </li>
                      <li>
                        <span className="font-weight-bold">Server-side Development:</span> Nodejs (Express.js), Python, PHP,
                        Firebase
                      </li>
                      <li>
                        <span className="font-weight-bold">Database Development:</span> MySQL, MSSQL, MongoDB
                      </li>
                      <li>
                        <span className="font-weight-bold">Version Control/Project Management:</span> Git, Bitbucket, Sourcetree,
                        Jira, Asana
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-3"></div>

        <div id="sectionProjects" className="section bg-white">
          <div className="container py-5">
            <div className="row">
              <div className="col">
                <h1 className="heading">Projects</h1>
                <div className="row justify-content-between">
                  {this.state.projects.map((item, index) => {
                    return (
                      <div className="col-12 col-md-6 col-lg-5" key={index}>
                        <div className="card shadow-sm my-5" style={{ width: "100%" }}>
                          <div style={{ height: "250px" }}>
                            <Carousel indicators={false}>
                              {item.imgs.map((item2, index2) => {
                                return (
                                  <Carousel.Item key={index2}>
                                    <ImageAnimated
                                      src={item2.src}
                                      className="card-img-top bg-light border-bottom"
                                      alt={item.title + " - " + index2}
                                      style={{ objectFit: "contain" }}
                                    />
                                  </Carousel.Item>
                                );
                              })}
                            </Carousel>
                          </div>
                          <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                            <a
                              href={item.detailsLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-sm btn-outline-secondary"
                            >
                              Details
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <a
                  href="https://github.com/hamzasajid1995"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-block mx-auto text-center"
                >
                  Show More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-3"></div>

        <div id="sectionContact" className="section">
          <div className="container py-5">
            <div className="row">
              <div className="col pt-5">
                <h1 className="heading">Get In Touch</h1>
                <p>
                  Email me at <a href="mailto:hamzasajid424@gmail.com">Hamzasajid424@gmail.com</a> <br />
                  Or find me on other platforms:{" "}
                  <a href="https://www.linkedin.com/in/hamza-1995/" target="_blank" rel="noopener noreferrer">
                    linkedin
                  </a>
                  {" & "}
                  <a href="https://github.com/hamzasajid1995" target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer
          id="sectionFooter"
          className="section"
          style={{
            backgroundColor: "rgba(255,255,255,0.7)",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
          className="py-5"
        >
          Copyright © 2021. All rights reserved.
        </footer>
      </div>
    );
  }
}

function ImageAnimated(props) {
  return (
    <img
      onLoad={(e) => {
        e.target.style.opacity = 1;
      }}
      onError={(e) => {
        e.target.classList.add("image-error");
      }}
      {...props}
      loading="lazy"
      style={{ opacity: 0, transition: "1s opacity ease-in-out", ...props.style }}
    />
  );
}

function Particle() {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "#000013",
          },
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
  );
}

class AnimateTyping extends Component {
  state = {
    text: "",
  };

  componentDidMount() {
    this.speed = 50;
    this.i = 0;
    this.index = 0;
    this.typeWriter();
  }

  typeWriter = () => {
    let texts = ["A Full-Stack Engineer.", "A Javascript Specialist."];
    let text = texts[this.index];
    let text2 = this.state.text;

    if (this.i < text.length) {
      text2 += text.charAt(this.i);
      this.i++;
      this.setState({ text: text2 }, () => {
        this.timeout1 = setTimeout(this.typeWriter, this.speed);
      });
    } else {
      this.index++;
      this.i = 0;
      this.timeout2 = setTimeout(() => {
        this.setState({ text: "" }, () => {
          if (this.index < texts.length) {
          } else {
            this.index = 0;
          }
          this.timeout3 = setTimeout(this.typeWriter, this.speed);
        });
      }, 1000);
    }
  };

  componentWillUnmount = () => {
    this.timeout1 && clearTimeout(this.timeout1);
    this.timeout2 && clearTimeout(this.timeout2);
    this.timeout3 && clearTimeout(this.timeout3);
  };

  render() {
    return <p {...this.props}>I'm {this.state.text}</p>;
  }
}

export default App;
