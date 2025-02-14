import logo from "../assets/mirzatech.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";
import 'animate.css';

const navbar = () => {
  return <nav className=" mb-20 flex items-center justify-between py-6  animate__animated animate__fadeInLeft">
        <div className="flex flex-shrink-0 items-center" >
          <img className="mx-2 w-20" src={logo} alt="logo"/>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
         <FaLinkedin />
         <FaGithub />
         <FaSquareXTwitter />
         <FaInstagram />
        </div>
  </nav>
}

export default navbar
