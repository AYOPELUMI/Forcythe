import React from 'react'
import "../padding_style.scss"
import logo from '../assets/images/svgs/forcythe logo.svg';


const Footer = () => {
    return (
        <div className="section-padding py-10 bg-secondaryBackground">
            <div className="lg:grid lg:grid-cols-3 my-10">
                <div className="max-w-lg mb-10 lg:mb-0">

                    <div className="w-full grid grid-cols-4">
                        <input className="py-3 col-span-3 bg-transparent outline-none border border-white rounded-s-full px-4 text-sm placeholder:text-[#79767D]" placeholder="Your Email Address" type="text"></input>
                        <button className="py-3 h-full bg-white text-black hover:bg-[#064386] hover:text-white custom-animate rounded-e-full text-sm font-medium border border-l-0 border-white">Subscribe</button>
                    </div>
                    <div className="flex gap-3 mt-5 items-center">
                        <div className="w-5 h-5 border-2 rounded-full bg-transparent border-white cursor-pointer flex items-center justify-center">
                            <input className="hidden" id="agreement" type="checkbox" name="agreement"></input>
                        </div>
                        <label htmlFor="agreement" className="text-sm cursor-pointer">I agree to receive other notifications from Forcythe</label>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:col-span-2 gap-10 md:gap-0">
                    <div className="lg:pl-14 md:col-span-2 md:pr-10">
                        <img alt="Forcythe logo" fetchPriority="high" width="130" height="9" decoding="async" data-nimg="1" className="mb-5 md:mb-8" src={logo} style={{ color: "transparent" }}></img>
                        <p className="text-base text-darkGrey leadin font-normal">
                            "We are the growth company for businesses looking to scale. We are dedicated to transforming businesses with bespoke digital solutions that drive growth."
                        </p>
                        <div className="mt-10 hidden md:flex items-center gap-2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer