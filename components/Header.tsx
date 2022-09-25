import React from 'react'
import Typewriter from 'typewriter-effect';
import NavButton from './NavButton'
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { useAddress, useDisconnect } from "@thirdweb-dev/react";

import GameBody from './GameBody';

function Header() {
    const address = useAddress();
    const disconnect = useDisconnect();

    return (
        <header className=''>

            {/* Header */}
            <div className="grid grid-cols-2 md:grid-cols-5 justify-between items-center p-5">
                {/* LEFT */}
                <div className='flex items-center space-x-2'>
                    <img
                        className='h-20 w-10'
                        src="./craft.png"
                        alt="craft logo"
                    />
                    <div>
                        <h1 className='text-md text-white font-bold'>craft.xyz</h1>
                        <p className='text-xs text-green-600 truncate'>User: {address?.substring(0, 5)}...{address?.substring(address.length, address.length - 5)}</p>
                        <p className='text-xs text-yellow-600 truncate'>
                            <Typewriter
                                options={{
                                    strings: ['gm buidlers! ', 'ship🚢 ', 'interoperability ', 'web3 ', '3D render', 'innovate', 'ownership '],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </p>
                    </div>
                </div>

                {/* CENTER */}
                <div className='hidden md:flex md:col-span-3 items-center justify-center rounded-md '>
                    <div className='bg-[#000000] p-4 space-x-2  '>
                        <NavButton isActive title='Build' />
                        <NavButton onClick={disconnect} title='Logout' />
                    </div>
                </div>

                {/* RIGHT */}
                <div className='flex flex-col ml-auto text-right '>
                    <Bars3BottomRightIcon className='h-8 w-8 mx-auto text-white cursor-pointer ' />
                    <span className='md:hidden text-xs px-4 py-2 mt-1 rounded-xl shadow-lg bg-[#008037]'>
                        <NavButton onClick={disconnect} title='Logout' />
                    </span>
                </div>
                {/* bg-white px-8 py-4 mt-10 rounded-xl shadow-lg font-bol */}
            </div>


            <GameBody />

        </header>
    )
}

export default Header