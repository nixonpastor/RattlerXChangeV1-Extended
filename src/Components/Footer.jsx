import "./Footer.css";

function Footer() {
  var date = new Date();
  return (
    <footer className="footer">
      <p className="footerTitle"> © Rattler XChange.{date.getFullYear()}. rattlerxchange@gmail.com</p>
    </footer>
  );
}

export default Footer;
