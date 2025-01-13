import React from 'react'
import Button from '../../../components/button'
import TypingAnimation from './typing-animation-motion'

import ai_image from "../../../assets/images/will_ai_take_over_art.webp";
import token from "../../../assets/images/cryptocurrency_vs_token.webp";
import asset from "../../../assets/images/cryptocurrency_&_crypto_asset.webp";

const SixthSection = () => {
    const blogs = [
        {
            image: ai_image,
            time: " may 29th, 2024",
            author: " The reformist",
            type: "Blog",
            title: " Will AI take over Art?",
        },
        {
            image: token,
            time: " may 29th, 2024",
            author: " The reformist",
            type: "Blog",
            title: "Cryptocurrency vs Tokens",
        },
        {
            image: asset,
            time: " may 29th, 2024",
            author: " The reformist",
            type: "Blog",
            title: "cryptocurrency vs crypto asset",
        },
    ]
    return (
        <div className="section-padding my-10 lg:mb-24">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
                <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6 sm:mb-4 md:mb-0">
                    <TypingAnimation
                        text="Read our articles, news and product blog "
                        animateBy="word"
                        opacityFade={true}
                        delay={0.3}
                        duration={0.3}
                        className=""
                    />
                </p>

                <Button text={'Book a call'} />
            </div>

            <div className="blogs grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
                {blogs.map((value, index) => (

                    <a key={`blog-${value.title}`} className="w-full pb-5 rounded-[1.3rem] relative overflow-hidden cursor-pointer group hover:shadow-sm hover:shadow-accent transition-all duration-500" href="#">
                        <div className="h-60 sm:h-56 relative mb-6">
                            <div className="bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-[1.3rem] animate-pulse"></div>

                            <img sizes="(max-width: 320px) 320px, (max-width: 640px) 640px,(max-width: 768px) 768px,  (max-width: 1024px) 1024px, 1440px" alt={value.title} loading="lazy" decoding="async" data-nimg="fill" className="w-full h-full rounded-[1.3rem] transition-transform duration-300 transform group-hover:scale-105" src={value.image} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", color: "transparent" }} />
                        </div>
                        <div className="pl-5 relative before:absolute before:w-[1px] before:h-[90%] before:bg-white before:left-0 before:top-[50%] before:-translate-y-[50%] group-hover:translate-x-4 custom-animate">
                            <p className="text-lg font-semibold mb-1">{value.type}</p>
                            <div className="text-base text-darkGrey flex items-center mb-6">
                                <span>{value.author}</span>
                                <div className="h-2 w-2 rounded-full bg-white mx-[6px] "></div>
                                <span>{value.time}</span>
                            </div>
                            <h6 className="text-xl md:text-2xl font-semibold line-clamp-2">{value.title}</h6>
                        </div>

                    </a>
                ))}
            </div>
        </div>
    )
}

export default SixthSection