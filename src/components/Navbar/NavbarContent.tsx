"use client"
import { usePathname } from 'next/navigation';
import React from 'react';

const NavbarContent: React.FC = () => {

    const patname  = usePathname()
    return (
        <nav className='mt-4 font-Holtwood text-sm md:text-2xl text-white'>
            <ul className='flex justify-center items-center md:gap-14 gap-4 mt-6'>
                <li>
                    <a href="/">Home</a>
                    {patname === '/' && <hr className="h-[10px]  border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent " />}
                </li>
                <li>
                    <a href="/Aboutme">sobre mi</a>
                    {patname === '/Aboutme' && <hr className="h-[10px]  border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent " />}
                </li>
                <li>
                    <a href="/sorteo">sorteos</a>
                    {patname === '/sorteo' && <hr className="h-[10px]  border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent " />}
                </li>
                <li>
                    <a href="/r7">R7</a>
                    {patname === '/r7' && <hr className="h-[10px]  border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent " />}
                </li>
            </ul>
            <hr
                className=" h-[2px] w-full border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent "
            />
        </nav>
    );
};

export default NavbarContent;