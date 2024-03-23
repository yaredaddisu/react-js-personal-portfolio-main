import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Yared Addisu</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack </span>{" "}
            <br />
            Developer
          </h1> <h1 className="hero--section--title">
            <span className="hero--section-title--color">And Graphics  </span>{" "}
            <br />
            Designer
          </h1>
          <p className="hero--section-description">
            I am experienced software developer and graphics designer.
           </p>
        </div>
        <Link
         activeClass="navbar--active-content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="btn btn-primary"
      >
        Get In Touch
      </Link>
       </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
