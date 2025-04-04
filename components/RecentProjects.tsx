import { projects } from "@/data"
import Link from "next/link"
import { FaLocationArrow } from "react-icons/fa6"
import { CardBody, CardContainer, CardItem } from "./ui/card-3d"

const RecentProjects = () => {
  return (
    <div className="py-36" id="projects">
        <h1 className="heading">
            Uma breve seleção de {' '}
            <span className="text-purple-300">Projetos Recentes</span>
        </h1>

        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8">
            {projects.map(({
                id, title, des, img, iconLists, link,
            }) => (
                <div key={id}>
                    <CardContainer className="inter-var">
                        <CardBody className="relative group/card  hover:shadow-xl hover:shadow-purple-300/[0.4] bg-fill-card border-gray-500/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem translateZ="100" className="w-full mt-4">
                                <img
                                    src={img}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                            </CardItem>
                            <div className="flex flex-col justify-center items-center mt-4">
                                <CardItem
                                    translateZ="80"
                                    className="text-xl font-bold text-white"
                                >
                                    {title}
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2"
                                >
                                    {des}
                                </CardItem>
                            </div>
                            <div className="flex justify-between items-center mt-20">
                                <div className="flex items-center">
                                    {iconLists.map((icon, index) => (
                                        <div key={icon} className="border border-gray-500/[0.1] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center">
                                            <img src={icon} alt={icon} className="p-2"/>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="flex justify-center items-center">
                                    <CardItem
                                        as={Link}
                                        href={link}
                                        target="__blank"
                                        className="flex lg:text-xl md:text-xs text-sm text-purple-300"
                                    >
                                        Ver no GitHub
                                        <FaLocationArrow className="ms-3 mt-1" color="#CBACF9"/>
                                    </CardItem>
                                </div>
                            </div>
                        </CardBody>
                    </CardContainer>

                    {/* <PinContainer title={link} href={link}>
                        <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[20vh] lg:h-[28vh] mb-10">
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
                    </PinContainer> */}
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects