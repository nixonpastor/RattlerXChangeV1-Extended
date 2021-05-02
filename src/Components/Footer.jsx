import "./Footer.css";

function Footer() {
  //get latest date
  var date = new Date();
  //return footer HTML component
  return (
    <footer className="footer">
      <p className="footerTitle">
        {" "}
        © Rattler XChange.{date.getFullYear()}. rattlerxchange@gmail.com
      </p>
    </footer>
  );
}

export default Footer;
