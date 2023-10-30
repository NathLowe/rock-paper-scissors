"use client"

import Choice from "@/components/Choice";
import { Pentagone, Triangle } from '@/lib/icons'
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

export default function BonusParty() {
  return (
    <motion.div exit={{opacity:0}} className="relative w-full h-auto aspect-square flex items-center max-sm:scale-[.6]" >
        <motion.div whileInView="visible" variants={scaleTriangle} >
          <Pentagone />
        </motion.div>

        {/* Scissors */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div whileInView="visible" variants={scaleUp} custom={2}>
              <Choice choice="scissors" size="small" />
          </motion.div>
        </div>

        {/* Spock */}
        <div className="absolute top-[34.54915%] left-0 -translate-x-1/2 -translate-y-1/2">
          <motion.div whileInView="visible" variants={scaleUp} custom={3}>
              <Choice choice="spock" size="small" />
          </motion.div>
        </div>

        {/* Paper */}
        <div className="absolute top-[34.54915%] right-0 translate-x-1/2 -translate-y-1/2">
          <motion.div whileInView="visible" variants={scaleUp} custom={3}>
              <Choice choice="paper" size="small" />
          </motion.div>
        </div>

        {/* Rock */}
        <div className="absolute bottom-0 right-[21.26627%] translate-x-1/2 translate-y-1/2">
          <motion.div whileInView="visible" variants={scaleUp} custom={3}>
              <Choice choice="rock" size="small" />
          </motion.div>
        </div>

        {/* Lizard */}
        <div className="absolute bottom-0 left-[21.26627%] -translate-x-1/2 translate-y-1/2">
          <motion.div whileInView="visible" variants={scaleUp} custom={3}>
              <Choice choice="lizard" size="small" />
          </motion.div>
        </div>
    </motion.div>
  )
}
