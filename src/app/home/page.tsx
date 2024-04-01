import React from 'react';

const HomePage: React.FC = () => {
    return (
        <div className='py-5 font-semibold text-slate-100'>
            <div className='flex flex-wrap items-center justify-center p-4'>
                <iframe src='https://player.twitch.tv/?channel=lilynn02&parent=localhost' allowFullScreen height="608" width="1080" />
                <iframe id="twitch-chat-embed"
                    src="https://www.twitch.tv/embed/lilynn02/chat?parent=localhost"
                    height="608"
                    width="350">
                </iframe>
            </div>
        </div>
    );
};

export default HomePage;