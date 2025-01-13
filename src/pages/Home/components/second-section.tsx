import React, { useEffect, useState } from 'react'
import stacai from "../../../assets/images/svgs/stacai.svg";
import starks from "../../../assets/images/svgs/starks.svg";
import exec from "../../../assets/images/svgs/ExecutivePros Logo.svg";
import beaupreneur from "../../../assets/images/svgs/Beaupreneur.svg";
import iwaria from "../../../assets/images/svgs/iwaria.svg";
import christina from "../../../assets/images/svgs/founders/christina.svg";
import john from "../../../assets/images/svgs/founders/john.svg";
import edwin from "../../../assets/images/svgs/founders/edwin.svg";
import execCeo from "../../../assets/images/svgs/founders/executive-pro-ceo.svg";
import iwariaFounder from "../../../assets/images/svgs/founders/iwaria-founder.svg";
import Card from './card';

export type Story = {
    image: string;
    name?: string;
    alt: string;
    width: string;
    founder: string
    description: string;
    signature: string;
};
const SecondSection = () => {
    const [selectedIndex, setSelectedIndex] = useState(0); // State to manage the selected index
    const [isManual, setIsManual] = useState(false);
    const stories: Story[] = [
        {
            image: starks,
            name: "Starks",
            alt: "Starks Associate",
            width: "w-full",
            founder: john,
            description: "Starks is a leading provider of digital solutions, specializing in web and mobile app development, blockchain development, and AI development. With a team of experienced professionals, Starks offers tailored solutions to meet the unique needs of businesses across various industries.",
            signature: "John Starks, CEO",
        },
        {
            image: exec,
            alt: "ExecutivePros",
            width: "w-full",
            founder: execCeo,
            description: "ExecutivePros is a leading provider of digital solutions, specializing in web and mobile app development, blockchain development, and AI development. With a team of experienced professionals, ExecutivePros offers tailored solutions to meet the unique needs of businesses across various industries.",
            signature: "Testimony,Co-founder"

        },
        {
            image: stacai,
            alt: "Stac Ai",
            width: "w-full",
            founder: edwin,
            description: "Stac AI is a leading provider of digital solutions, specializing in web and mobile app development, blockchain development, and AI development. With a team of experienced professionals, Stac AI offers tailored solutions to meet the unique needs of businesses across various industries.",
            signature: "Edwin, Co-founder"

        },
        {
            image: iwaria,
            alt: "Iwaria",
            width: "w-20",
            founder: iwariaFounder,
            description: "Iwaria is a leading provider of digital solutions, specializing in web and mobile app development, blockchain development, and AI development. With a team of experienced professionals, Iwaria offers tailored solutions to meet the unique needs of businesses across various industries.",
            signature: "Iwaria, Founder"

        },
        {
            image: beaupreneur,
            alt: "Beaupreneur",
            width: "w-36",
            founder: christina,
            description: "Beaupreneur is a leading provider of digital solutions, specializing in web and mobile app development, blockchain development, and AI development. With a team of experienced professionals, Beaupreneur offers tailored solutions to meet the unique needs of businesses across various industries.",
            signature: "Christina, Founder"

        }
    ]
    useEffect(() => {
        if (!isManual) {
            const timer = setInterval(() => {
                setSelectedIndex((prevIndex) => (prevIndex + 1) % stories.length);
            }, 15000);

            return () => clearInterval(timer); // Cleanup timer on unmount
        }
    }, [isManual, stories.length]);

    const handleStoryClick = (index: number) => {
        setSelectedIndex(index);
        setIsManual(true);
        setTimeout(() => setIsManual(false), 15000); // Resume auto-changing after 15 seconds
    };
    return (
        <div className=" section-padding py-10">
            <div>
                <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3.5rem] mb-12 max-w-4xl mx-auto text-center">
                    <span>Discover the transformative stories of startups that scaled new heights with us</span>
                </p>
            </div>

            <div className="w-full overflow-x-scroll scrollbar-hide">
                <div className="w-full border-[1px] border-[#06438C] rounded-full grid grid-cols-5 min-w-[750px]">
                    {
                        stories.map((value, index) => {
                            return <div onClick={() => handleStoryClick(index)} key={`story-${value.image}`} className={`w-full p-[1.1rem] cursor-pointer transition-all duration-300 ${index == 0 ? "rounded-s-full" : index == 4 ? "rounded-e-full" : null} ${selectedIndex == index ? "bg-accent3" : "false"} `}>
                                <div className="w-fit h-full col mx-auto gap-1.5 text-white text-[17px] font-medium min-w-fit flex items-center justify-center">
                                    <img alt={value.alt} loading="lazy" width="20" height="20" decoding="async" data-nimg="1" className={value.width} src={value.image} style={{ color: "transparent" }} />
                                    {value.name}
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <Card props={stories[selectedIndex]} index={selectedIndex} />
        </div>
    )
}

export default SecondSection