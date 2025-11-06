import { useState, useEffect, } from "react";
import { motion, useAnimate, stagger } from "motion/react";

const AnimateSequence = () => {
    const string = "Previously, I worked at Ottermap, a company in a similar domain, where I developed SaaS-based front-end modules and optimized UI performance. Given the overlap in product space, I believe my background aligns well with the work your team is doing."

    const [scope, animate] = useAnimate();

    const animateText = () => {
        animate("span", {
            opacity: 1,
            y: 0,
            filter: "blur(0px)"
        }, {
            duration: 0.3,
            ease: "easeInOut",
            delay: stagger(0.03)
        })
    }

    useEffect(() => {
        animateText()
    }, []);

    return (
        <div className="flex flex-col items-center text-start  min-h-screen py-2 bg-white text-gray-700">
            <h1 className="text-start text-4xl font-bold mb-8">Animate Sequence</h1>

            <div ref={scope} className="mt-20 w-[60%]">
                {string.split(" ").map((item, index) => {
                    { console.log(item) }
                    return <motion.span style={{ opacity: 0, y: 10, filter: "blur(8px)" }} key={item + index} className="inline-block text-4xl font-bold">{item} &nbsp;</motion.span>
                })}
            </div>
        </div>
    )
}
export default AnimateSequence;