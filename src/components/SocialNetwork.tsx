import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitch } from "react-icons/fa";

const SocialNetworkHero = () => {
    return (
        <>
            <div className='mt-5 text-white'>
                <div className="p-4 text-center font-Holtwood text-sm md:text-2xl">Sigueme en mis redes</div>
                <div className='flex flex-row gap-4 md:gap-9 text-2xl md:text-5xl justify-center p-4'>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube />
                    </a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                        <FaTiktok />
                    </a>
                    <a href="https://twitch.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitch />
                    </a>
                </div>
            </div>
        </>
    );
};

export default SocialNetworkHero;