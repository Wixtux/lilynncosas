import Link from 'next/link';
import React from 'react';

interface SidebarListProps {
    items: string[];
}

const SidebarList: React.FC<SidebarListProps> = ({ items }) => {
    return (
        <ul className=''>
            {items.map((item, index) => (
                <li key={index} className='hover:bg-violet-500 py-2 px-4 transition duration-150 ease-in'>
                    <Link key={index} href={item}>{item}</Link>
                </li>
            ))}
        </ul>
    );
};

export default SidebarList;