import React from 'react'
import Button from '../../../components/button'
import TypingAnimation from './typing-animation-motion'

const SeventhSection = () => {
    return (
        <div className="section-padding py-10 text-center bg-[071626] bg-opacity-0" style={{ background: "linear-gradient(0deg, rgb(12, 38, 69) 20%, rgb(3, 5, 22) 69%)" }}>
            <div className="max-w-[45rem] mx-auto">
                <h2 className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6 break-words text-wrap">


                    <TypingAnimation
                        text="Ready to scale? "
                        animateBy="letter"
                        opacityFade={true}
                        delay={0.5}
                        duration={0.1}
                        className="text-accent"
                    />

                    <TypingAnimation
                        text="Join The successful brands that chose us as their "
                        animateBy="letter"
                        opacityFade={true}
                        delay={0.5}
                        duration={0.1}
                        className=""
                    />

                    <TypingAnimation
                        text="growth accelerator"
                        animateBy="letter"
                        opacityFade={true}
                        delay={0.5}
                        duration={0.1}
                        className="text-accent"
                    />
                </h2>
                <div className="w-fit mx-auto mb-5">
                    <Button text='Book a call' />
                </div>
            </div>

        </div>
    )
}

export default SeventhSection