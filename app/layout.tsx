
import "./globals.css";
import Link from "next/link"
import React from "react"
import Head from 'next/head'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
       <Head><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no"></meta></Head>
      
      <body>
      
      <nav className="fixed w-screen left-0 px-4 py-4 flex justify-between items-center bg-white/0 shadow-lg backdrop-blur-xl z-40 ">
      <ul className="flex justify-between w-full px-3 text-base text-lime-400 ">
      <li className=" hover:text-cyan-400 hidden sm:block"><Link href="#homepage">Tech-Stack</Link></li>
      <li className=" hover:text-cyan-400 hidden sm:block"><Link href="#homepage">Education</Link></li>
      <li className=" hover:text-cyan-400 hidden sm:block"><Link href="#homepage">Projects</Link></li>
      <li className=" hover:text-cyan-400 hidden sm:block"><Link href="#homepage">Lets Connect!</Link></li>
      
      </ul>
      </nav>
      
        
        
        
        {children}</body>
    </html>
  );
}
