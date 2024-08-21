import {RiReactjsLine} from "react-icons/ri";
import {TbBrandNextjs} from "react-icons/tb";
import { RiAngularjsLine } from "react-icons/ri";
import { FaPhp } from "react-icons/fa";
import {FaNodeJs} from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { animate, easeIn, motion } from "framer-motion";

const iconVariants =(duration) => ({
       initial: {y: -10},
       animate: {
        y:[10,-10],
        transition : {
          duration : duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }
       }
})

const Technologies = () => {
  return  <div className="border-b border-neutral-800 pb-24     animate__animated  animate__flipInX"> 
         <h1 className="my-20 text-center text-4xl">Technologies</h1>
         <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
              variants={iconVariants(2.5)}
              initial="initial"
              animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
             <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div 
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandNextjs className="text-7xl " />
           </motion.div>
           <motion.div
           variants={iconVariants(5)}
           initial="initial"
           animate="animate"
           className="rounded-2xl border-4 border-neutral-800 p-4">
           <RiAngularjsLine className="text-7xl text-red-700" />
          </motion.div>
          <motion.div
          variants={iconVariants(2)}
           initial="initial"
           animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaPhp  className="text-7xl text-blue-300" />
         </motion.div>
         <motion.div
         variants={iconVariants(6)}
         initial="initial"
         animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
         <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <FaLaravel className="text-7xl text-red-400" />
       </motion.div>
         </div>
  </div>

}

export default Technologies
