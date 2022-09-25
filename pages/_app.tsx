import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import { Physics } from '@react-three/cannon';
import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Ground } from '../components/Ground'
import { Player } from '../components/Player'
import { FPV } from '../components/FPV'
import { Cubes } from '../components/Cubes'
import { TextureSelector } from '../components/TextureSelector';
import { Menu } from '../components/Menu';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  )
}

export default MyApp
