"use client"

import React from 'react'
import { openModal } from '@/stores/modal'
import { HiMiniHome } from 'react-icons/hi2'
import { resetPage } from '@/stores/party'
import { setPage } from '@/stores/page'

export default function OpenModalButton() {
  const handleGoToHome = () => {
    resetPage()
    setPage("home")
  }
  return (
    <div className="flex items-center gap-2 mx-auto md:fixed bottom-6 right-6 z-30">
      
      <button className="p-3 w-fit text-theme-border border-2 border-current rounded-lg
        cursor-pointer transition hover:text-white " onClick={handleGoToHome}
      >
        <HiMiniHome className="w-5 h-5 fill-current"/>
      </button>
      <button className="py-3 px-10 leading-none w-fit text-theme-border border-2 border-current rounded-lg uppercase text-xl tracking-wider
        cursor-pointer transition hover:text-white " onClick={openModal}
      >
        Rules
      </button>
    </div>
  )
}
