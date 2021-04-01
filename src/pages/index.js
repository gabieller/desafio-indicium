// import Head from "next/head"
import Layout from "../components/Layout"
import Image from "next/image"
// import "../styles/index.css"

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <div id="home" className="home">
          <div className="title">
            <h1>Hello, World!</h1>
          </div>
        </div>
        <div id="about" className="section about">
          <div>
          <h2>Quem sou eu</h2>
          <h2>Interesses</h2>
          </div>
          <div className="grid grid-columns-about">
            <p>
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS! Fast-forward to today, and I've had the privilege of
              working at an advertising agency, a start-up, a huge corporation,
              and a student-led design studio. My main focus these days is
              building accessible, inclusive products and digital experiences at
              Upstatement for a variety of clients.
            </p>
            <img src="/images/profile.jpg" className="pic-profile" />
          </div>
        </div>
        <div id="experiences" className="section">
          <h2>Experiências</h2>
          <p>
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS! Fast-forward to today, and I've had the privilege of working at
            an advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </p>
        </div>
        <div id="skills" className="section skills">
          <h2>Skills</h2>
          <p>As principais tecnologias que trabalho atualmente são:</p>
            <ul className="skills-list grid grid-columns-skills">
              <li className="skills-items">HTML</li>
              <li className="skills-items">CSS</li>
              <li className="skills-items">JavaScript (ES6+)</li>
              <li className="skills-items">React</li>
              <li className="skills-items">SQL</li>
              <li className="skills-items">GIT</li>
            </ul>
          {/* </div> */}

          <div className="wrapper">
            <img className="coding-girl" src="/images/coding.png" />
          </div>
        </div>
      </div>
    </Layout>
  )
}
