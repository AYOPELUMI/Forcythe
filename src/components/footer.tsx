import React from 'react'
import "../padding_style.scss"
import logo from '../assets/images/svgs/forcythe logo.svg';
import facebook from '../assets/images/svgs/facebook.svg';
import twitter from '../assets/images/svgs/x.svg';
import linkedIn from '../assets/images/svgs/linkedin.svg';
import youtube from '../assets/images/svgs/youtube.svg';
import Icon from '../assets/images/svgs/Icon.svg';
import instagram from '../assets/images/svgs/instagram.svg';


const Footer = () => {

    const socialLinks = [
        {
            icon: facebook,
            link: "https://www.facebook.com/forcythe/"
        },
        {
            icon: instagram,
            link: "https://www.instagram.com/forcythe"
        }, {
            icon: twitter,
            link: "https://twitter.com/forcythe_"
        }, {
            icon: linkedIn,
            link: "https://www.linkedin.com/company/forcythe/"
        }, {
            icon: youtube,
            link: "https://www.youtube.com/@forcythe"
        }, {
            icon: Icon,
            link: "https://podcasters.spotify.com/pod/show/the-future-insight"
        },

    ]

    const links = [
        {
            link: "/about",
            name: "About"
        },
        {
            link: "/services",
            name: "Services"
        },
        {
            link: "/portfolio",
            name: "Portfolio"
        },
        {
            link: "/studio",
            name: "Studio"
        },
        {
            link: "/foundation",
            name: "Foundation"
        },
        {
            link: "/careers",
            name: "Careers"
        },
        {
            link: "/blog",
            name: "Blog"
        }
    ]

    return (
        <footer className="section-padding py-10 bg-secondaryBackground">
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
                        <div className="mt-10 hidden md:flex items-center gap-2">
                            {
                                socialLinks.map((value, index) => {
                                    return <a key={value.link} target="_blank" className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center" href={value.link}>
                                        <img alt="social" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src={value.icon} style={{ color: "transparent" }}></img>
                                    </a>

                                })
                            }
                        </div>
                    </div>
                    <div className="lg:pl-10">
                        <h3 className="mb-8 text-2xl text-left font-bold">Company</h3>
                        <ul className="flex flex-col items-start gap-2">
                            {
                                links.map((value, index) => {
                                    return <li key={value.link} className="text-base text-accent2 font-medium">
                                        <a href={value.link}>
                                            <span>{value.name}</span>
                                        </a>
                                    </li>

                                })
                            }
                        </ul>
                        <div className="mt-10 flex md:hidden items-center gap-2 w-fit mx-auto">
                            {
                                socialLinks.map((value, index) => {
                                    return <a key={value.link} target="_blank" className='w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center' href={value.link}>
                                        <img alt="social" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" src={value.icon} style={{ color: "transparent" }}></img>
                                    </a>
                                })}
                        </div>
                    </div>

                </div>
            </div>

            <div className="copyright border-t-[1px] border-accent">
                <p className="text-accent2 text-sm mt-5 text-center md:text-left">Copyright © 2024 Forcythe. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer