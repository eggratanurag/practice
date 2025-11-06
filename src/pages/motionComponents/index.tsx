

import React from "react";
import { motion } from "motion/react";
import Card from '@/framerComponents/card/index';
import Variants from '@/framerComponents/variants/index';

const MotionComponents = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-white text-gray-800">    
           <h1>This is some framer component ive made</h1>

           <Card />

           <Variants />
        </div>
    )
}

export default MotionComponents;