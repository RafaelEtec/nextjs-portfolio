import { cn } from "@/lib/utils"
import { FaLocationArrow } from "react-icons/fa6"
import MagicButton from "./ui/MagicButton"
import { Spotlight } from "./ui/Spotlight"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
        <div>
            <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="gray" />
            <Spotlight className="-top-10 left-full h-[80vh] w-[50vw]" fill="gray" />
            <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="gray" />
        </div>
        <div className="h-screen w-full bg-primary bg-grid-white/[0.03] absolute top-0 left-0 flex items-center justify-center">
            <div
                className={cn(
                  "absolute inset-0",
                  "[background-size:80px_80px]",
                  "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                )}
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-cente [mask-image:radial-gradient(ellipse_at_center,transparent_3%,black)] bg-primary"></div>
        </div>

        <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                <h2 className="uppercase tracking-widest text-xs text-center text-purple-100 max-w-80">Web Dinamismo Mágico com Next.js</h2>
                <TextGenerateEffect
                  className="text-center text-[40px] md:text-5xl lg:text-6xl"
                  words="Transformando Vontades e Ideias em Experiências"
                />

                <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                  Olá, Me chamo Rafael, e sou um Desenvolvedor Fullstack
                </p>

                <a href="#about">
                  <MagicButton
                    title="Meus Projetos"
                    icon={<FaLocationArrow />}
                    position="right"
                  />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero