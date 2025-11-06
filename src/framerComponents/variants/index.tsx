// hover and exit animations used


import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { RxCross2, RxDownload, RxExit, RxShare1 } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";


const Card = () => {
    const [isOpen, setIsOPen] = useState(false);

    const listItemVariants = {
        open: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)"

        },
        closed: {
            opacity: 0,
            y: -1,
            scale: 0.95,
            filter: "blur(3px)"
        }
    }

    const parentVariants = {
        open: {
            transition: {
                staggerChildren: 0.03,
                delayChildren: 0.3,
            }
        },
        closed: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            }
        }
    }
    return (
        <motion.div
            animate={isOpen ? "open" : "closed"}
            exit="closed"
            transition={{
                duration: 0.3,
                ease: "easeInOut"
            }}
            className={cn("bg-white rounded-2xl flex flex-col items-start w-[500px] h-[570px] mt-10 text-gray-800 p-[20px]",
                "shadow-[0_1px_4px_rgba(0,0,0,0.16)]"
            )} >

            <button onClick={() => setIsOPen(prev => !prev)} className="bg-white w-[200px] justify-center  shadow-[0_1px_4px_rgba(0,0,0,0.16)] flex items-center px-4 py-2 mx-auto mt-15 cursor-pointer rounded-xl text-sm font-[500] text-gray-700 " >
                {isOpen ? "The One Piece Is Real" : "Show One Piece"}

            </button>

            <div className="w-full h-full bg-gray-100 mt-4 rounded-2xl border border-dashed overflow-hidden border-gray-200" >

                <motion.div
                    variants={parentVariants}
                    className="flex-1 w-full h-full  shadow-[0_1px_4px_rgba(0,0,0,0.16) divide-y divide-gray-200" >

                    {listItems.map((item, index) => (
                        <motion.div key={index} variants={listItemVariants} className="bg-white  flex flex-col items-start w-full h-[90px]  text-gray-800 p-[20px]  ]" >
                            <div className="flex items-center gap-4" >
                                <div className="shadow-[0_1px_4px_rgba(0,0,0,0.16)] rounded-xl w-[50px] h-[50px] flex items-center justify-center text-2xl" >
                                    {item.icon as React.ReactNode}
                                </div>
                                <div className="flex flex-col items-start " >
                                    <p className="text-md font-[600] " > {item.name}</p>
                                    <p className="font-[400] text-sm text-gray-500">{item.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}


                </motion.div>

            </div>

        </motion.div>

    )
}

const listItems = [
    {
        name: "Donquixote Doflamingo",
        description: "The most henious criminal. Crime partner of Kaido!!",
        icon: <RxDownload />
    },
    {
        name: "Bartolomew Kuma",
        description: "Hands of Liberation!",
        icon: <RxExit />
    },
    {
        name: "Edward Newgate",
        description: "Strongest man in the world!",
        icon: <RxShare1 />
    },
    {
        name: "Hawkeye Mihawak",
        description: "Best swordsman in the world!",
        icon: <RxShare1 />
    },
    {
        name: "Hawkeye Mihawak",
        description: "Best swordsman in the world!",
        icon: <RxShare1 />
    }
]

// box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
export default Card;