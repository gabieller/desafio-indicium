import Layout from "../components/Layout"
import Image from "next/image"

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <div id="home" className="home title">
          {/* <div className="title"> */}
          <h1 className="typewriter-text">Hello, World!</h1>
          {/* </div> */}
        </div>
        <div id="about" className="section about">
          <div>
            <h2>Quem sou eu</h2>
            <p>
              Meu nome é Gabriela, natural de Florianópolis e formada em
              Engenharia de Materiais pela Universidade Federal de Santa
              Catarina. No entanto, hoje meu foco é no Desenvolvimento Web
              (Front-End) onde desenvolvo websites otimizados e responsivos
              focando na boa usabilidade do usuário.
            </p>
            <h3>Interesses</h3>
            <p>
              Meu interesse no desenvolvimento web surgiu na metade de 2020,
              onde já tinha noções de lógica de programação, utilizando Python,
              porém buscava algo mais visual, algo em que houvesse uma interação
              maior com o usuário. Buscando isso, expandi meus conhecimentos de
              programação para a linguagem JavaScript para me inserir no mundo
              de desenvolvimento web - Fron-End.
            </p>
            <p>
              Hoje busco me aprimorar não só com o JavaScript mas também
              utilizando o framework React atráves de cursos e projetos
              pessoais.
            </p>
          </div>
          <div className="grid grid-columns-about">
            <p></p>
            <img src="/images/profile.jpg" className="pic-profile" />
          </div>
        </div>
        <div id="experiences" className="section">
          <h3>Experiências</h3>
          <img src="/images/screenshot.png" width="80%" />
          <h4>Cursos</h4>
          <ul>
            <li>Insira curso aqui</li>
            <li>Insira curso aqui</li>
          </ul>
        </div>
        <div id="skills" className="section skills">
          <h3>Skills</h3>
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
