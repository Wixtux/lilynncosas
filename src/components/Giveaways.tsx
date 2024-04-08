import Image from 'next/image';
import React from 'react';

const Giveaways = () => {
    return (
        <>
            <section className='text-white p-4'>
                <h2 className='text-4xl text-center font-Holtwood text-black'>Sorteos</h2>
                <h3 className='text-5xl text-center font-Holtwood p-4'>UNETE A NUESTROS SORTEOS</h3>
                <p className='text-center font-Holtwood'>Participa y gana premios increibles casi todos los dias en twitch</p>
                <div className='flex flex-wrap items-center justify-center gap-14 p-4'>
                    <Image src='/img/wr.svg' alt='Sorteo' width={300} height={300} className='rounded-lg'/>
                    <Image src='/img/lol.svg' alt='Sorteo' width={300} height={300} className='rounded-lg'/>
                    <Image src='/img/tft.svg' alt='Sorteo' width={300} height={300} className='rounded-lg'/>
                </div>
            </section>
        </>
    );
};

export default Giveaways;