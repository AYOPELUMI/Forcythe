
import "../../../padding_style.scss";

const FourthSection = () => {
    return (
        <div className="section-padding py-14" style={{ background: "linear-gradient(0deg, rgb(12, 38, 69) 20%, rgb(3, 5, 22) 70%)" }}>
            <div>
                <p className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-10 text-accent2 text-center"></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8  card-container">
                <div className="w-auto text-white z-10 bg-transparent rounded-[inherit] card-content">
                    <div className="w-full bg-[#030516] rounded-2xl p-8 sm:p-10 hover:shadow-darkGrey custom-animate">
                        <div className="w-fit p-2 bg-[#60A6E7] bg-opacity-60 rounded-md mb-5">
                            <img alt="Experience" loading="lazy" width="30" height="30" decoding="async" data-nimg="1" src="/images/layers-three.svg" style={{ color: "transparent" }} />
                        </div>
                        <h4 className="text-2xl font-medium mb-5">Experience</h4>
                        <p className="mb-0 text-darkGrey text-[17.5px]"></p>

                    </div>
                </div>
                {/* <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[inherit]"></div> */}
            </div>
        </div>
    )
}

export default FourthSection