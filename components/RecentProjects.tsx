import { projects } from "@/data"
import { FaLocationArrow } from "react-icons/fa6"
import { PinContainer } from "./ui/pin"

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
        <h1 className="heading">
            Uma breve seleção de {' '}
            <span className="text-purple-300">Projetos Recentes</span>
        </h1>

        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
            {projects.map(({
                id, title, des, img, iconLists, link,
            }) => (
                <div key={id} className="sm:h[41rem] h-[32rem] lg:min-h[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
                    <PinContainer title={link} href={link}>
                        <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[20vh] lg:h-[18vh] mb-10">
                            <img src={img} alt={title} className="z-10 absolute bottom-0"/>
                        </div>
                        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                            {title}
                        </h1>

                        <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                            {des}
                        </p>

                        <div className="flex items-center justify-between mt-7 mb-3">
                            <div className="flex items-center">
                                {iconLists.map((icon, index) => (
                                    <div key={icon} className="border border-gray-500/[0.1] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center">
                                        <img src={icon} alt={icon} className="p-2"/>
                                    </div>
                                ))}
                            </div>

                            <div className="flex justify-center items-center">
                                <p className="flex lg:text-xl md:text-xs text-sm text-purple-300">Ver no GitHub</p>
                                <FaLocationArrow className="ms-3" color="#CBACF9"/>
                            </div>
                        </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects