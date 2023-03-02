import Avatar from "../img/profile.png";
import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";
import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Hiran Ferreti Baccos" />
      <p className="title">Desenvolvedor de Software (Front-end)</p>
      <SocialNetworks />
      <p>Informações de contato</p>
      <InformationContainer />
      <a href="" className="btn" id="btn">
        Download Currículo
      </a>
    </aside>
  );
};

export default Sidebar;
