import "../styles/components/projectsContainer.sass";

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <p>
        Clique no botão para ser redirecionado ao meu Github, onde é possível
        visualizar em "Repositories" cerca de 30 projetos de estudos, na qual
        estão hospedados códigos e anotações para aperfeiçoamento de tecnologias
        como linguagens de programação e frameworks representados nos ícones
        abaixo.
      </p>
      <a
        href="https://github.com/HiranFerretiBaccos?tab=repositories"
        className="btn"
        id="btn"
      >
        Ver projetos <span className="span">(Github)</span>
      </a>
    </section>
  );
};

export default ProjectsContainer;
