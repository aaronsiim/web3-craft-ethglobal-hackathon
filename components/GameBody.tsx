import React from 'react'
import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';


function App() {
    return (
        <>
            <Canvas className='bg-[#ffffff] min-h-screen flex flex-col items-center justify-center text-center'>
                <Sky sunPosition={[100, 100, 20]} />
                <ambientLight intensity={0.5} />
                {/* <FPV /> */}
                <Physics>
                    {/* <Player />
                    <Cubes />
                    <Ground /> */}
                </Physics>
            </Canvas>

            {/* <TextureSelector /> */}
            {/* <Menu /> */}
        </>
    );
}

export default App;