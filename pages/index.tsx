import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import { useAddress, useMetamask, useDisconnect, useContract, useContractData, useContractCall } from "@thirdweb-dev/react";
import Login from '../components/Login';



const Home: NextPage = () => {
  const address = useAddress();

  if (!address) return (<Login />)

  return (
    <div className="bg-[#000000] min-h-screen flex flex-col text-base leading-7">
      <Head>
        <title>Web3 Craft Gaming</title>
        <link rel="icon" href="/craft.ico" />
      </Head>
      <Header />



    </div>
  )
}

export default Home



// Color code green: #008037