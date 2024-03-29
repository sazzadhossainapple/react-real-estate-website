import { useEffect, useRef, useState } from 'react';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import './heroImageSlider.css';

export default function HeroImageSlider({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current === length - 1 ? 0 : current + 1);
            // console.log(current);
        };
        timeout.current = setTimeout(nextSlide, 3000);
        return function () {
            if (timeout.current) {
                clearTimeout(timeout.current);
            }
        };
    }, [current, length]);

    const nextSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        setCurrent(current === length - 1 ? 0 : current + 1);
        // console.log(current);
    };

    const prevSlide = () => {
        if (timeout.current) {
            clearTimeout(timeout.current);
        }
        setCurrent(current === 0 ? length - 1 : current - 1);
        //console.log(current);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className="heroSection">
            <div className="heroWrapper">
                {slides.map((slide, index) => {
                    return (
                        <div key={index} className="heroSlide">
                            {index === current && (
                                <div className="heroSlider">
                                    <div className="heroImage">
                                        <img
                                            src={slide.image}
                                            alt={slide.alt}
                                        />
                                    </div>
                                    <div className="heroContent">
                                        <h1>{slide.title}</h1>
                                        <p>{slide.price}</p>
                                        <button
                                            to={slide.path}
                                            className="sliderButton"
                                        >
                                            {slide.lable}
                                            <IoMdArrowRoundForward className=" ioMdArrowRoundForward" />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    );
                })}
                <div className="sliderButtons">
                    <IoArrowBack onClick={prevSlide} className="nextArrow" />
                    <IoArrowForward onClick={nextSlide} className="prevArrow" />
                </div>
            </div>
        </div>
    );
}
