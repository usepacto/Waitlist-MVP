'use client';

import React from 'react';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="w-full px-[25px] py-[18px] bg-gradient-to-b from-white to-transparent">
            <div className="inline-flex justify-between items-center w-full">
                <div className="w-[150px] relative overflow-hidden">
                    <Image
                        src="/PactoLogo.svg"
                        alt="Pacto Logo"
                        width={150}
                        height={150}
                        style={{ height: 'auto' }}
                        priority
                    />
                </div>
            </div>
        </nav>
    );
}
