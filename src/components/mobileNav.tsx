import type { NavItem } from "./Navbar"
import { AnimatePresence, motion } from "framer-motion"

type Props = {
    navItems: NavItem[],
    isVisible: boolean
    setIsVisible:React.Dispatch<React.SetStateAction<boolean>>
    active:string
}

function MobileNav({navItems, isVisible, setIsVisible, active}: Props):React.JSX.Element {
    return(
        <AnimatePresence>
           {isVisible && (
            <motion.div 
                className={`
                    md:hidden 
                    backdrop:blur 
                    dark:text-white
                    flex
                    flex-col
                    px-6
                    items-end
                    ${isVisible ? 'block' : 'hidden'}
                `}
                initial={{
                    opacity:0,
                    height:0,
                }}
                animate={{
                    opacity:1,
                    height:"auto"
                }}
                exit={{
                    opacity:0,
                    height:0
                }}
                transition={{
                    duration:0.5
                }}
            >
                {navItems.map((item)=>(
                    <a
                        key={item.label}
                        href={item.href}
                        className={`dark:bg-white max-w-min bg-black
                            ${
                                active === item.label
                                ? "bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
                                : "hover:bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
                            }
                        `}
                        onClick={()=>setIsVisible(false)}
                    >
                    {item.label}
                    </a>
                    ))}
            </motion.div>
        )}
        </AnimatePresence>
    )
}

export default MobileNav