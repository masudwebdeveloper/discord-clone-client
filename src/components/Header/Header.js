import React from 'react';
import { Bars3Icon, BeakerIcon } from '@heroicons/react/24/outline'

const Header = () => {
    return (
        <header className='flex items-center justify-between py-4 px-6 bg-discord_blue'>
            <a href="">
                <img src="https://i.ibb.co/XSCZX50/discord-logo.png" className="w-40 h-14 rounded-full object-contain" alt="" />
            </a>
            <div className='hidden lg:flex space-x-6 text-white'>
                <a href=""></a>
                <a className='link' href="#">Download</a>
                <a className='link' href="#">Why Discord</a>
                <a className='link' href="#">Nitro</a>
                <a className='link' href="#">Safety</a>
                <a className='link' href="#">Support</a>
            </div>
            <div className='flex space-x-4 items-center'>
                <button className='bg-white p-2 rounded-full text-xs md:text-sm px-4 hover:shadow-2xl hover:text-discord_blurple transition duration-200 focus:outline-none ease-in-out text-blue-400 whitespace-nowrap font-medium'>login</button>
                <Bars3Icon className='w-9 h-9 lg:hidden text-white'/>
            </div>
        </header>
    );
};

export default Header;