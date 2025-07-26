import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { cn } from "@/lib/utils";
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from "react-icons/fa";
import { TypewriterEffect } from './ui/TypewriterEffect';
import { FlipWords } from './ui/FlipWords';


const Hero = () => {

  const words = [
    {
      text: "Building",
    },
    {
      text: "awesome",
    },
    {
      text: "things",
    },
    {
      text: "with",
    },
    {
      text: (
        <span>
          <FlipWords
            words={["TypeScript", "JavaScript", "Rust"]}
            duration={3000}
            className={"text-blue-500 dark:text-blue-500"}
          />
        </span>
      )
    },
  ];

  return (
    <>
      <Spotlight />
      <div className="relative flex flex-col h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
        {/* Grid background */}
        <div
          className={cn(
            "absolute inset-0 z-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
          )}
        />
        {/* Radial fade background */}
        <div className="absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black z-0" />

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            The only way to do great work is to love what you do.
          </h2>

          <TypewriterEffect
            className="text-center text-xl md:text-3xl lg:text-5xl pt-5 pb-10"
            words={words}
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-blue-100">
            I'm Subhajit Khila also known as{" "}
            <a
              href="https://silentproton.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 transition duration-300 hover:drop-shadow-[0_0_4px_rgba(0,200,255,0.7),0_0_10px_rgba(0,200,255,0.9),0_0_25px_rgba(0,200,255,1)]">
                @silentproton
              </span>
            </a>
          </p>

          <a href="#about">
            <MagicButton title="Get Info" icon={<FaLocationArrow />} position="right" />
          </a>
        </div>
      </div>


    </>
  )
}

export default Hero