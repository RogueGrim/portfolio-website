import type { NavItem } from "./Navbar"
import { AnimatePresence, motion } from "framer-motion"

type Props = {
    navItems: NavItem[],
    isVisible: boolean
}

function MobileNav({navItems,isVisible}: Props):React.JSX.Element {
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
                        className="transition dark:text-white max-w-min"
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