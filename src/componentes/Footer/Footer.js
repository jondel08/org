import "./Footer.css";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{ backgroundImage: "url(/img/footer.png)" }}
    >
      <div className="redes">
        <a href="https://www.facebook.com/joam.delgado">
          <img src="/img/fb.png" alt="Facebook" />
        </a>
        <a href="https://x.com/Joam_Delgado">
          <img src="/img/tw.png" alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/joamdelgado/">
          <img src="/img/ig.png" alt="Instagram" />
        </a>
        {/* <a href="https://www.linkedin.com/in/joam-manuel-delgado-cabriles-427b5620/">
          <img src="/img/lk.png" alt="LinkedIn" />
        </a> */}
      </div>
      <img src="/img/logo.png" alt="Logo" />
      <strong>Desarrollado por Joam Delgado</strong>
    </footer>
  );
};

export default Footer;
