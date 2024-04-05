import React from 'react';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { ShoppingBagIcon } from '@heroicons/react/16/solid';

const menuLinks = [
    {
        id: 1,
        title: 'Hats',
        url: '/hats',
    },
    {
        id: 2,
        title: 'Shirts',
        url: '/shirts',
    },   
    {
        id: 3,
        title: 'Charms',
        url: '/charms',
    },
    {
        id: 4,
        title: 'About Us',
        url: '/about-us',
    },
];

export const NavBar = () => {
    return (
        <header className="flex bg-[#9B8C68] gap-3">
            <div className="flex-none">
                <a href="/">BayBoyz</a>
            </div>
            <nav>
                <div className="flex gap-1">
                    {menuLinks.map((menu) => (
                        <a key={menu.id} href={`/${menu.url}`}>
                            <h3 className="text-black">{menu.title}</h3>
                        </a>
                    ))}
                </div>
            </nav>
            <nav className="flex-1 flex gap-2">
                <div>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                </div>
                <div>
                    <a href="/cart">
                        <ShoppingBagIcon />
                    </a>
                </div>
            </nav>
        </header>
    )
};