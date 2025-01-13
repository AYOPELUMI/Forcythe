import React, { useEffect, useRef, useState } from 'react'
import logo from '../assets/images/svgs/forcythe logo.svg';
import Button from './button';
import menu from "../assets/images/svgs/menu.svg";
import "../padding_style.scss";

const header = () => {
    const buttonRef = useRef<HTMLDivElement>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [showDropdown, setShowDropdown] = useState(false);


    const handleClickOutside = (event: MouseEvent) => {
        if (
            dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
            buttonRef.current && !buttonRef.current.contains(event.target as Node)
        ) {
            setShowDropdown(false);
        }

    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const links = ["About", "Services", "Portfolio", "Studio", "Foundation"];
    const menuLinks = ["About", "Services", "Portfolio", "Studio", "Foundation", "Careers", "Blog"];
    return (
        <>
            <header className='section-padding navbar w-full fixed top-0 left-0 py-[1.8rem] flex justify-between gap-10 items-center z-30 backdrop-blur-md'>
                <div className="flex items-center gap-20">

                    <img src={logo} alt="" className='w-28 sm:w-32 md:w-auto' />
                    <ul className='hidden md:flex items-center gap-4 text-base'>
                        {links.map((value, index) => {
                            return <li key={`link ${index}`} className="headerMenu">
                                <a href={`#${value}`}>
                                    {value}
                                </a>
                            </li>
                        })
                        }
                    </ul>
                </div>

                <div className='hidden md:block'>
                    <Button text="Book a call" />

                </div>
                <div onClick={() => setShowDropdown(!showDropdown)} ref={buttonRef} className="menuBtn bg-white bg-opacity-10 rounded-md p-3 md:hidden cursor-pointer">
                    <img alt="menu" loading="lazy" width="18" height="18" decoding="async" data-nimg="1" src={menu} style={{ color: "transparent" }}></img>
                </div>
            </header >

            {showDropdown && (
                <div ref={dropdownRef} className="flex border-0 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone z-[999999999] bg-primaryBackground w-60 rounded-[2rem] fixed md:hidden right-5 top-28">
                    <div className="text-white z-10 bg-transparent rounded-[inherit] w-full">
                        <div className="w-full p-5 py-8 rounded-[2rem]" style={{ background: "linear-gradient(0deg, rgba(7, 22, 38, 0) 32%, rgb(7, 22, 38) 85%)" }}>
                            <ul className="flex flex-col">
                                {menuLinks.map((value, index) => (
                                    <li key={`menu-${index}`} className="w-full py-2.5" onClick={() => setShowDropdown(false)}>
                                        <a href={`#${value}`} className="w-full text-base py-3"><span>{value}</span></a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default header