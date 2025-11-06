import { useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform, useMotionTemplate, useSpring} from "motion/react";

const ParallaxEffect = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [background, setBackground] = useState("");

    const backgrounds = ["#3C467B", "#50589C", "#636CCB"];
    const features = [
        {
            title: "Feature 1",
            description: "Description 1",
            image: "https://images.unsplash.com/photo-1761322026605-2d5d35b58d41?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
        },
        {
            title: "Feature 2",
            description: "Description 2",
            image: "https://images.unsplash.com/photo-1761300725208-e8f92da35f5c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171"
        },
        {
            title: "Feature 3",
            description: "Description 3",
            image: "https://images.unsplash.com/photo-1759346329380-b8fde799521a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
        }
    ]

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setBackground(backgrounds[Math.floor(latest * backgrounds.length)]);
    })

    return (
        <motion.div animate={{background: background}} transition={{duration: 1, ease: "easeInOut"}}  ref={ref} className="flex flex-col items-center justify-center min-h-screen py-2  bg-white text-gray-800">
            <div className="flex flex-col items-center justify-center w-[60%]">
                <h1>Parallax Effect</h1>

            <div className="flex flex-col gap-4 mt-30">
            {features.map((feature) => (
                <Card key={feature.title} feature={feature} />
            ))}
            </div>

            </div>
        </motion.div>
    )
}

const Card = ({feature}: {feature: {title: string, description: string, image: string}}) => {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const tranlsateContent = useTransform(scrollYProgress, [0, 1], [200, -300]);
    const opacityContent = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
    const blutContent = useTransform(scrollYProgress, [0.5,1], [0,10])
    const scaleContent = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7])



    return (
        <div ref={ref} key={feature.title} className="grid grid-cols-2 py-40  rounded-2xl">
            <motion.div style={{filter: useMotionTemplate`blur(${blutContent}px)`, scale: scaleContent}} className="text-start flex flex-col gap-2 items-start justify-center">
            <h3 className="text-4xl text-white font-bold">{feature.title}</h3>
            <p className="text-md text-white">{feature.description}</p>
            </motion.div>
            <motion.div style={{y: tranlsateContent, opacity: opacityContent}} className="max-w-[500px] h-[300px] rounded-xl overflow-hidden">
              <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
            </motion.div>
        </div>
    )
}
export default ParallaxEffect;