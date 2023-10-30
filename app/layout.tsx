import './globals.css'
import type { Metadata } from 'next'
import { Barlow_Semi_Condensed } from 'next/font/google'

import og from "@/images/og.jpg"

const font = Barlow_Semi_Condensed({
  subsets: ['latin'],
  weight: ['600','700']
})


export const metadata: Metadata = {
  title: 'Rock-Paper-Scissors - by NathLowe',
  description: 'Play the classic Rock-Paper-Scissors game online or the custom Rock-Paper-Scissors-Lizard-Spock. Test your luck and strategy in this fun and interactive web game.',
  authors:{
    name:  "NathLowe",
    url: "https://www.linkedin.com/in/nathlowe/"
  },
  keywords:["Rock-Paper-Scissors","RPS Game","Online Game","Multiplayer Game","Strategy Game","Hand Game","Classic Game","Fun Game","Play Game Online","Browser Game","Interactive Game","Gaming","Entertainment","Challenge","Luck","Decision Making","Multiplayer","Rock vs Paper vs Scissors","Hand Gesture Game","HTML5 Game"],
  openGraph:{
    title: 'Rock-Paper-Scissors - by NathLowe',
    description: 'Play the classic Rock-Paper-Scissors game online or the custom Rock-Paper-Scissors-Lizard-Spock. Test your luck and strategy in this fun and interactive web game.',
    url: "https://www.linkedin.com/in/nathlowe/",
    images: og.src
  },
  twitter:{
    title: 'Rock-Paper-Scissors - by NathLowe',
    description: 'Play the classic Rock-Paper-Scissors game online or the custom Rock-Paper-Scissors-Lizard-Spock. Test your luck and strategy in this fun and interactive web game.',
    card: "summary_large_image",
    images: og.src,
    site: "http://www.linkedin.com/in/nathlowe"
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${font.className}`} style={{backgroundImage: "radial-gradient(circle at top,hsl(214, 47%, 23%), hsl(237, 49%, 15%))"}}  >{children}</body>
    </html>
  )
}
