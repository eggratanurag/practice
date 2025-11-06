import { useState, useEffect } from "react";
import { motion, useAnimate, stagger, AnimationSequence } from "motion/react";


const AnimateSequence = () => {
    const [clicked, setClicked] = useState(false);
    const [scope, animate] = useAnimate();

    const sequence: AnimationSequence = [
        ["button span", { opacity: 0, display: "none" }, { duration: 0.1, }],
        ["button", {
            width: 80,
            borderRadius: 50,
            background: "var(--color-green-500)",
            scale: 0.8
        }, { duration: 0.3 }],
        ["button", { opacity: 1, scale: [0.8, 3, 1] }, { duration: 0.9 }],
        [".check-icon", { opacity: [0, 1] }, { duration: 0.3 }],
        [".check-icon path", { pathLength: 1, opacity: [0, 1] }, { duration: 0.8, }],
    ]
    const handleAnimate = () => {
        animate(sequence)
        // animate("button span",
        //     { opacity: 0, display: "none" }, { duration: 0.1, }
        // )
        // await animate("button",
        //     {
        //         width: 80,
        //         borderRadius: 50,
        //         background: "var(--color-green-500)",
        //         scale: 0.8
        //     }, {
        //     duration: 0.3,
        // }
        // )
        // await animate("button",
        //     {
        //         opacity: 1,
        //         scale: [0.8, 3, 1]
        //     }, 
        //     { duration: 0.9 }
        // )
        // await animate(".check-icon", 
        //     {opacity: 1}, {duration: 1, delay: 0.2}
        // )
        // await animate(".check-icon path", 
        //     {pathLength: 1}, {duration: 0.8 }
        // )
    }

    return (
        <div ref={scope} className="flex flex-col items-center justify-center min-h-screen py-2 bg-white text-gray-800">
            <h1>Animate Sequence</h1>

            <div className="flex items-center justify-center mt-30">
                <button onClick={handleAnimate} className="flex items-center justify-center text-white w-90 h-20 rounded-md text-2xl font-bold bg-purple-500  hover:bg-purple-600 transition-all duration-300 ease-in-out" >
                    <span>Click to get Subscription</span>
                    <motion.svg className="check-icon absolute" style={{opacity: 0}} x="0px" y="0px" width="40" height="40" viewBox="0 0 26 26">
                        <motion.path fill="none" stroke="white" strokeWidth={3}  strokeLinecap="round"  strokeLinejoin="round" initial={{pathLength: 0}} d="M 22.566406 4.730469 L 20.773438 3.511719 C 20.277344 3.175781 19.597656 3.304688 19.265625 3.796875 L 10.476563 16.757813 L 6.4375 12.71875 C 6.015625 12.296875 5.328125 12.296875 4.90625 12.71875 L 3.371094 14.253906 C 2.949219 14.675781 2.949219 15.363281 3.371094 15.789063 L 9.582031 22 C 9.929688 22.347656 10.476563 22.613281 10.96875 22.613281 C 11.460938 22.613281 11.957031 22.304688 12.277344 21.839844 L 22.855469 6.234375 C 23.191406 5.742188 23.0625 5.066406 22.566406 4.730469 Z"></motion.path>
                    </motion.svg>
                </button>
            </div>
        </div>
    )
}

export default AnimateSequence;