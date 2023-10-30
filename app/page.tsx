"use client"

import { usePage } from "@/stores/page";
import HomePage from "@/components/HomePage";
import PartyPage from "@/components/PartyPage";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const page = usePage(state => state.page)
  
  return (
    <AnimatePresence mode="wait">
      {
        page === 'home'
          ? <HomePage/>
          : <PartyPage/>
      }
    </AnimatePresence>
  )
}