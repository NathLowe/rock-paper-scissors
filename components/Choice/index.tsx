"use client"

import React from 'react'
import {
    Choice as ChoiceType
} from '@/lib/types'

import rock from "@/images/icon-rock.svg"
import scissors from "@/images/icon-scissors.svg"
import paper from "@/images/icon-paper.svg"
import lizard from "@/images/icon-lizard.svg"
import spock from "@/images/icon-spock.svg"
import Image from 'next/image'
import { motion } from 'framer-motion'

import "./choice.css"
import { setPlayerChoice } from '@/stores/party'

export const CHOICES = {
    rock: {
        image: rock,
        name: "rock Icon",
        main: "hsl(349, 71%, 52%)",
        dark: "#a11635"
    },
    scissors: {
        image: scissors,
        name: "scissors Icon",
        main: "hsl(39, 89%, 49%)",
        dark: "#c77021"
    },
    paper: {
        image: paper,
        name: "paper Icon",
        main: "hsl(230, 89%, 62%)",
        dark: "#2b46bb"
    },
    lizard: {
        image: lizard,
        name: "lizard Icon",
        main: "hsl(261, 73%, 60%)",
        dark: "#5f39aa"
    },
    spock: {
        image: spock,
        name: "spock Icon",
        main: "hsl(189, 59%, 53%)",
        dark: "#308ba6"
    },
}

const getSizeClass = (size:"small"|"medium"|"large") =>{
    switch (size) {
        case "large":
            return "w-32 sm:w-44 md:w-72 h-auto aspect-square"
        case "small":
            return "w-32 h-auto aspect-square"
        default:
            return "w-44 h-auto aspect-square"
    }
}

// Props
type ChoiceProps = {
    choice: ChoiceType,
    className?: string,
    win?: boolean,
    size?: "small"|"medium"|"large",
    second?: boolean // to avoid the same Choice to use layout and mess up the display
}

export default function Choice({ choice, className, win, size, second }: ChoiceProps) {
    size = size || "medium"
    second = second ?? false
    const { image, name, main, dark } = CHOICES[choice]

    const handleClick = () => {
        if(size !== 'large') setPlayerChoice(choice)
    }
  return (
    <motion.div layout layoutId={`${choice}${second?'-second':''}`} onClick={handleClick} className={`${className} ${size !== 'large' && 'cursor-pointer'} group`} >
        <div className={`relative ${getSizeClass(size)}`} >
            <div className={`absolute top-0 left-0 h-full w-full rounded-full translate-y-[4%] -z-10`} style={{backgroundColor: dark}} />
            <div className={`relative w-full h-full rounded-full transition-all group-active:translate-y-[2%]`} style={{backgroundColor: main}} >
                <div className={`absolute top-1/2 left-1/2 h-[75%] w-[75%] rounded-full -translate-x-1/2 -translate-y-1/2 bg-white shadow-[0px_6px_1px_#ded5d5_inset] transition-all group-active:shadow-[0px_3px_1px_#ded5d5_inset]`}>
                    <Image src={image} alt={name} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-auto' />
                </div>
            </div>
            {
                win && (
                    <>
                        <motion.div initial={{scale:"0",x:"-50%",y:"-50%"}} animate={{scale:"var(--scale)"}} transition={{type:"spring",duration:1}}
                            className={`circular-1 absolute top-1/2 left-1/2 h-full w-full rounded-full -translate-x-1/2 shadow -translate-y-1/2 bg-theme-border/20 scale-[1.6] -z-[11]`}
                        />
                        <motion.div initial={{scale:"0",x:"-50%",y:"-50%"}} animate={{scale:"var(--scale)"}} transition={{type:"spring",duration:1.5}}
                            className={`circular-2 absolute top-1/2 left-1/2 h-full w-full rounded-full -translate-x-1/2 shadow -translate-y-1/2 bg-theme-border/[.15] scale-[2.2] -z-[12]`}
                        />
                        <motion.div initial={{scale:"0",x:"-50%",y:"-50%"}} animate={{scale:"var(--scale)"}} transition={{type:"spring",duration:2}}
                            className={`circular-3 absolute top-1/2 left-1/2 h-full w-full rounded-full -translate-x-1/2 shadow -translate-y-1/2 bg-theme-border/10 scale-[2.8] -z-[13]`}
                        />
                    </>
                )
            }
        </div>
    </motion.div>
  )
}
