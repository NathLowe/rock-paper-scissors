"use client"

import logo from "@/images/logo.svg"
import logoBonus from "@/images/logo-bonus.svg"
import Image from "next/image";
import { setPartyType, useParty } from "@/stores/party";
import { setPage } from "@/stores/page";


// Data
const data:{
  image: any;
  type: "normal"|"bonus";
}[] = [
  {
    image: logo,
    type: "normal"
  },
  {
    image: logoBonus,
    type: "bonus"
  },
]

export default function HomePage() {
    // const [type,setType] = useState<"normal"|"bonus"|null>(null)
    const { type } = useParty(state => ({
        type: state.partyType,
    }))

    // const [opponent,setOpponent] = useState<"computer"|"friend"|null>(null)
    
    return (
      <main className="overflow-hidden w-screen min-h-screen flex flex-col gap-10 justify-center container p-4 sm:p-8 text-white">
        <h1 className="sr-only">Rock-Paper-Scissors</h1>
        <section className="space-y-10">
          <h2 className="text-4xl tracking-wider text-center leading-tight" >Choose The Type of game you will like to play</h2>
          <div className="flex justify-center gap-4 sm:gap-12">
              {
                data.map(({image,type:thisType}) => (
                  <div onClick={()=>setPartyType(thisType)} key={thisType} className={`p-6 rounded-lg border-2 border-white flex items-center [&:not(.active)]:lg:opacity-50 transition duration-300 hover:!opacity-100 cursor-pointer [&.active]:border-theme-score [&.active]:bg-theme-score ${type===thisType&&'active'}`}>
                    <Image src={image} alt="Rock-Paper-Scissors" />
                  </div>
                ))
              }
          </div>
        </section>
  
        {/* Choose if you want to play with computer or friend */}
        {/* <section className="mt-6 flex flex-wrap items-start justify-center gap-4 text-2xl">
          <h2 className="block h-fit">Choose your opponent:</h2>
          <div className="flex items-center gap-4 uppercase tracking-widest" >
            <div onClick={()=>setOpponent("computer")} className="space-y-1 cursor-pointer">
              <span className={`block opacity-50 transition duration-750 [&.active]:opacity-100 ${opponent === 'computer' && 'active'}`}>Computer</span>
              {opponent === 'computer' ? <motion.span layoutId="line" className="block w-full h-1 bg-theme-score" /> : <span className="block w-full h-1 bg-none" /> }
            </div>
            <span className="block w-2 h-1 bg-white opacity-50"/>
            <div onClick={()=>setOpponent("friend")} className="space-y-1 cursor-pointer">
              <span className={`block opacity-50 transition duration-750 [&.active]:opacity-100 ${opponent === 'friend' && 'active'}`}>Friend</span>
              {opponent === 'friend' ? <motion.span layoutId="line" className="block w-full h-1 bg-theme-score" /> : <span className="block w-full h-1 bg-none" />}
            </div>
          </div>
        </section> */}
  
        <div className="flex items-center justify-center gap-6" >
            <button type="button" onClick={()=>setPage("party")}
                className={`text-xl px-6 py-2 bg-theme-score text-white rounded-lg opacity-0 [&.active]:opacity-100 transition delay-200 duration-500 ${type && 'active'}`}
            >Start the party</button>
        </div>
      </main>
    )
}
