'use client'
import {useFetch} from '@my-app/hook'
import {Theme,Button} from '@my-app/ui'
import { Component, useState,useEffect } from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons';
declare global {
  interface Window {
      ethereum?: any;
  }
}
export default function Home() {
  // const data = useFetch("https://65336a41d80bd20280f67871.mockapi.io/text");
const [walletAddress, setWalletAddress] = useState("");

useEffect(() => {
  getCurrentWalletConnected();
  addWalletListener();
}, [walletAddress]);

const connectWallet = async () => {
  if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setWalletAddress(accounts[0]);
    } catch (err: any) {
      console.error(err.message);
    }
  } else {
    console.log("Please install MetaMask");
  }
};

const getCurrentWalletConnected = async () => {
  if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
      } else {
        console.log("Connect to MetaMask using the Connect button");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  } else {
    console.log("Please install MetaMask");
  }
};

const addWalletListener = async () => {
  if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
    window.ethereum.on("accountsChanged", (accounts: any[]) => {
      setWalletAddress(accounts[0]);
    });
  } else {
    setWalletAddress("");
    console.log("Please install MetaMask");
  }
};

return (
  <div className='bg-white h-[100vh] flex flex-col justify-center'>
  <Button
  className=' bg-slate-500 text-white px-10 py-6 text-3xl rounded-md w-fit mx-auto'
  onClick={connectWallet}
>

    {walletAddress && walletAddress.length > 0
      ? `Connected: ${walletAddress.substring(
          0,
          6
        )}...${walletAddress.substring(38)}`
      : "Connect Wallet"}
</Button>

<Button className='w-fit mx-auto mt-20' variant="dark" icon={faHome} iconSize="text-xl" iconPosition='after'>
        Home
</Button>
  </div>
);
}
