import Giveaways from "@/components/Giveaways";
import HeroHome from "@/components/HeroHome";
import NavbarContent from "@/components/Navbar/NavbarContent";
import SocialNetworkHero from "@/components/SocialNetwork";


export default function Home() {
  return (
    <>
    <HeroHome />
    <SocialNetworkHero/>
    <section className=' py-5 font-semibold text-slate-100 mt-5'>
        <a href='https://www.twitch.tv/lilynn02' className='p-4  ease-in duration-300'>
            <h2 className='text-lg md:text-4xl text-center font-Holtwood text-black -rotate-6'>EN VIVO</h2>
            <h3 className='text-xl md:text-5xl text-center font-Holtwood p-4'>TWITCH.TV/LILYNN02</h3>
        </a>
        <div className='flex flex-wrap items-center justify-center p-4'>
            <iframe src='https://player.twitch.tv/?channel=lilynn02&parent=localhost' allowFullScreen height="608" width="1080" />
            <iframe id="twitch-chat-embed"
                src="https://www.twitch.tv/embed/lilynn02/chat?parent=localhost"
                height="608"
                width="350">
            </iframe>
        </div>
    </section>
    <Giveaways />
</>
  );
}
