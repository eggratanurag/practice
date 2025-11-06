import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform, useMotionTemplate, useSpring, AnimatePresence } from "motion/react";

const useOutSideClick = (callback: () => void) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
     const handleClick = (event: MouseEvent) => {
         if(ref.current && !ref.current.contains(event.target as Node)) {
            callback();
         }
     }

     document.addEventListener("mousedown", handleClick);

     return () => document.removeEventListener("mousedown", handleClick);
    }, [callback])

    return ref;
}

const ParallaxEffect = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [background, setBackground] = useState("");

    const backgrounds = ["#3C467B", "#50589C", "#636CCB"];
    const features = [
        {
            title: "Rihanna",
            description: "Rihanna is a Barbadian singer, businesswoman, and actress. Known for her artistic reinventions, she is an influential figure in both music and fashion. Rihanna is one of the best-selling music artists of all time, with estimated sales of over 250 million records.",
            summary: `Robyn Rihanna Fenty (/riˈænə/ ⓘ ree-AN-ə;[2][3][n 1] born February 20, 1988) is a Barbadian singer, businesswoman, and actress. Known for her artistic reinventions, she is an influential figure in both music and fashion. Rihanna is one of the best-selling music artists of all time, with estimated sales of over 250 million records.
As a child, Rihanna showed interest in the arts. Signed to Def Jam Recordings, she debuted with the Caribbean-inspired records Music of the Sun (2005) and A Girl Like Me (2006), both of which reached the top ten of the US Billboard 200. The albums spawned the singles "Pon de Replay" and "SOS", which peaked at numbers two and one on the US Billboard Hot 100, respectively. Adopting a more mature image, Rihanna rose to stardom and transitioned to dance-pop and R&B with the album Good Girl Gone Bad (2007) and its reissue, subtitled Reloaded (2008). The project yielded a string of successful songs, including the US number-one singles "Umbrella", "Take a Bow", and "Disturbia".`,
            image: "https://static.independent.co.uk/2025/02/22/16/36/GettyImages-2170616237.jpg"
        },
        {
            title: "Drake",
            description: "Aubrey Drake Graham is a Canadian rapper, singer, songwriter, actor, and entrepreneur. He is known for his versatility in music and his ability to adapt to different genres. Drake is one of the best-selling music artists of all time, with estimated sales of over 250 million records.",
            summary: `Aubrey Drake Graham is a Canadian rapper, singer, songwriter, actor, and entrepreneur. He is known for his versatility in music and his ability to adapt to different genres. Drake is one of the best-selling music artists of all time, with estimated sales of over 250 million records.
As a child, Drake showed interest in the arts. Signed to Young Money Entertainment, he debuted with the album Thank Me Later (2010), which reached the top ten of the US Billboard 200. The album spawned the singles "Over", "Take Care", and "Headlines", which peaked at numbers one, two, and three on the US Billboard Hot 100, respectively. Drake rose to stardom and transitioned to pop with the album Nothing Was the Same (2013) and its reissue, subtitled II (2013). The project yielded a string of successful songs, including the US number-one singles "Hold On, We're Going Home", "Started from the Bottom", and "Worst Behavior".`,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ0vN0lpamys_ZcT_deZQoW-4mJ9HCm3CkEA&s"
        },
        {
            title: "Taylor Swift",
            description: "Taylor Alison Swift is an American singer-songwriter. Known for her songwriting and vocal style, she is an influential figure in the music industry. Taylor is one of the best-selling music artists of all time, with estimated sales of over 250 million records.",
            summary: `Taylor Alison Swift is an American singer-songwriter. Known for her songwriting and vocal style, she is an influential figure in the music industry. Taylor is one of the best-selling music artists of all time, with estimated sales of over 250 million records.
As a child, Taylor showed interest in the arts. Signed to Big Machine Records, she debuted with the album Taylor Swift (2006), which reached the top ten of the US Billboard 200. The album spawned the singles "Love Story" and "You Belong with Me", which peaked at numbers one and two on the US Billboard Hot 100, respectively. Taylor rose to stardom and transitioned to pop with the album Fearless (2009) and its reissue, subtitled Red (2012). The project yielded a string of successful songs, including the US number-one singles "You Belong with Me", "Love Story", and "You Belong with Me".`,
            image: "https://hips.hearstapps.com/hmg-prod/images/taylor-swift-performs-onstage-during-taylor-swift-the-news-photo-1733447389.jpg?crop=0.65234xw:1xh;center,top&resize=640:*"
        },
        {
            title: "Dhanji",
            description: "Dhanji is a Indian singer, songwriter, and actor. He is known for his versatility in music and his ability to adapt to different genres. Dhanji is one of the best-selling music artists of all time, with estimated sales of over 250 million records.",
            summary: `Dhanji is a Indian singer, songwriter, and actor. He is known for his versatility in music and his ability to adapt to different genres. Dhanji is one of the best-selling music artists of all time, with estimated sales of over 250 million records.
As a child, Dhanji showed interest in the arts. Signed to Big Machine Records, he debuted with the album Dhanji (2006), which reached the top ten of the US Billboard 200. The album spawned the singles "Love Story" and "You Belong with Me", which peaked at numbers one and two on the US Billboard Hot 100, respectively. Dhanji rose to stardom and transitioned to pop with the album Fearless (2009) and its reissue, subtitled Red (2012). The project yielded a string of successful songs, including the US number-one singles "You Belong with Me", "Love Story", and "You Belong with Me".`,
            image: "https://repo.thewildcity.com/7531-dhanji-banner.jpg&quot"
        },
        {
            title: "Ariana Grande",
            description: "Ariana Grande is an American singer, songwriter, and actress. She is known for her versatility in music and her ability to adapt to different genres. Ariana is one of the best-selling music artists of all time, with estimated sales of over 250 million records.",
            summary: `Ariana Grande is an American singer, songwriter, and actress. She is known for her versatility in music and her ability to adapt to different genres. Ariana is one of the best-selling music artists of all time, with estimated sales of over 250 million records.
As a child, Ariana showed interest in the arts. Signed to Big Machine Records, she debuted with the album Ariana Grande (2006), which reached the top ten of the US Billboard 200. The album spawned the singles "Love Story" and "You Belong with Me", which peaked at numbers one and two on the US Billboard Hot 100, respectively. Ariana rose to stardom and transitioned to pop with the album Fearless (2009) and its reissue, subtitled Red (2012). The project yielded a string of successful songs, including the US number-one singles "You Belong with Me", "Love Story", and "You Belong with Me".`,
            image: "https://www.billboard.com/wp-content/uploads/2022/08/Ariana-Grande-the-voice-2021-billboard-1548.jpg?w=875&h=583&crop=1"
        }
    ]

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white text-gray-800">
            <div className="flex flex-col items-center justify-center w-[60%]">
                <h1>Layout shifts</h1>

                <div className="flex flex-col gap-4 mt-30">
                    {features.map((feature) => (
                        <Card key={feature.title} feature={feature} />
                    ))}
                </div>

            </div>
        </div>
    )
}

