import React from 'react'
import { useState } from 'react'
import cameraMan from "../../../assets/images/svgs/camera-man.svg";
import planLaunch from "../../../assets/images/svgs/plan-launch.svg";
import planDevelop from "../../../assets/images/svgs/plan-develop.svg";
import planDesign from "../../../assets/images/svgs/plan-design.svg";
import Button from '../../../components/button';

const ThridSection = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const overlays = [
        {
            name: "Idea",
            image: cameraMan,
            title: "Your vision is unique",
            description: "Nuture your idea into a Blueprint for success with our strategic insights and industry expertise. Your vision is unique.Lets us shape it"
        },
        {
            name: "Design",
            image: planDesign,
            title: "Crafting the blueprint for success",
            description: "Design is more than aesthetics, its about creating user experiences that resonate and convert.Our design experts shape your vision into a stunning reality"
        },
        {
            name: "Develop",
            image: planDevelop,
            title: "Turning blueprint into reality",
            description: "We breathe life into designs, building robust platforms ready to disrupt markets.Harness the experience of our development team to bring your Cincept into life"
        },
        {
            name: "Launch",
            image: planLaunch,
            title: "Your launchpad to the market",
            description: "Launching is just the beginning, we ensure your product makes a splash and keep making waves, ensuring a continual customer acqusition"
        }
    ]
    return (
        <div className="section-padding py-20">
            <div className="mb-12 xl:mb-0 max-w-[45rem]">
                <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3rem]">
                    From Spark to Spotlight: we take you every step of the way to success
                </p>
            </div>
            <div className="flex lg:items-end flex-col md:flex-row">
                <div className="basis-1/2 flex mb-8 md:mb-0">
                    <div className="md:pr-10">
                        <div className="border-2 border-accent2 mb-12 rounded-full grid gap-1 grid-cols-4 p-3.5">
                            {overlays.map((value, index) => (
                                <div onClick={() => setSelectedIndex(index)} key={`overlay-${value}-${index}`} className={`overflow-hidden px-2 md:px-2.5 py-3 md:py-3.5 rounded-full text-center text-base font-medium cursor-pointer transition-all duration-300 ${selectedIndex == index ? "bg-accent2 text-black" : "bg-transparent text-white"} `}>{value.name}</div>

                            ))}
                        </div>
                        <p className="text-[1.8rem] sm:text-[2rem] font-[500] leading-8 sm:leading-8 mb-12">
                            {overlays[selectedIndex].title}
                        </p>
                        <p className="text-darkGrey text-base md:text-lg mb-8 leading-7">
                            {overlays[selectedIndex].description}
                        </p>

                        <Button text="Book a call" />
                    </div>
                </div>

                <div className="basis-1/2 relative flex justify-start md:justify-end mt-6 md:mt-0">
                    <img alt="plan-img" loading="lazy" width="200" height="200" decoding="async" data-nimg="1" className="w-full h-[350px] md:w-[95%] md:h-[95%] lg:w-[90%] lg:h-[426px]" src={overlays[selectedIndex].image} style={{ color: "transparent" }} />
                </div>
            </div>
        </div>
    )
}

export default ThridSection