"use client"

import Choice from "@/components/Choice";
import { Triangle } from '@/lib/icons'
import { motion } from "framer-motion";

// 
const scaleUp = {
    hidden: {
      scale:0
    },
    visible: (i:number) => ({
      scale: 1,
      transition:{
        delay: i*0.5+0.25,
        duration: 0.5,
        type: "spring"
      }
    })
  }
  const scaleTriangle = {
    hidden: {
      rotate: 360,
      scale: 0
    },
    visible: {
      rotate: 0,
      scale: 1,
      transition:{
        duration: 0.75,
        type: "spring"
      }
    }
  }

export default function NormalParty() {
  return (
    <motion.div exit={{opacity:0}} className="relative w-full h-auto aspect-square flex items-center max-sm:scale-[.6]" >
        <motion.div whileInView="visible" variants={scaleTriangle} >
            <Triangle />
        </motion.div>

        {/* Paper */}
        <div className="absolute -top-1/2 -left-1/2 translate-x-1/2 translate-y-1/2">
            <motion.div whileInView="visible" variants={scaleUp} custom={2}>
                <Choice choice="paper" />
            </motion.div>
        </div>

        {/* Scissors */}
        <div className="absolute -top-1/2 -right-1/2 -translate-x-1/2 translate-y-1/2">
            <motion.div whileInView="visible" variants={scaleUp} custom={3}>
                <Choice choice="scissors" />
            </motion.div>
        </div>
        
        {/* Rock */}
        <div className="absolute -bottom-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div whileInView="visible" variants={scaleUp} custom={4}>
                <Choice choice="rock" />
            </motion.div>
        </div>
    </motion.div>
  )
}
