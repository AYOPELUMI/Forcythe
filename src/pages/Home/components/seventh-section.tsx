import React from 'react'
import Button from '../../../components/button'

const SeventhSection = () => {
    return (
        <div className="section-padding py-10 text-center bg-[071626] bg-opacity-0" style={{ background: "linear-gradient(0deg, rgb(12, 38, 69) 20%, rgb(3, 5, 22) 69%)" }}>
            <div className="max-w-[45rem] mx-auto">
                <h2 className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6">
                    Ready to scale Join The successful brands that chose us as their growth accelerator
                </h2>
                <div className="w-fit mx-auto mb-5">
                    <Button text='Book a call' />
                </div>
            </div>

        </div>
    )
}

export default SeventhSection