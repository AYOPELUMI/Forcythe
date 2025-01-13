import React, { useEffect } from 'react';
import '@splidejs/splide/dist/css/splide.min.css';  // Import Splide styles
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';


const SlidingCarousel = () => {
    useEffect(() => {
        // Initialize Splide with optional settings if needed
        const splide = new Splide('.splide', {
            type: 'loop',
            drag: 'free',
            focus: 'center',
            perPage: 3,
            pagination: false,
            autoplay: true,
            arrows: false,
            interval: 0,
            speed: 1000,    
                 // Set transition speed (in ms)
            easing: 'ease-in-out',
            autoScroll: {
                speed: 1,
            },
        });

        splide.mount();
    }, []);

    return (
        <div className="splide">
            <div className="splide__track">
                <ul className="splide__list">
                    <li className="splide__slide">
                        <img src="https://via.placeholder.com/300x200" alt="Slide 1" />
                    </li>
                    <li className="splide__slide">
                        <img src="https://via.placeholder.com/300x200" alt="Slide 2" />
                    </li>
                    <li className="splide__slide">
                        <img src="https://via.placeholder.com/300x200" alt="Slide 3" />
                    </li>
                    <li className="splide__slide">
                        <img src="https://via.placeholder.com/300x200" alt="Slide 1" />
                    </li>
                    <li className="splide__slide">
                        <img src="https://via.placeholder.com/300x200" alt="Slide 2" />
                    </li>
                    <li className="splide__slide">
                        <img src="https://via.placeholder.com/300x200" alt="Slide 3" />
                    </li>
                    <li className="splide__slide">
                        <img src="https://via.placeholder.com/300x200" alt="Slide 1" />
                    </li>
                    <li className="splide__slide">
                        <img src="https://via.placeholder.com/300x200" alt="Slide 2" />
                    </li>
                    <li className="splide__slide">
                        <img src="https://via.placeholder.com/300x200" alt="Slide 3" />
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default SlidingCarousel