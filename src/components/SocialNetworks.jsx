import "../styles/components/socialNetworks.sass";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const SocialNetworks = () => {
  const socialNetworks = [
    {
      name: "linkedin",
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/hiran-ferreti-baccos/",
    },
    {
      name: "github",
      icon: <FaGithub />,
      href: "https://github.com/HiranFerretiBaccos",
    },
    {
      name: "instagram",
      icon: <FaInstagram />,
      href: "https://www.instagram.com/hiranfb/",
    },
  ];

  //JSX é parênteses() ao invés de chaves{} como no js puro.
  return (
    <section id="social-networks">
      {socialNetworks.map((network) => (
        <a
          href={network.href}
          className="social-btn"
          id={network.name}
          key={network.name}
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNetworks;
