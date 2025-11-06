import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const ScrollBasedAnimation = () => {
  const container = useRef<HTMLDivElement>(null);

    useGSAP((context) => {
        const q = context.selector!;
        const section = container.current!;
        const c1 = q(".container-1")[0] as Element;
        const c2 = q(".container-2")[0] as Element;
        const c3 = q(".container-3")[0] as Element;
        const h31 = q("h3")[0] as Element;
        const h32 = q("h3")[1] as Element;
        const h33 = q("h3")[2] as Element;
        
        gsap.to(h31, {
            xPercent: -170,
            scrollTrigger: {
             trigger: c1,
             markers: true,
             start: "top 100%",
             end: "+=150%",
             scrub: 1,
            //  pin: true,
            }
         })

         gsap.to(h32, {
            xPercent: 170,
            scrollTrigger: {
             trigger: c2,
             markers: true,
             start: "top 100%",
             end: "+=150%",
             scrub: 1,
            //  pin: true,
            }
         })

         gsap.to(h33, {
            xPercent: -270,
            scrollTrigger: {
             trigger: c3,
             markers: true,
             start: "top",
             end: "+=150%",
             scrub: 1,
             pin: true,
            }
         })

    },{ scope: container });

    return (
        <div ref={container} className="min-h-screen bg-white overflow-x-hidden text-gray-800 flex flex-col items-center justify-center pb-20">
            <h1>Scroll Based Animation</h1>

            <div className="container-1 text-bg mt-[100vh] bg-green-300 w-full h-[50vh] flex justify-start text-start whitespace-nowrap" >
                <h3 className=" translate-x-[90%]  uppercase text-[200px] font-bold" >Kevin langue show!!</h3>
            </div>

            <div className="container-2 text-bg mt-[100px] w-full h-[50vh]  flex justify-end text-start whitespace-nowrap" >
                <h3 className=" text-red-300 translate-x-[-90%]  uppercase text-[200px] font-bold" >Kevin langue show!!</h3>
            </div>

            <div className="container-3 text-bg mt-[100px]  w-full h-[50vh] bg-amber-200 flex justify-start text-start whitespace-nowrap" >
                <h3 className="text-red-800 translate-x-[50%]  uppercase text-[200px] font-bold" >Kevin langue show!!</h3>
            </div>

          
           
        </div>
    )
}

export default ScrollBasedAnimation;