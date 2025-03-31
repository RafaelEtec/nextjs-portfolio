import { cn } from "@/lib/utils"
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
        <div className="flex h-screen w-full items-center justify-center bg-primary dark:bg-primary absolute top-0  left-0">
            <div
                className={cn(
                "absolute inset-0",
                "[background-size:80px_80px]",
                "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                )}
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-primary [mask-image:radial-gradient(ellipse_at_center,transparent_3%,black)] dark:bg-primary"></div>
        </div>

        <div className="flex justify-center relative my-20 z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vh] flex flex-col items-center justify-center">
                <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">Web Dinamismo Mágico com Next.js</h2>
                
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
                  />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Hero