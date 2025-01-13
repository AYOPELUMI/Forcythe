import React from 'react'
import { Story } from './second-section'


const card = ({ props, index }: { props: Story; index: number }) => {

    return (
        <div className="mt-5 w-full md:w-[70%] lg:w-[50%] rounded-[1.8rem] flex flex-col sm:flex-row p-5 sm:p-7 bg-accent3 lg:relative" style={{ left: `${index == 0 ? 0 : (10 * index) + 10}%` }}>
            <div className="sm:basis-[58%] pr-3">
                <p className="text-base font-bold mb-4">
                    {props.alt}
                </p>
                <p className="text-base leading-7 mb-3">
                    {props.description}
                </p>

                <p className="text-[15px] font-semibold mb-4">
                    {props.signature}
                </p>
            </div>
            <div className="w-full h-[24rem] sm:w-auto sm:h-auto sm:basis-[42%] relative object-top mt-3 sm:mt-0">
                <div className="bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 animate-pulse rounded-xl"></div>
                <img alt="ceo" loading="lazy" decoding="async" data-nimg="fill" className="rounded-xl relative object-top" src={props.founder} style={{ position: "absolute", height: "100%", width: "100%", inset: "0px", objectFit: "cover", color: "transparent" }} />
            </div>
        </div>
    )
}

export default card