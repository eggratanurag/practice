import { useEffect, useRef, useState} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {motion} from "motion/react";
 
import { useGetPointerMovement } from "@/utils/getPointerMovements";


const NothingHero = () => {
    const [interactive, setInteractive] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const id = setTimeout(() => setInteractive(true), 2000);
        return () => clearTimeout(id);
    }, []);

    useGSAP(() => {
        const el = wrapperRef.current!;
        gsap.set(el, { '--glassSectionWidth': '70px' });
        gsap.to(el, {
            '--glassSectionWidth': '40px',
            duration: 2,
            ease: 'expo.out',
            delay: 0.3
        });
    }, [interactive]);

    const pointerProps = useGetPointerMovement(true);
      
      
    
    // console.log(pointerProps, "devtoolsState.glassSectionWidth")
    return (
        <div className="min-h-screen w-full bg-white font-sans">
        <div className="relative min-h-screen w-full group">
            <div
                style={
                    {
                        "--glassSectionWidth": `${13}px`,
                        "--blur": `${80}px`,
                        // "--glassRotation": `${devtoolsState.glassRotation}deg`,
                        // "--gradientRotation": `${devtoolsState.gradientRotation}deg`,
                    } as React.CSSProperties
                }
                {...pointerProps}
                className={`circular-fadeout absolute inset-0 z-20 grid min-h-screen w-full place-items-center overflow-clip bg-white transition-opacity duration-200 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto opacity-0`}
            >
                <div
                    className="relative grid h-full w-full place-items-end [grid-area:1/1]"
                    role="figure"
                    ref={wrapperRef}
                >
                    <motion.div initial={{opacity: 0, y: "-200%", filter: "blur(0px)"}} animate={{opacity: 1, y: "-80%", filter: "blur(60px)"}} transition={{duration: 0.5}} className="h-[60%] mt-full absolute  w-1/2 rotate-[var(--gradientRotation,12deg)] rounded-[10vw] bg-[image:var(--primary-gradient)] mix-blend-hard-light"></motion.div>
                    <div className="absolute inset-0 translate-x-[calc(var(--x,0)*5%)] translate-y-[calc(var(--y,0)*5%)] scale-[2] rotate-[var(--glassRotation,15deg)] bg-[image:var(--frost-gradient)] bg-[size:var(--glassSectionWidth,20px)] mix-blend-color-dodge backdrop-blur-[var(--blur,20px)]"></div>
                </div>
            </div>

            <div className="pointer-events-none bg-white flex items-center justify-center min-h-screen relative z-10 [grid-area:1/1]">
                    <h1 className="text-black text-[10vw] leading-snug font-semibold">
                        Frosted Glass
                    </h1>
            </div>
        </div>

        <div className="min-h-screen w-full bg-white">

        </div>

        {/* <Devtools {...devtoolsState} /> */}
    </div>
    )
}

export default NothingHero;


// import { useEffect, useRef } from "react";
// import gsap from "gsap";


// const NothingHero = () => {
//     const sectionRef = useRef<HTMLDivElement>(null);
//     const overlayRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         const overlay = overlayRef.current;
//         const section = sectionRef.current;
//         if (!overlay || !section) return;

//         // Smooth repeating shimmer of rib mask
//         const shimmer = gsap.to(overlay, {
//             "--maskX": "8px",
//             duration: 6,
//             ease: "none",
//             repeat: -1,
//             yoyo: true,
//         });

//         // Hover glass intensifies
//         const onEnter = () => gsap.to(overlay, { "--blur": "28px", duration: 0.4, ease: "power2.out" });
//         const onLeave = () => gsap.to(overlay, { "--blur": "24px", duration: 0.6, ease: "power2.inOut" });
//         section.addEventListener("pointerenter", onEnter);
//         section.addEventListener("pointerleave", onLeave);

//         // Cursor-driven highlight center
//         const setHX = gsap.quickSetter(overlay, "--hx");
//         const setHY = gsap.quickSetter(overlay, "--hy");
//         const onMove = (e: PointerEvent) => {
//             const r = section.getBoundingClientRect();
//             const nx = (e.clientX - r.left) / r.width;  // 0..1
//             const ny = (e.clientY - r.top) / r.height; // 0..1
//             // Map to pleasing range inside the glass
//             setHX(`${40 + nx * 40}%`);
//             setHY(`${30 + ny * 40}%`);
//         };
//         section.addEventListener("pointermove", onMove);

//         return () => {
//             shimmer.kill();
//             section.removeEventListener("pointerenter", onEnter);
//             section.removeEventListener("pointerleave", onLeave);
//             section.removeEventListener("pointermove", onMove);
//         };
//     }, []);

//     return (
//         <div ref={sectionRef} className="relative min-h-screen w-full overflow-hidden text-white">
//             <div className="hero-bg absolute inset-0"></div>

//             {/* GSAP-driven ribbed glass overlay */}
//             <div ref={overlayRef} className="ribbed-overlay absolute inset-0"></div>

//             <div className="relative z-10 flex items-center justify-center min-h-screen">
//                 <h1 className="text-5xl font-bold tracking-tight">Ribbed Glass</h1>
//             </div>
//         </div>
//     )
// }

// export default NothingHero;
