import Image from 'next/image';
import React from 'react';
import { FaDiscord } from "react-icons/fa";

const HeroHome = () => {
    return (
        <>
            <section className="text-gray-100 w-full flex flex-row gap-4 justify-start md:justify-center items-center font-Beaufort p-10">
                <div>
                   <h1 className="text-2xl md:text-8xl font-semibold">UNETE A <br/> LA COMUNIDAD <br/> DE LOS PRIMOS</h1>
                   <a href="">
                        <button className="bg-blue-300 border-2 flex justify-between items-center font-Beaufort text-sm md:text-2xl w-24  md:w-36 border-gray-100 text-gray-100 p-2 rounded-lg mt-4 hover:bg-blue-400 duration-200 ease-in">Discord <FaDiscord className='w-16'/> </button>
                    </a>
                </div>
                <Image src='/img/Patitashi.png' alt='Patitas' width={300} height={300} className='drop-shadow-2xl rounded-[100px] hidden md:block' />
                <Image src='/img/Patitashi.png' alt='Patitas' width={75} height={75} className='drop-shadow-2xl rounded-[20px] block md:hidden' />
            </section>
        </>
    );
};

export default HeroHome;