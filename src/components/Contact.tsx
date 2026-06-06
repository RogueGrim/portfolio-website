import { motion } from "framer-motion"

type props = {
 image: string
 text: string
 link: string
}

function GradientButton({image, text, link}:props):React.JSX.Element {
 return (
  <motion.div
    className="
      h-15 w-40
      md:h-15 md:w-55 
      relative 
      rounded-xs 
      bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-size-[200%_100%]
    "
    initial="rest"
    whileHover="hover"
    variants={{
      rest:{
        backgroundPosition: "0% 50%"
      },
      hover:{
        backgroundPosition: "100% 50%",
        scale:1.1
      }
    }}
    transition={{
      backgroundPosition:{
        duration: 3, 
        ease: "linear", 
        repeat: Infinity
      },
      scale: {duration: 0.2 }
    }}
  >
    <a 
      href={link} 
      className=" 
        dark:bg-black 
        dark:text-white 
        bg-white 
        inset-0.5 
        absolute 
        flex 
        items-center  
        justify-center 
        gap-2 
        rounded-xs 
        cursor-pointer
      "
    >
      <img src={image} alt={text} className="w-8 h-8 cursor-pointer dark:invert"/>
      <button className="max-w-fit max-h-fit cursor-pointer">{text}</button>
    </a>
    
  </motion.div>
 )
}
function Contact(): React.JSX.Element {
 return(
  <motion.div 
    className="
      px-6 py-4
      flex
      flex-wrap
      gap-5 
      md:gap-5 
      md:mx-50 
      md:mt-10
    "
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    >
    <GradientButton image="/email.png" text="Send an Email" link="#"/>
    <GradientButton image="/github.png" text="GitHub" link="#"/>
    <GradientButton image="/linkedin.png" text="LinkedIn" link="#"/>
  </motion.div>
 )
}

export default Contact