const Card = ({ feature }: { feature: { title: string, description: string, image: string, summary: string } }) => {

    const [clicked, setClicked] = useState<{ title: string, description: string, image: string, summary: string } | null>(null);
    const outsideRef = useOutSideClick(() => setClicked(null));
 
    console.log(clicked, "clicked")
    return (
        <div key={feature.title} className="">
            <motion.div layoutId={`layout-${feature.title}`}  onClick={e => {setClicked(feature);e.stopPropagation()}} className="flex flex-row cursor-pointer gap-6 rounded-2xl  max-w-[800px] border-1 shadow-xs border-gray-200">
            <motion.div  layoutId={`layout-img-${feature.title}`}  className="min-w-[200px] h-[200px] rounded-l-2xl overflow-hidden">
                <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" />
            </motion.div>
            <div className="text-start flex flex-col gap-2 p-4 items-start justify-center">
                <motion.h3 layoutId={`layout-title-${feature.title}`} className="text-4xl text-gray-800 font-bold">{feature.title}</motion.h3>
                <motion.p layoutId={`layout-description-${feature.title}`} className="text-md text-gray-600">{feature.description}</motion.p>
            </div>
            </motion.div>

            {clicked && <style>{`body { overflow: hidden; margin-right: 15px; }`}</style>}

            <AnimatePresence>
            {clicked && <motion.div initial={{opacity: 0, filter: "blur(10px)"}} animate={{opacity: 1, filter: "blur(0px)"}} transition={{duration: 0.3}} exit={{opacity: 0, filter: "blur(10px)"}}  className="fixed flex items-center justify-center  inset-0 top-0 left-0 w-full h-full bg-black/50 backdrop-blur-sm"></motion.div>}
            </AnimatePresence>
            {clicked && <div className="fixed flex items-center justify-center  inset-0 top-0 left-0 w-full h-full">
                
                    <motion.div layoutId={`layout-${clicked.title}`}  ref={outsideRef} className="flex flex-row  max-w-[900px] gap-6 rounded-2xl shadow-xs bg-white z-10 ">
                        <motion.div  layoutId={`layout-img-${clicked.title}`} className="min-w-[400px] min-h-full rounded-l-2xl overflow-hidden">
                            <img src={clicked.image} alt={clicked.title} className="w-full h-full object-cover" />
                        </motion.div>
                        <div className="text-start flex flex-col gap-2 p-4 items-start justify-center">
                            <motion.h3 layoutId={`layout-title-${clicked.title}`} className="text-4xl text-gray-800 font-bold mt-10">{clicked.title}</motion.h3>
                            <motion.p layoutId={`layout-description-${clicked.title}`} className="text-md text-gray-600">{clicked.description}</motion.p>
                            <motion.div initial={{opacity: 0, filter: "blur(10px)"}} animate={{opacity: 1, filter: "blur(0px)"}} transition={{duration: 0.3}} className="text-start max-h-[200px] overflow-y-auto pb-20 [mask-image:linear-gradient(to_top,transparent,white_90%)]">
                              <p className="text-md text-gray-600">{clicked.summary}</p>
                            </motion.div>
                        </div>
                    </motion.div>
                    
            </div>}
           

        </div>
    )
}
export default ParallaxEffect;