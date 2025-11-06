// hover and exit animations used


import { motion, AnimatePresence } from "motion/react";
import {useState} from "react";
import { cn } from "@/lib/utils";
import { RxCross2, RxDownload, RxExit, RxShare1 } from "react-icons/rx";
import { IoMdAdd   } from "react-icons/io";


const Card = () => {
  const [isOpen, setIsOPen] = useState(true);

    return (
        <AnimatePresence>
        {isOpen && <motion.div
        exit={{
          opacity: 0,
          scale: 0.95,
          filter: "blur(10px)"
        }}
        initial={{
          opacity: 0,
          scale: 0.95,
          filter: "blur(10px)"
        }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)"
        }}
        transition={{
          duration:0.3,
          ease: "easeInOut"
        }}
         className={cn("bg-white rounded-2xl flex flex-col items-start w-[500px] h-[570px] mt-10 text-gray-800 p-[20px]", 
            "shadow-[0_1px_4px_rgba(0,0,0,0.16)]"
        )} >
           <h2 className="font-[700] text-xl" >Kozuki Oden</h2>
           <h3 className="font-[400] text-sm text-gray-500 mt-2">You can ask me to brag about hello One piece day and I wont even budge.</h3>

           <button onClick={() => setIsOPen(false)} className="bg-white shadow-[0_1px_4px_rgba(0,0,0,0.16)] flex items-center px-4 py-2 mx-auto mt-15 cursor-pointer rounded-xl text-sm font-[500] text-gray-700 " >
            The One Piece
            <RxCross2 className="inline ml-2 text-[18px]" />
           </button>

           <div  className="w-full h-full bg-gray-100 mt-4 rounded-2xl border border-dashed overflow-hidden border-gray-200" >

           <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              filter: "blur(10px)"
             }}
             whileHover={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)"
             }}
             transition={{
              duration:0.3,
              ease: "easeInOut"
             }}
              className="  flex-1 w-full h-full  shadow-[0_1px_4px_rgba(0,0,0,0.16) divide-y divide-gray-200" >
            
            <div className="bg-white  flex flex-col items-start w-full h-[90px]  text-gray-800 p-[20px]  ]" >
                 <div className="flex items-center gap-4" >
                    <div className="shadow-[0_1px_4px_rgba(0,0,0,0.16)] rounded-xl w-[50px] h-[50px] flex items-center justify-center text-2xl" >
                      <RxDownload />
                    </div>
                    <div className="flex flex-col items-start " >
                        <p className="text-md font-[600] " > Donquixote Doflamingo</p>
                        <p className="font-[400] text-sm text-gray-500">The most henious criminal. Crime partner of Kaido!!</p>
                    </div>
                 </div>
            </div>

            <div className="bg-white  flex flex-col items-start w-full h-[90px]  text-gray-800 p-[20px]  " >
                 <div className="flex items-center gap-4" >
                    <div className="shadow-[0_1px_4px_rgba(0,0,0,0.16)] rounded-xl w-[50px] h-[50px] flex items-center justify-center text-2xl" >
                      <RxExit />
                    </div>
                    <div className="flex flex-col items-start " >
                        <p className="text-md font-[600] " >Bartolomew Kuma</p>
                        <p className="font-[400] text-sm text-gray-500">Hands of Liberation!</p>
                    </div>
                 </div>
            </div>

            <div className="bg-white  flex flex-col items-start w-full h-[90px]  text-gray-800 p-[20px]  " >
                 <div className="flex items-center gap-4" >
                    <div className="shadow-[0_1px_4px_rgba(0,0,0,0.16)] rounded-xl w-[50px] h-[50px] flex items-center justify-center text-2xl" >
                      <RxShare1 />
                    </div>
                    <div className="flex flex-col items-start " >
                        <p className="text-md font-[600] " >Edward Newgate</p>
                        <p className="font-[400] text-sm text-gray-500">Strongest man in the world!</p>
                    </div>
                 </div>
            </div>

            <div className="bg-white  flex justify-center items-start w-full h-[90px]  text-gray-800 p-[20px]  " >
                    <button className="shadow-[0_1px_4px_rgba(0,0,0,0.16)] rounded-xl w-[50px] h-[50px] flex items-center justify-center text-2xl" >
                      <IoMdAdd   />
                    </button>
            </div>

           </motion.div>

           </div>

        </motion.div>}
        </AnimatePresence>
    )
}

// box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
export default Card;