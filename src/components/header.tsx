import React from 'react'
import logo from '../assets/images/svgs/forcythe logo.svg';

const header = () => {

    const links = ["About", "Services", "Portfolio", "Studio", "Foundation"];
    return (
        <div className=' w-full z-30 fixed left-0 top-0  backdrop-blur-xl py-7  flex justify-between md:px-10 lg:px-14 sm:px-5  gap-10'>

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

            <div className='hidden md:block'>
                <div className='relative w-fit group'>
                    <button data-cal-namespace data-cal-link="forcythe/discovery" className="action-button custom-animate w-w-fit py-[12px] px-5 flex gap-2 items-center justify-center rounded-full
                    bg-white text-black text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md">Book a Call</button>
                    <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
                </div>

            </div>
            <div className="menuBtn bg-white bg-opacity-10 rounded-md p-3 md:hidden cursor-pointer">
                <img alt="menu" loading="lazy" width="18" height="18" decoding="async" data-nimg="1" src="/images/menu.svg" style={{color: "transparent"}}></img>
            </div>
        </div >
    )
}

export default header