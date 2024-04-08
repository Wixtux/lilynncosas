import React from 'react';
import SidebarList from './SidebarList';
import Image from 'next/image';
import Logo from '../../../public/img/Logo.png';
import Link from 'next/link';

interface SidebarContentProps {
    // Add any props you need for the sidebar content
}

const SidebarContent: React.FC<SidebarContentProps> = () => {
    return (
        <>
            <div className="bg-violet-400 text-gray-100 h-svh w-52 font-semibold text-base flex flex-col shadow-lg shadow-indigo-950/50 fixed">
                <a href='home' className='self-center mt-5'>
                    <Image src={Logo} alt="Lilynn02" width={100} height={100} className='hover:w-28 duration-100 ease-in' />
                    <div className="p-4 text-center">Lilynn02</div>
                </a>
                <SidebarList items={['Home', 'Youtube', 'Instagram', 'Tik Tok', 'Donaciones','Sobre mi','Contacto']} />
            </div>
        </>
    );
};

export default SidebarContent;