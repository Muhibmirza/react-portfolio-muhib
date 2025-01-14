import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/Muhibmirza.jpg";
import 'animate.css';

const Hero = () => {
  return <div className="border-b border-neutral-900 pb-4 lg:mb-35  animate__animated animate__fadeInDown">  
        <div className="flex flex-wrap">
           <div className="w-full lg:w-1/2">
             <div className="flex flex-col items-center lg:items-start">
               <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16
               lg:text-8xl" >
               Muhib Mirza
               </h1>
               <span className="bg-gradient-to-r from-pink-300 via-slate-500
               to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
               Full Stack Developer
               </span>
               <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
               {HERO_CONTENT}
               </p>

             </div>
           </div>
           <div className="w-full lg:w-1/2 lg:p-8">
           <div className="flex justfiy-center">
            <img src={profilepic} alt="Muhib Mirza" ></img>
           </div>
           </div>
        </div>
  </div>
  
}

export default Hero
