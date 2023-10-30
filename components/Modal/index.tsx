"use client"

import { Rules, RulesBonus } from '@/lib/icons'
import { closeModal, useModal } from '@/stores/modal'
import React from 'react'
import { IoClose } from 'react-icons/io5'

import rules from "@/images/image-rules.svg"
import rulesBonus from "@/images/image-rules-bonus.svg"
import Image from 'next/image'


// Props
type ModalProps = {
    partyType: "normal"|"bonus"|null
}

export default function Modal({ partyType }: ModalProps) {
    partyType = partyType || "normal"
    const isModalOpen = useModal(state => state.isModalOpen)

    if(!isModalOpen) return <div/>
    return (
        <div className='fixed top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center z-50' >
            <section className="w-full h-full flex flex-col justify-between items-center bg-white py-20 px-5 rounded-lg
            sm:w-fit sm:h-fit sm:block sm:py-8">
                <div className="flex items-center justify-between gap-2">
                    <h2 className='block w-fit text-theme-dark font-bold text-4xl uppercase tracking-wide leading-none m-0'>Rules</h2>
                    <IoClose onClick={closeModal} className="hidden sm:block w-10 h-10 text-theme-border transition cursor-pointer hover:text-theme-dark" />
                </div>
                <div className="my-6 p-4 w-fit mx-auto">
                    <Image src={partyType === "normal" ? rules : rulesBonus} alt="Rules of the game" />
                    {/* {partyType === "normal" ? <Rules/> : <RulesBonus/>} */}
                </div>
                <IoClose onClick={closeModal} className="sm:hidden w-10 h-10 text-theme-border transition cursor-pointer hover:text-theme-dark" />
            </section>
        </div>
    )
}
