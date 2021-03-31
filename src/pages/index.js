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
            {/* <h1>,</h1> */}
          </div>
          {/* <p>Desenvolvedora de Software Front-End</p> */}
        </div>
        <div id="about" className="section about">
          <h2>Quem sou eu</h2>
          <div className="about-grid grid-columns">
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
          <img src="/images/profile.jpg" className="pic-profile" />
          </div>
        </div>
        <div id="interest" className="section">
          <h2>Interesse</h2>
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
      </div>
    </Layout>
  )
}
