import React from 'react'
import background from '../../../assets/images/svgs/header-background.svg';
import Button from '../../../components/button';
import Marquee from 'react-fast-marquee';
import stac from "../../../assets/images/svgs/Project images/stac.svg";
import activity from "../../../assets/images/svgs/Project images/activity.svg";
import africaFund from "../../../assets/images/svgs/Project images/africaFund.svg";
import exec from "../../../assets/images/svgs/Project images/exec-pro.svg";
import phone from "../../../assets/images/svgs/Project images/phone.svg";
import starks from "../../../assets/images/svgs/Project images/starks.svg";
import TypingAnimation from './typing-animation-motion';

const TopSection = () => {
    const images = [
        stac,
        activity,
        africaFund,
        starks,
        exec,
        phone,
    ]

    const description = "We’re the architects of digital excellence across industries. We redefine business with cutting-edge digital strategies that invokes sector-wide transformation"
    return (
        <div className={`md:min-h-screen bg-no-repeat bg-top`} style={{
            backgroundImage: `url(${background})`,
        }}>

            <div className="section-padding">

                <div className="w-full bg-white bg-opacity-10 p-5 py-8 md:p-8 lg:p-10 my-10 rounded-[2rem] sm:rounded-[3rem]">

                    <div className="max-w-[56rem]">
                        <div className="min-h-[180px]">

                            <h1 className="text-[3.5rem] sm:text-[4rem] lg:text-[5rem] font-normal leading-[1] mb-7 break-words text-wrap">
                                <TypingAnimation
                                    text="We build "
                                    animateBy="letter"
                                    opacityFade={true}
                                    delay={0.5}
                                    duration={0.1}
                                    className=""
                                />

                                {/* Animate the highlighted word */}
                                <TypingAnimation
                                    text="products"
                                    animateBy="letter"
                                    opacityFade={true}
                                    delay={1.2}
                                    duration={0.1}
                                    className="text-accent"
                                />

                                {/* Animate the rest of the text */}
                                <TypingAnimation
                                    text=" that shape a better future"
                                    animateBy="letter"
                                    opacityFade={true}
                                    delay={1.5}
                                    duration={0.1}
                                    className=""
                                />
                            </h1>

                        </div>
                        <div className="mb-8 max-w-3xl">
                            <div>
                                <p className="text-darkGrey text-base md:text-lg mb-8 leading-7">
                                    <div>
                                        <TypingAnimation
                                            text={description}
                                            animateBy="word"
                                            opacityFade={true}
                                            delay={2}
                                            duration={0.5}
                                            className=""
                                        />

                                    </div>
                                </p>
                            </div>
                        </div>

                        <div className="mb-5">
                            <Button text="Book a call" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-10">
                <div className="min-h-[60px]">
                    <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-12 max-w-[90%] mx-auto text-center">

                        <TypingAnimation
                            text="Succes in "
                            animateBy="word"
                            opacityFade={true}
                            delay={2.5}
                            duration={0.3}
                            className=""
                        />


                        <TypingAnimation
                            text="Motion"
                            animateBy="word"
                            opacityFade={true}
                            delay={2.5}
                            duration={0.3}
                            className="text-accent"
                        />


                        <TypingAnimation
                            text=" - Our client's journey"
                            animateBy="word"
                            opacityFade={true}
                            delay={2.6}
                            duration={0.3}
                            className=""
                        />
                    </p>
                </div>
                <div className="flex flex-col gap-5" >
                    <div>

                        <Marquee gradient={true} gradientColor='transparent' gradientWidth={200} pauseOnHover={false} speed={50} direction="left">
                            <div className="overflow-hidden flex items-stretch gap-5 w-full ml-5">
                                {images.map((image, index) => (
                                    <div className="relative w-auto h-[340px]">
                                        <img alt={`project-image-${index}`} loading="lazy" width="100" height="100" decoding="async" data-nimg="1" className="overflow-hidden w-full h-full" src={image} style={{ color: "transparent" }}></img>
                                    </div>
                                ))}
                            </div>
                            <div className="overflow-hidden flex items-stretch gap-5 w-full ml-5">
                                {images.map((image, index) => (
                                    <div className="relative w-auto h-[340px]">
                                        <img alt={`project-image-${index}`} loading="lazy" width="100" height="100" decoding="async" data-nimg="1" className="overflow-hidden w-full h-full" src={image} style={{ color: "transparent" }}></img>
                                    </div>
                                ))}
                            </div>
                        </Marquee>

                        <Marquee gradient={false} speed={50} direction="right">
                            <div className="overflow-hidden flex items-stretch gap-5 w-full ml-5">
                                {images.map((image, index) => (
                                    <div className="relative w-auto h-[340px]">
                                        <img alt={`project-image-${index}`} loading="lazy" width="100" height="100" decoding="async" data-nimg="1" className="overflow-hidden w-full h-full" src={image} style={{ color: "transparent" }}></img>
                                    </div>
                                ))}
                            </div>
                            <div className="overflow-hidden flex items-stretch gap-5 w-full ml-5">
                                {images.map((image, index) => (
                                    <div className="relative w-auto h-[340px]">
                                        <img alt={`project-image-${index}`} loading="lazy" width="100" height="100" decoding="async" data-nimg="1" className="overflow-hidden w-full h-full" src={image} style={{ color: "transparent" }}></img>
                                    </div>
                                ))}
                            </div>
                        </Marquee>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TopSection