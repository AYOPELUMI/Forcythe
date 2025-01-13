

const Button = ({ text }: { text: string }) => {
    return (
        <div className='relative w-fit group'>
            <button data-cal-namespace data-cal-link="forcythe/discovery" className="action-button custom-animate w-w-fit py-[12px] px-5 flex gap-2 items-center justify-center rounded-full
    bg-white text-black text-base relative z-10 font-semibold group-hover:bg-[#064386] group-hover:text-white text-center whitespace-nowrap cursor-pointer hover:shadow-md">{text}</button>
            <div className="w-full h-full absolute top-1.5 right-1.5 z-0 rounded-full border-[1px] border-dashed group-hover:border-[#064386]"></div>
        </div>
    )
}

export default Button