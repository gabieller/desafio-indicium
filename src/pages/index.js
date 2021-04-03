import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <div className="container-fluid p-0">
        <div id="home" className="home">
          <div className="d-flex">
            <h1 className="typewriter-text  text-center">Hello, World!</h1>
          </div>
        </div>
        <div id="about" className="section about">
          <div className="container px-5">
            <div className="d-flex flex-column flex-md-row">
              <div className="col-11 col-md-8 px-4 px-md-0">
                <h2>Quem sou eu</h2>
                <p className="pt-3">
                  Meu nome é Gabriela, natural de Florianópolis e formada em
                  Engenharia de Materiais pela Universidade Federal de Santa
                  Catarina.
                </p>
                <p className="pt-3">
                  Hoje meu foco é no Desenvolvimento Web (Front-End) onde
                  desenvolvo websites otimizados e responsivos focando na boa
                  usabilidade do usuário.
                </p>
              </div>
              <div className="col-10 col-md-4 py-5 py-md-0">
                <img
                  src="/images/profile.jpg"
                  className="pic-profile img-fluid"
                />
              </div>
            </div>
            <div className="col-11 col-md-8 px-4 px-md-0">
              <h3>Interesses</h3>
              <p className="py-3">
                Meu interesse no desenvolvimento web surgiu na metade de 2020,
                onde já tinha noções de lógica de programação, utilizando
                Python, porém buscava algo mais visual, algo em que houvesse uma
                interação maior com o usuário. Buscando isso, expandi meus
                conhecimentos de programação para a linguagem JavaScript para me
                inserir no mundo de desenvolvimento web - Fron-End.
              </p>
              <p>
                Hoje busco me aprimorar não só com o JavaScript mas também
                utilizando o framework React atráves de cursos e projetos
                pessoais.
              </p>
            </div>
          </div>
        </div>
        <div id="experiences" className="section experiences">
          <div className="container px-5">
            <h3>Experiências</h3>
            <div className="container d-flex flex-row">
              <div className="col-10">
                <a href="https://theroutingcompany.com/" target="_blank">
                  <img
                    src="/images/screenshot.png"
                    width="100%"
                    className="py-5"
                  />
                </a>
              </div>
              <div className="wrapper">
                <div className="description shadow-lg  p-3">
                  <small>
                    Desenvolvimento do website da empresa The Routing Company em
                    parceria com Scharf Studio.
                  </small>
                </div>
              </div>
            </div>
            <h4>Cursos</h4>
            <div className="col-11 col-md-7">
              <ul>
                <li className="items">
                  Bootcamp Desenvolvedor Full Stack, Instituto de Gestão e
                  Tecnologia da Informação - IGTI. Carga horária: 148h
                </li>
                <li className="items">
                  Junho/2020 - Getting Started with AWS Machine Learning,
                  Coursera.
                </li>
                <li className="items">
                  Junho/2020 - Managing Machine Learning Projects with Google
                  Cloud, Coursera.
                </li>
              </ul>
            </div>
            <div className="wrapper">
              <img
                className="coding-girl col-7 col-md-6"
                src="/images/coding.png"
              />
            </div>
          </div>
        </div>
        <div id="skills" className="section skills">
          <div className="container px-5">
            <h3>Skills</h3>
            <p className="col-9 col-md-12">
              As principais tecnologias que trabalho atualmente são:
            </p>
            <ul className="skills-list d-flex flex-row">
              <div className="col-6">
                <li className="items">HTML</li>
                <li className="items">CSS</li>
                <li className="items">JavaScript (ES6+)</li>
              </div>
              <div className="col-3 col-md-6">
                <li className="items">React</li>
                <li className="items">SQL</li>
                <li className="items">GIT</li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}
