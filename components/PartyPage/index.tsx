"use client"

import Choice from "@/components/Choice";
import Modal from "@/components/Modal";
import OpenModalButton from "@/components/Modal/OpenModalButton";
import logo from "@/images/logo.svg"
import logoBonus from "@/images/logo-bonus.svg"
import Image from "next/image";
import { addHomeScore, addScore, resetParty, setHomeChoice, setIsSameChoice, setWinner, useParty } from "@/stores/party";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ALL_CHOICES, NORMAL_CHOICES, checkWinner } from "@/lib/data";
import NormalParty from "@/components/NormalParty";
import BonusParty from "@/components/BonusParty";

// Variants
const fadeIn = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition:{
      duration: 0.5,
      delay: 0.25
    }
  }
}



export default function PartyPage() {
    const { partyType, playerChoice, homeChoice, winner, score, homeScore, isSameChoice } = useParty(state => ({
        partyType: state.partyType,
        playerChoice: state.playerChoice,
        homeChoice: state.homeChoice,
        winner: state.winner,
        score: state.score,
        homeScore: state.homeScore,
        isSameChoice: state.isSameChoice,
      }))
      const [endMessage,setEndMessage] = useState("")
      // const [second,setSecond] = useState(false)
    
      useEffect(()=>{
        if(playerChoice){
          const timeout = setTimeout(()=>{
            const choices = partyType === 'normal' ? NORMAL_CHOICES : ALL_CHOICES
            const home = choices[Math.floor(Math.random()*choices.length)]
            if(home === playerChoice) setIsSameChoice(true)
            setHomeChoice(home)
          },Math.ceil(Math.random()*2000)+500)
          return ()=>clearTimeout(timeout)
        }
      },[playerChoice])
      useEffect(()=>{
        if(playerChoice && homeChoice){
          const winner = checkWinner(playerChoice,homeChoice)
          setWinner(winner)
          if(winner === "player"){
            setEndMessage("You Win")
            addScore()
          }else if((winner === "home")){
            setEndMessage("You Lose")
            addHomeScore()
          }else{
            setEndMessage("It's a tie")
          }
        }
      },[homeChoice])
      
      return (
        <motion.main initial="hidden" animate="visible" className="overflow-hidden w-screen min-h-screen flex flex-col gap-4 justify-between container p-4 sm:p-8 text-white">
          {/* Header */}
          <div className="max-w-screen-md mx-auto py-4 px-5 border-2 border-theme-border rounded-lg flex w-full items-center justify-between gap-4 leading-none">
            <h1 className="text-[48px] leading-[0.75] uppercase h-fit" >
              <span className="sr-only">Rock - Paper - Scissors {partyType === 'bonus' ? '- Scissors - Lizard' : ''}</span>
              <Image src={partyType === 'normal' ? logo : logoBonus} alt="Rock-Paper-Scissors" />
            </h1>
            <div className="rounded-md bg-white h-full py-2 px-8 sm:px-12 flex flex-col items-center justify-between" >
              <span className="block leading-none text-lg sm:text-[24px] text-theme-score uppercase">Score</span>
              <div className="flex items-center gap-1 leading-none text-6xl sm:text-[75px] text-theme-dark pt-1 pb-2">
                <span className="space-y-0.5">
                  <span className="block uppercase text-sm text-theme-score/75 text-center">You</span>
                  <motion.span layout className="block leading-[0.65]" >{score}</motion.span>
                </span>
                <span className="block mt-3" >-</span>
                <span className="space-y-0.5">
                  <span className="block uppercase text-sm text-theme-score/75 text-center">Home</span>
                  <motion.span layout className="block leading-[0.65]" >{homeScore}</motion.span>
                </span>
              </div>
            </div>
          </div>
    
          {/* Main */}
          <div className="grow flex items-center mx-auto w-fit py-3" >
            <AnimatePresence mode="wait">          
              {
                !playerChoice 
                  ? (
                    partyType === 'normal' ? <NormalParty/> : <BonusParty/>
                  ) : (
                    <div className="flex max-lg:flex-wrap items-center justify-center gap-4 sm:gap-10 md:gap-16 lg:gap-20">
                      <motion.div layout className="flex flex-col-reverse md:flex-col gap-6 md:gap-10" >
                        <span className="block uppercase text-xl sm:text-2xl md:text-3xl mx-auto text-center">You Picked</span>
                        <Choice win={winner==='player'} choice={playerChoice} size="large" className="mx-auto w-fit" />
                      </motion.div>
                      {
                        winner && (
                          <motion.div variants={fadeIn} className="hidden lg:flex flex-col items-center justify-center gap-4" >
                            <span className="block text-5xl uppercase mt-28 text-center">{endMessage}</span>
                            <button onClick={resetParty} type="button" className="block w-full text-xl text-center uppercase tracking-widest py-4 bg-white rounded-lg text-theme-dark transition hover:text-theme-score" >Play again</button>
                          </motion.div>
                        )
                      }
                      <motion.div layout variants={fadeIn} className="flex flex-col-reverse md:flex-col gap-6 md:gap-10 self-stretch" >
                        <span className="block uppercase text-xl sm:text-2xl md:text-3xl mx-auto text-center">The House Picked</span>
                        {
                          homeChoice
                            ? (
                              <Choice win={winner==='home'} second={isSameChoice} choice={homeChoice} size="large" className="mx-auto w-fit" />
                            ):(
                              <div className="h-full flex items-center justify-center">
                                <div className="min-h-[120px] w-auto h-5/6 aspect-square rounded-full backdrop-brightness-90 smx-auto animate-pulse"/>
                              </div>
                            )
                        }
                      </motion.div>
                      {
                        winner && (
                          <motion.div variants={fadeIn} className="lg:hidden w-full flex flex-col items-center justify-center gap-3 sm:gap-6 mt-2" >
                            <span className="block text-4xl sm:text-6xl uppercase text-center">{endMessage}</span>
                            <button onClick={resetParty} type="button" className="block w-fit text-xl text-center uppercase tracking-widest py-2 sm:py-4 px-14 sm:px-20 bg-white rounded-lg text-theme-dark transition hover:text-theme-score" >Play again</button>
                          </motion.div>
                        )
                      }
                    </div>
    
                  )
              }
            </AnimatePresence>
          </div>
    
          {/* Rules */}
          <OpenModalButton/>
          {/* Modal - Rules */}
          <Modal partyType={partyType} />
        </motion.main>
      )
}
