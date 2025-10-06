import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import ContactForm from './ContactForm';

const roles = [
  "Frontend Designer",
  "Full Stack Developer",
  "UI / UX Designer",
  "Web Developer",
  "Backend Developer"
];

const Portfolio = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [displayedText, setDisplayedText] = useState('');

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  // Typing animation effect
  useEffect(() => {
    let timeout;
    if (typing) {
      if (charIndex < roles[roleIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + roles[roleIndex].charAt(charIndex));
          setCharIndex(charIndex + 1);
        }, 100);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCharIndex(charIndex - 1);
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setTyping(true);
          setRoleIndex((roleIndex + 1) % roles.length);
        }, 500);
      }
    }
    return () => clearTimeout(timeout);
  }, [charIndex, typing, roleIndex]);

  // Fade-in animation on load
  useEffect(() => {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(el => {
      el.style.opacity = 0;
      el.classList.add('fade-in');
    });
  }, []);

  return (
    <>
      <header className="header">
        <a href="#home" className="logo">
          Ibran <span>Siddique</span>
        </a>
        <i
          className={`fa-solid ${menuActive ? 'fa-xmark' : 'fa-bars'}`}
          id="menu-icon"
          onClick={toggleMenu}
          style={{ cursor: 'pointer' }}
        ></i>
        <nav className={`navbar ${menuActive ? 'active' : ''}`}>
          <a href="#Home" className="active">Home</a>
          <a href="#Education">Education</a>
          <a href="#Services">Services</a>
          <a href="#Testimonials">Testimonials</a>
          <a href="#Contact">Contact</a>
        </nav>
      </header>

      <section className="home" id="Home">
        <div className="home-content">
          <a href="https://web.whatsapp.com/"></a>
          <h1>
            Hi, It's <span>Ibran</span>
          </h1>
          <h3>
            I'm a <span className="role-text">{displayedText}</span>
          </h3>
          <p>
            My name is Ibran Siddique. I am currently pursuing a Bachelor of Science in Information Technology (B.Sc. IT) at B.K. Birla College. In addition to my academic studies, I am also engaged in developing soft skills, which play a vital role in personal and professional growth.
          </p>

          <div className="social-icons">
            <a href="https://www.linkedin.com/in/ibran-siddique-00346b339/"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://github.com/Ibran52"><i className="fa-brands fa-github"></i></a>
            <a href="https://www.instagram.com/ibran._.02/"><i className="fa-brands fa-instagram"></i></a>
            <a href="https://github.com/Ibran52/taskwavelength.git"><i className="fa-brands fa-twitter"></i></a>
          </div>

          <div className="btn-group">
            <a href="#" className="btn hire-btn">Hire</a>
            <a href="#Contact" className="btn contact-btn">Contact</a>
          </div>
        </div>

        <div className="home-img">
          <img src="me.jpg" alt="Profile Picture" />
        </div>
      </section>

      <section className="Education" id="Education">
        <h2 className="heading">Education</h2>

        <div className="timeline-items">
          <div className="timeline-item">
            <div className="timeline-dot"> </div>
            <div className="timeline-date">2020-2021</div>
            <div className="timeline-content">
              <h3>School</h3>
              <p>Academic Profile
                Location:
                [ Thane - 421003,Ulhasnagar - 05, Maharashtra, India]

                Board of Education:
                [My educational board: Maharashtra State Board,]

                10th Grade (SSC/Matriculation):

                Successfully passed the 10th standard board examination.

                Scored 67.67% in the final board exam.

                Completed schooling from B.G. Tilak English High School.

                Year of Completion:
                [ 2020-2021 , 10th standard]</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2023–2024</div>
            <div className="timeline-content">
              <h3>Higher Secondary Education</h3>
              <p>
                Name of Institution:
                New English Junior College, Ulhasnagar-05

                Location:
                Ulhasnagar, Maharashtra

                Duration of Study:
                2 Years (11th and 12th Standard)

                Stream:
                [My  stream: Commerce.]

                Academic Performance:

                11th Standard:

                Successfully completed the 11th standard.

                Academic year: 2022–2023

                12th Standard (HSC – Higher Secondary Certificate):

                Successfully passed the 12th standard board examination.

                Academic year: 2023–2024

                Secured 68.67% in the HSC Board Examination!</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"> </div>
            <div className="timeline-date">2024-2028</div>
            <div className="timeline-content">
              <h3>University</h3>
              <p>Ibran Siddique
                I am currently pursuing a Bachelor of Science in Information Technology (B.Sc. IT) at B.K. Birla College. Alongside my academic studies, I am actively developing soft skills that are essential for both personal and professional growth. I successfully cleared my first semester with an A++ grade, achieving a CGPA of 9.82.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"> </div>
            <div className="timeline-date">2024-2027</div>
            <div className="timeline-content">
              <h3>Inernship</h3>
              <p>I am currently pursuing a Bachelor of Science in Information Technology (B.Sc. IT) at B.K. Birla College, where I have developed a strong academic foundation, securing an A++ grade with a CGPA of 9.82 in my first semester. Alongside my studies, I am actively building practical skills in modern technologies with a focus on becoming a proficient MERN stack developer. I have been working with JavaScript, HTML, CSS, Node.js, Express.js, MongoDB, and React.js/Next.js, and I am also exploring the integration of AI tools and technologies to enhance web development. I am currently seeking internship opportunities where I can apply and expand these skills in a professional environment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="Services" id="Services">
        <h2 className="heading">Services</h2>
        <div className="services-container">
          <div className="service-box">
            <div className="services-info">
              <h4>HTML</h4>
              <p>I have recently completed a comprehensive course in HTML (HyperText Markup Language), which has strengthened my foundational skills in web development. Through this course, I gained in-depth knowledge of creating well-structured, semantic web pages using elements such as headings, paragraphs, lists, tables, forms, and multimedia integrations. I also learned best practices for writing clean and accessible code, understanding the importance of semantic tags for SEO and screen readers. JavaScript, and modern frameworks. Completing this course marks an important step in my journey toward becoming a full-stack developer.</p>
            </div>
          </div>

          <div className="service-box">
            <div className="services-info">
              <h4>CSS</h4>
              <p>I have successfully completed a CSS (Cascading Style Sheets) course, which has equipped me with the skills to design visually appealing and responsive web pages. Throughout the course, I gained a strong understanding of styling techniques including selectors, box model, positioning, flexbox, grid, animations, transitions, and responsive design using media queries. This project not only enhanced my technical proficiency but also improved my attention to detail and design aesthetics, preparing me for more advanced front-end development using frameworks like Bootstrap and Tailwind CSS.</p>
            </div>
          </div>

          <div className="service-box">
            <div className="services-info">
              <h4>JavaScript</h4>
              <p>I have recently started learning JavaScript to strengthen my front-end development skills. As I progress through the course, I am actively applying my knowledge by building small projects such as interactive forms, calculators, and dynamic web elements. These hands-on experiences are helping me understand core JavaScript concepts like variables, functions, events, loops, and DOM manipulation, laying a solid foundation for advanced JavaScript and full-stack development.</p>
            </div>
          </div>

          <div className="service-box">
            <div className="services-info">
              <h4>JAVA</h4>
              <p>I have begun learning Java to expand my understanding of object-oriented programming and backend development. Through this course, I am gaining knowledge of core Java concepts such as classes, objects, inheritance, polymorphism, exception handling, and file I/O. I am also working on small programs and console-based projects to strengthen my problem-solving and coding logic. This foundation is preparing me for more advanced topics like JavaFX, JDBC, and Spring Framework in the future.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="Testimonials" id="Testimonials">
        <div className="testimonial-box">
          <h2 className="heading">Testimonials</h2>

          <div className="wrapper">
            <div className="testimonials-item">
              <img src="page1.jpg" alt="image" />
              <h2>TO-DO-LIST</h2>
              <div className="rating">
                <i className="fa-solid fa-star" id="star"></i>
                <i className="fa-solid fa-star" id="star"></i>
                <i className="fa-solid fa-star" id="star"></i>
                <i className="fa-solid fa-star" id="star"></i>
                <i className="fa-solid fa-star" id="star"></i>
              </div>

              <p>I’m excited to share a new project I’ve been working on—a fully functional To-Do List app built using Replit for development, Vercel for deployment, and Xano as the backend and database solution. This project allowed me to explore the power of no-code/low-code tools while still applying full-stack principles. The app includes features like task creation, updating, deletion, and completion tracking—all connected to a real backend with a live database. Using Xano. This was a great opportunity to learn, experiment, and build something practical from scratch. I’d love for you to check it out and share any feedback! [https://github.com/Ibran52/taskwavelength.git]</p>
            </div>

            <div className="testimonials-item">
              <img src="page2.png" alt="" />
              <h2>Portfolio-project</h2>
              <div className="rating">
                <i className="fa-solid fa-star" id="star"></i>
                <i className="fa-solid fa-star" id="star"></i>
                <i className="fa-solid fa-star" id="star"></i>
                <i className="fa-solid fa-star" id="star"></i>
                <i className="fa-solid fa-star" id="star"></i>
              </div>

              <p>I'm proud to share my latest portfolio website, built entirely from scratch with hard coding—no templates, no AI, and no drag-and-drop builders. I used HTML, CSS, JavaScript (and optionally any frameworks you used—feel free to add them!) to design and develop every section by hand. The portfolio showcases my key projects, technical skills, and the journey I'm on as a developer. It was a challenging but rewarding experience that pushed me to solve real design and development problems the hands-on way. I'd really appreciate it if you checked it out and shared your thoughts! [Add your live portfolio link or GitHub repo here]</p>
            </div>

            <div className="testimonials-item">
              <img src="page3.png" alt="image" />
              <h2>Something New</h2>
              <div className="rating">
                <i className="fa-solid fa-star" id="star"></i>
                <i className="fa-solid fa-star" id="star"></i>
                <i className="fa-solid fa-star" id="star"></i>
                <i className="fa-solid fa-star" id="star"></i>
                <i className="fa-solid fa-star" id="star"></i>
              </div>

              <p>Excited to share that I’ve started working on a new project—fully hard-coded from scratch, no AI or templates involved. I'm focusing on building something real, functional, and clean, using only core web development skills. Can’t wait to share the final result soon. Stay tuned!</p>
            </div>
          </div>
        </div>
      </div>

      <section className="contact" id="Contact">
        <h2 className="heading">Contact <span>Me</span></h2>

        {/* Render ContactForm component */}
        <ContactForm />
      </section>

      <footer className="footer">
        <div className="social">
          <a href="https://www.linkedin.com/in/ibran-siddique-00346b339/"><i className="fa-brands fa-linkedin-in"></i></a>
          <a href="https://github.com/Ibran52"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.instagram.com/ibran._.02/"><i className="fa-brands fa-instagram"></i></a>
          <a href="https://github.com/Ibran52/taskwavelength.git"><i className="fa-brands fa-twitter"></i></a>
        </div>

        <ul className="list">
          <li>
            <a href="https://www.linkedin.com/in/ibran-siddique-00346b339/">FAQ</a>
          </li>

          <li>
            <a href="https://www.instagram.com/ibran._.02/">Services</a>
          </li>

          <li>
            <a href="https://github.com/Ibran52">About Me</a>
          </li>

          <li>
            <a href="#Contact">Contact</a>
          </li>

          <li>
            <a href="#Testimonials">Testimonials</a>
          </li>
        </ul>

        <p className="copyright">
          @ Ibran Siddique || All rights reserved
        </p>
      </footer>
    </>
  );
};

export default Portfolio;
