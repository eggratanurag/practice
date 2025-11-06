import "./index.css";
import metal from "../../assets/brushedMetal.png";
import { motion } from "motion/react";

const SilverButton = () => {

    return (
        <div className='min-h-screen flex bg-white flex-col items-center justify-center pb-20'>
            <motion.button initial={false} className='bg-slate-50 shadow-[var(--silver-button-shadow)] w-[200px] h-[200px] rounded-full text-gray-800  transition-all duration-300 ease-in-out '>
                <div className="button-inner relative">
                <svg
                    viewBox="0 0 200 200"
                    className="absolute inset-0 w-[90%] h-[90%] mx-auto my-auto animate-[spin_10s_linear_infinite] [transform-origin:50%_50%]"
                >
                    <defs>
                        <path
                            id="circlePath"
                            d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                        />
                        {/* Inner shadow filter for engraved effect */}
                        <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
                            <feOffset dx="0" dy="1" />
                            <feGaussianBlur stdDeviation="0.5" result="offset-blur" />
                            <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
                            <feFlood flood-color="#000" flood-opacity="0.45" result="color" />
                            <feComposite operator="in" in="color" in2="inverse" result="shadow" />
                            <feComposite operator="over" in="shadow" in2="SourceGraphic" />
                        </filter>
                    </defs>
                    <text filter="url(#innerShadow)" className="fill-gray-200 tracking-[3px] text-[16px] font-poppins font-small">
                        <textPath href="#circlePath" startOffset="0%">
                            PERSONAL PORTFOLIO • CRAFTED BY MERYCODES • PERSONAL PORTFOLIO • CRAFTED BY MERYCODES •
                        </textPath>
                    </text>
                </svg>

                <div className="w-[60px] h-[60px]  shadow-[inset_0_0_10px_rgba(0,0,0,0.4),inset_0_0_10px_rgba(255,255,255,0.3)] rounded-full overflow-hidden flex items-center justify-center bg-red-300 animate-[spin_10s_linear_infinite] [transform-origin:50%_50%]">
                   <img src={metal} alt="metal" className="w-[110%] h-[110%] inset-0 rounded-full object-cover object-center" />
                </div>
                <div className="shineOverlay absolute h-full w-full" ></div>
                </div>
            </motion.button>
        </div>
    )
}

export default SilverButton;