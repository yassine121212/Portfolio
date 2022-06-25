import "./about.css";
import Abo from "../../img/iop.jpg";
import {MdOutlineDone} from "react-icons/md"
const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
           <img
            src={Abo}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        We love what we do and we do what our clients love & work with great clients all over the world to create thoughtful and purposeful websites
        </p>
        <p className="a-desc">
        I am a 20 year old web developer. I design
        and I'm developing an application project
        IT, from the study phase to its integration,
        for a client or a company according to needs
        functional and specifications
        </p>
        <p className="a-work">How I work :</p>
        <ul className="a-how">
          <li><MdOutlineDone color="white" style={{ "margin-left":"5px","margin-bottom":"-3px" }}/>  Performing a technical analysis</li>
          <li><MdOutlineDone color="white" style={{ "margin-left":"5px","margin-bottom":"-3px" }}/>  The creation, design and programming of a website, a module or a specific development</li>
          <li><MdOutlineDone color="white" style={{ "margin-left":"5px","margin-bottom":"-3px" }}/>  The ability to build multiple verification tests</li>
          <li><MdOutlineDone color="white" style={{ "margin-left":"5px","margin-bottom":"-3px" }}/>  Fix bugs</li>

        </ul>
        
      </div>
    </div>
  );
};

export default About;
