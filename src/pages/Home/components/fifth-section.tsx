import arcL from "../../../assets/images/svgs/arc-L.svg";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const FifthSection = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true, // Run animation only once
    });

    const sizes = [
        { count: 50, title: "Clients" },
        { count: 120, title: "Projects" },
        { count: 10, title: "Team Leads" },
        { count: 10, title: "Glorious Years" },
    ];

    const [animatedCounts, setAnimatedCounts] = useState(
        sizes.map(() => 0) // Initialize all counts to 0
    );

    useEffect(() => {
        if (inView) {
            sizes.forEach((size, index) => {
                animateCounter(index, size.count);
            });
        }
    }, [inView]); // Trigger when inView changes

    const animateCounter = (index: number, target: number) => {
        let start = 0;
        const duration = 1500; // Animation duration in ms
        const stepTime = 1000 / 60; // Approx. 60fps
        const increment = Math.ceil(target / (duration / stepTime));

        const updateCount = () => {
            start += increment;
            if (start >= target) {
                start = target;
            }
            setAnimatedCounts((prev) => {
                const updated = [...prev];
                updated[index] = start;
                return updated;
            });
            if (start < target) {
                requestAnimationFrame(updateCount);
            }
        };

        requestAnimationFrame(updateCount);
    };

    return (
        <div
            className="py-14 md:py-20 xl:py-28"
            style={{
                background: "linear-gradient(rgb(12, 38, 69) 20%, rgb(3, 5, 22) 60%)",
            }}
        >
            <div
                className={`max-w-[52rem] mx-auto bg-cover md:bg-contain lg:bg-contain bg-top bg-no-repeat`}
                style={{ backgroundImage: `url("${arcL}")` }}
            >
                <div className="pt-20 sm:pt-40 lg:pt-60 pb-10 md:pb-14 lg:pb-20 max-w-xl mx-auto text-center px-5">
                    <div className="mb-14 lg:mb-20 max-w-[19rem] md:max-w-md mx-auto">
                        <p className="text-xl md:text-2xl lg:text-3xl font-medium">
                            We build solutions that businesses from all over the world trust
                        </p>
                    </div>
                    <div
                        ref={ref}
                        className="flex justify-evenly sm:justify-between items-center gap-3"
                    >
                        {sizes.map((value, index) => (
                            <div
                                key={`sizes-${value.title}`}
                                className="flex flex-col gap-3 text-left w-fit"
                            >
                                <div
                                    className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-medium"
                                >
                                    {animatedCounts[index]}+
                                </div>
                                <span className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
                                    {value.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FifthSection;
