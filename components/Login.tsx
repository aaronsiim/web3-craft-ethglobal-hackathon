import { useMetamask } from '@thirdweb-dev/react'
import React from 'react'
import Head from 'next/head'
import Typewriter from 'typewriter-effect';

function Login() {
    const connectWithMetamask = useMetamask();

    return (

        <div className='bg-[#000000] min-h-screen flex flex-col items-center justify-center text-center'>
            <Head>
                <title>Web3 CRAFT Gaming</title>
                <link rel="icon" href="/craft.ico" />
            </Head>


            <div className='flex flex-col items-center mb-10'>
                <img
                    className='rounded-full h-56 w-56 mb-10'
                    src="./craft.png"
                    alt="craft logo"
                />
                <h1 className='text-4xl text-white font-bold'>Craft Gaming</h1>
                <h2 className='text-white'>Decentralized Web3 Gaming & Adventure </h2>

                <div className='text-xs text-green-600 mt-2'>

                    <Typewriter
                        options={{
                            strings: ['Start Crafting ', 'Build 3D environment '],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>


                <button
                    onClick={connectWithMetamask}
                    className='text-white bg-gradient-to-br from-green-600 to-black-400 px-8 py-4 mt-10 rounded-xl shadow-lg font-bold hover:bg-[#008037] hover:text-[#ffffff] '>
                    <Typewriter
                        options={{
                            strings: ['Start BUIDLing '],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </button>
            </div>
        </div>
    )
}

export default Login