import React from 'react';
import { Bars3Icon, BeakerIcon } from '@heroicons/react/24/outline'

const Header = () => {
    return (
        <header className='flex items-center justify-between py-4 px-6 bg-discord_blue'>
            <a href="">
                <img src="https://www.pngitem.com/pimgs/m/789-7893913_download-discord-logo-in-svg-vector-or-png.png" className="w-32 h-12 rounded-full object-contain" alt="" />
            </a>
            <div className='hidden lg:flex space-x-4'>
                <a alt="" className='link' href="">Download</a>
                <a alt="" className='link' href="">Why Discord</a>
                <a alt="" className='link' href="">Nitro</a>
                <a alt="" className='link' href="">Safety</a>
                <a alt="" className='link' href="">Support</a>
            </div>
            <div className='flex space-x-4 items-center'>
                <button className='bg-white p-2 rounded-full text-xs md:text-sm px-4 hover:shadow-2xl hover:text-discord_blurple transition duration-200 focus:outline-none ease-in-out text-blue-400 whitespace-nowrap font-medium'>login</button>
                <Bars3Icon className='w-9 h-9 lg:hidden text-white'/>
            </div>
        </header>
    );
};

export default Header;