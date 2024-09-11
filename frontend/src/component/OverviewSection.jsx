import React, { useEffect, useState } from 'react';
import { useMediaQuery } from "@uidotdev/usehooks";

export default function OverviewSection() {
    const isLargeScreen = useMediaQuery("(max-width: 768px)");

    const [activeSlide, setActiveSlide] = useState('left');
    const [transitionClass, setTransitionClass] = useState('translate-x-0');// Default horizontal position
    
    // Slide switching
    useEffect(() => {
        const interval = setInterval(() => {
            setTransitionClass(activeSlide === 'left' ? 'translate-x-full' : '-translate-x-full'); // Slide out to right for left, and to left for right
            setTimeout(() => {
                setActiveSlide((prevSlide) => (prevSlide === 'left' ? 'right' : 'left'));
                setTransitionClass('translate-x-0'); // Reset position for the new slide
            }, 500); // Match the transition duration
        }, 4000); // Change every 4 seconds
    
        return () => clearInterval(interval);
    }, [activeSlide]);

    // Slide content for both large and small screens
    return (
        <div className="relative opacity-70 w-full">
            {isLargeScreen ? (
                <div className="absolute bottom-0 left-0 mb-20 px-14 bg-base-200 h-[120px] w-full shadow-lg">
                    <div className="flex justify-center items-center w-full mx-auto h-full max-h-[900px]">
                        {activeSlide === 'left' ? (
                            /* Left section (statistik) */
                            <div className={`flex justify-between items-center w-full text-primary transition-transform duration-500 ease-in-out ${activeSlide === 'left' ? transitionClass : 'translate-x-full'}`}>
                                <div className="flex flex-col justify-center items-center">
                                    <h1 className="text-2xl font-bold leading-tight">21.000+</h1>
                                    <p className="text-base font-medium">Orang terbantu</p>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <h1 className="text-2xl font-bold leading-tight">10.000+</h1>
                                    <p className="text-base font-medium">Liter Air Bersih</p>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <h1 className="text-2xl font-bold leading-tight">150+</h1>
                                    <p className="text-base font-medium">Anggota Aktif</p>
                                </div>
                            </div>
                        ) : (
                            /* Right section (negara) */
                            <div className={`flex justify-center items-center gap-5 text-primary transition-transform duration-500 ease-in-out ${activeSlide === 'right' ? transitionClass : '-translate-x-full'}`}>
                                <div className="flex flex-col justify-center items-center">
                                    <p className="text-Base font-medium text-center">Negara-Negara dengan Kontribusi User Terbesar untuk Kesuksesan Program Ini</p>
                                    <ul className="grid grid-flow-col grid-rows-2 sm:flex sm:justify-center sm:items-center text-base font-bold list-disc justify-center items-center">
                                        <li className='mx-4 '>Indonesia</li>
                                        <li className='mx-4'>Singapura</li>
                                        <li className='mx-4'>Malaysia</li>
                                        <li className='mx-4'>Brunei</li>  
                                    </ul>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>
            ) : (
                <div className='absolute bottom-0 mb-12 left-0 h-[160px] w-full bg-base-200 p-5 xl:p-3 shadow-lg'>
                    <div className="flex justify-center gap-20 items-center w-full mx-auto h-full max-h-[900px]">
                        {/* Left section (statistik) */}
                        <div className="flex justify-center gap-10 text-primary">
                            <div className="flex flex-col">
                                <h1 className="text-2xl 2xl:text-title-3 font-bold leading-tight text-center 2xl:text-start">21.000+</h1>
                                <p className="text-base 2xl:text-Base-3 font-medium text-center 2xl:text-start">Orang terbantu</p>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-2xl 2xl:text-title-3 font-bold leading-tight text-center 2xl:text-start">10.000+</h1>
                                <p className="text-base 2xl:text-Base-3 font-medium text-center 2xl:text-start">Liter Air Bersih</p>
                            </div>
                            <div className="flex flex-col">
                                <h1 className="text-2xl 2xl:text-title-3 font-bold leading-tight text-center 2xl:text-start">150+</h1>
                                <p className="text-base 2xl:text-Base-3 font-medium text-center 2xl:text-start">Anggota Aktif</p>
                            </div>
                        </div>
                        {/* Right section (negara) */}
                        <div className="flex flex-col justify-between text-primary">
                            <p className="text-lg 2xl:text-Base-2 font-medium break-all">Negara-negara dengan Kontribusi User Terbesar untuk Kesuksesan Program Ini</p>
                            <ul className="flex 2xl:gap-8 justify-stretch text-base 2xl:text-Base-3 font-bold list-disc pl-5 flex-wrap">
                                <li className='pr-8'>Indonesia</li>
                                <li className='pr-8'>Singapura</li>
                                <li className='pr-8'>Malaysia</li>
                                <li className='pr-8'>Brunei</li>  
                            </ul>
                        </div>
                    </div>
                </div>  
            )}
        </div>
    );
}