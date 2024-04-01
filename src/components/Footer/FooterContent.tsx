import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const FooterContent: React.FC = () => {
    return (
        <footer className=' text-gray-100 justify-center items-center flex flex-col gap-1'>
            <div className="text-center font-semibold">
                <p>Sigueme en mis redes sociales</p>
            </div>
            <div className="flex flex-row gap-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </div>
        </footer>
    );
};

export default FooterContent;