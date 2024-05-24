"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { RocketIcon } from './icons';

export default function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    };

    return (
        <div className='bg-gray-900 text-white top-0 left-0 fixed right-0 py-6 flex flex-row items-center lg:px-20 px-6 justify-between'>
            <div className="flex items-center gap-2">
                <RocketIcon className="h-6 w-6" />
                <span className="text-xl font-bold">Roberto Laura</span>
            </div>
            <div className="lg:hidden">
                <button onClick={toggleSidebar} className="block text-white hover:text-gray-200 focus:text-gray-200 focus:outline-none" aria-label="Toggle navigation">
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M4 6h16a1 1 0 010 2H4a1 1 0 110-2zm0 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 5h16a1 1 0 010 2H4a1 1 0 010-2z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
            {showSidebar && (
                <div className="fixed inset-0 bg-black/50 z-50" onClick={toggleSidebar}></div>
            )}
            <div className={`lg:hidden fixed inset-y-0 right-0 w-52 bg-gray-900 backdrop-blur-lg z-50 transform transition-transform ease-in-out ${showSidebar ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="h-full flex flex-col ">
                <text className='text-white font-semibold mt-8 mb-8 pl-3 text-xl'>
                    Main Menu
                </text>
                <div className='border border-white'></div>
                    <Link href="#about" className="text-lg text-white px-5 py-3">About</Link>
                    <Link href="#services" className="text-lg text-white px-5 py-3">Services</Link>
                    <Link href="#achievements" className="text-lg text-white px-5 py-3">Achievements</Link>
                    <Link href="#education" className="text-lg text-white px-5 py-3">Education</Link>
                    <Link href="#blogs" className="text-lg text-white px-5 py-3">Blogs</Link>
                    <Link href="#contact" className="text-lg text-white px-5 py-3">Contact</Link>
                </div>
            </div>
            <nav className="hidden lg:flex gap-6">
                <Link className="hover:underline" href="#about">
                    About
                </Link>
                <Link className="hover:underline" href="#services">
                    Services
                </Link>
                <Link className="hover:underline" href="#achievements">
                    Achievements
                </Link>
                <Link className="hover:underline" href="#education">
                    Education
                </Link>
                <Link className="hover:underline" href="#blogs">
                    Blogs
                </Link>
                <Link className="hover:underline" href="#contact">
                    Contact
                </Link>
            </nav>
        </div>
    );
}
