import React from 'react';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

export const NavBar = () => {
    return (
        <header className="flex bg-[#9B8C68] gap-3">
            <div className="flex-none">
                <a href="/">BayBoyz</a>
            </div>
            <nav></nav>
            <nav className="flex-1">
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <SignedOut>
                    <SignInButton />
                </SignedOut>
            </nav>
        </header>
    )
};