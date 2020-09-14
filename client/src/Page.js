import React, { useState } from "react";
import axios from "axios";
import Particles from "react-particles-js";
import titleShape from "./assets/title-shape.png";
import aboutShape from "./assets/about-shape.png";
import Project from "./components/Project";

function Page() {
  const [projects] = useState([
    {
      title: "Blogify",
      desc:
        "Full stack app to create blog posts with the ability to choose either private or public post.",
      tech:
        "Node.js, Express, JWT, React.js, Router, Animations ",
      link: "https://danousis.com/blogify/",
    },
    {
      title: "Barup",
      desc:
        "A simple app to find cocktail recipes and manage the stock inventory.",
      tech: "React.js, Router, Animations ",
      link: "https://derbakias.github.io/barup/",
    },
    {
      title: "StockBox",
      desc:
        "Stock dashboard using the Alpha Vantage API and Apex charts to visualise the data.",
      tech:
        "HTML, CSS3/Flexbox, JavaScript/fetch API, ApexCharts",
      link: "https://derbakias.github.io/stockbox",
    },
    {
      title: "Expensier",
      desc:
        "Single page app without framework to keep track of your budget, just old good JavaScript! OOP and MVC based architecture!",
      tech: "CSS flexbox, JavaScript OOP, ApexCharts",
      link: "https://derbakias.github.io/expenses-tracker/",
    },
    {
      title: "John Hendricks",
      desc:
        "Fully responsive showcase website for a financial management service provider.",
      tech: "HTML, CSS3, Bootstrap",
      link:
        "https://derbakias.github.io/John-Hendricks-Group/",
    },
    {
      title: "Alarm",
      desc: "A funny clock alarm web app.",
      tech: "HTML, CSS3, Flexbox, JavaScript",
      link: "https://derbakias.github.io/analog-clock/",
    },
  ]);

  const [status, setStatus] = useState({
    classname: "nothing",
    msg: "",
  });

  const sendmail = (e) => {
    e.preventDefault();
    axios
      .post("/api/send-email", {
        name: e.target[0].value,
        email: e.target[1].value,
        message: e.target[2].value,
      })
      .then((res) => {
        setStatus((prev) => ({
          classname: "success",
          msg: res.data.msg,
        }));
        const off = setTimeout(() => {
          setStatus((prev) => ({
            classname: "nothing",
            msg: " ",
          }));
          clearTimeout(off);
        }, 3500);
      })
      .catch((err) => {
        console.log(err.response);
        setStatus((prev) => ({
          classname: "failed",
          msg: err.response.data.msg,
        }));
        const off = setTimeout(() => {
          setStatus((prev) => ({
            classname: "nothing",
            msg: " ",
          }));
          clearTimeout(off);
        }, 3500);
      });
    e.target.reset();
  };
  return (
    <main>
      <section className="title">
        <div className="title-container">
          <Particles
            height="100vh"
            params={{
              particles: {
                number: {
                  value: 30,
                  density: {
                    enable: true,
                    value_area: 500,
                  },
                },
                color: {
                  value: "rgba(225, 245, 224)",
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "rgba(225, 245, 224)",
                  },
                  polygon: {
                    nb_sides: 3,
                  },
                },
                opacity: {
                  value: 0.8,
                  random: false,
                },
                size: {
                  value: 10,
                  random: true,
                },
                line_linked: {
                  enable: true,
                  distance: 300,
                  color: "#e1f5e0",
                  opacity: 0.6,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 5,
                  direction: "none",
                  random: true,
                  straight: false,
                  out_mode: "out",
                  bounce: false,
                },
              },
              interactivity: {
                detect_on: "canvas",
                events: {
                  onhover: {
                    enable: true,
                    mode: "grab",
                  },
                  onclick: {
                    enable: true,
                    mode: "push",
                  },
                  resize: false,
                },
                modes: {
                  grab: {
                    distance: 300,
                    line_linked: {
                      opacity: 0.5,
                    },
                  },
                  bubble: {
                    distance: 300,
                    size: 50,
                    duration: 2,
                    opacity: 0.8,
                    speed: 3,
                  },
                  repulse: {
                    distance: 400,
                    duration: 0.4,
                  },
                  push: {
                    particles_nb: 4,
                  },
                  remove: {
                    particles_nb: 2,
                  },
                },
              },
              retina_detect: true,
            }}
          />
          <div className="title-wrapper">
            <div className="title-elements">
              <h1>Dimitris Danousis</h1>
              <h2>Web Developer</h2>
              <div className="title-shape-wrapper">
                <img
                  src={titleShape}
                  alt="geometrical shape"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about" id="about-me">
        <div className="about-wrapper container">
          <h3>About Me</h3>
          <img src={aboutShape} alt="box shapes" />
          <p>
            A freelance front-end developer based in London,
            UK. Being passionate with creative activities
            since a very young age. Love playing with music,
            technology and discover new gadgets! My work
            currently consists of several projects. Very
            recently I started experimenting with full stack
            development. I have used several tools and
            libraries to solve a variety of problems.
          </p>
        </div>
      </section>
      <section className="skills" id="skills">
        <div className="skills-container container">
          <h3>Skills</h3>
          <div className="skills-wrapper">
            <div className="skill">
              <i className="devicon-html5-plain-wordmark"></i>
              <p>HTML5</p>
            </div>
            <div className="skill">
              <i className="devicon-css3-plain-wordmark"></i>
              <p>CSS3</p>
            </div>
            <div className="skill">
              <i className="devicon-bootstrap-plain"></i>
              <p>Bootstrap</p>
            </div>
            <div className="skill">
              <i className="devicon-javascript-plain"></i>
              <p>JavaScript</p>
            </div>
            <div className="skill">
              <i className="devicon-react-original"></i>
              <p>React.js</p>
            </div>
            <div className="skill">
              <i className="devicon-nodejs-plain"></i>
              <p>Node.js</p>
            </div>
            <div className="skill">
              <i className="devicon-express-original"></i>
              <p>Express.js</p>
            </div>
            <div className="skill">
              <i className="devicon-mongodb-plain"></i>
              <p>mongoDB</p>
            </div>
            <div className="skill">
              <i className="devicon-visualstudio-plain"></i>
              <p>Visual Studio</p>
            </div>
            <div className="skill">
              <i className="devicon-git-plain"></i>
              <p>Git</p>
            </div>
            <div className="skill">
              <i className="devicon-github-plain"></i>
              <p>GitHub</p>
            </div>
            <div className="skill">
              <i className="devicon-linux-plain"></i>
              <p>Linux</p>
            </div>
            <div className="skill">
              <i className="devicon-photoshop-plain"></i>
              <p>Photoshop</p>
            </div>
            <div className="skill">
              <i className="devicon-illustrator-plain"></i>
              <p>Illustrator</p>
            </div>
          </div>
          <a className="cv-btn" href="/api/cv">
            Get My CV!
          </a>
        </div>
      </section>
      <section className="projects" id="projects">
        <div className="projects-container container">
          <h3>Projects</h3>
          <div className="projects-wrapper">
            {projects.map((project, index) => {
              return (
                <Project key={index} project={project} />
              );
            })}
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="contact-container container">
          <div className="text-column">
            <h3>Let's Talk!</h3>
            <p>
              I'd love to hear from you! Either you have an
              existing project which you'd like to remake or
              maybe you just have an idea, I can help you
              bring this idea to the world. Let's have a
              chat!
            </p>
            <div className="contact-icons">
              <a
                href="https://www.linkedin.com/in/dimitrios-danousis/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/Derbakias"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github-square"></i>
              </a>
            </div>
          </div>
          <div className="form-column">
            <form onSubmit={sendmail}>
              <h3 className={status.classname}>
                {status.msg}
              </h3>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
                required
              ></textarea>
              <button>Send!</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Page;
