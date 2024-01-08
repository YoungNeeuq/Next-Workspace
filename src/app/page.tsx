'use client'
import {useFetch} from '@my-app/hook'
import {Theme,Button,Datepicker,Modal,Select,Input,Table, TableCell,TableRow} from '@my-app/ui'
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
const [showModal, setShowModal] = useState(false)
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

const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

const handleDateChange = (date: Date | null) => {
  setSelectedDate(date);
};

return (
  <div className='bg-white h-[100vh] flex flex-col justify-center'>
  {/* <Button
  className=' bg-slate-500 text-white px-10 py-6 text-3xl rounded-md w-fit mx-auto'
  onClick={connectWallet}
  >

    {walletAddress && walletAddress.length > 0
      ? `Connected: ${walletAddress.substring(
          0,
          6
        )}...${walletAddress.substring(38)}`
      : "Connect Wallet"}
  </Button> */}

  <Button className='w-fit mx-auto mt-20' variant="dark" shape='circle'>
        HOME
  </Button>
  <Datepicker selectedDate={selectedDate}
              onChange={handleDateChange}
              className="mx-auto w-fit" >

   </Datepicker>

   <Table className="mt-3 rounded-[6px]">
              <TableRow className="h-8">
              <TableCell isHeader headerColor="warning">Header 1</TableCell>
                <TableCell isHeader headerColor="warning">Header 2</TableCell>
                <TableCell isHeader headerColor="warning">Header 3</TableCell>
              </TableRow>
              <TableRow className="h-14">
                <TableCell className="text-center">Data 1</TableCell>
                <TableCell className="text-center">Data 2</TableCell>
                <TableCell className="text-center">Data 3</TableCell>
              </TableRow>
              <TableRow className="h-14">
                <TableCell className="text-center">Data 4</TableCell>
                <TableCell className="text-center">Data 5</TableCell>
                <TableCell className="text-center">Data 6</TableCell>
              </TableRow>
            </Table>

            <Select
           color="gray"
           fontSize="20px"
           backgroundColor="#e0e0e0"
           width='20%'
              className="mt-10 mx-auto"
              options={[
                {
                  label: ('1'),
                  value: '1',
                },
                {
                  label: ('2'),
                  value: '2',
                },
                {
                  label: ('3'),
                  value: '3',
                },
                {
                  label: ('4'),
                  value: '4',
                },
                {
                  label: ('5'),
                  value: '5',
                },
                {
                  label: ('6'),
                  value: '6',
                },
                {
                  label: ('7'),
                  value: '7',
                },
                {
                  label: ('8'),
                  value: '8',
                },
              ]}
            />
             <Input
                width={250}
                height={50}
                placeholder="Please enter text"
                className="mt-10 mx-auto w-fit"
                // variant=""
              />
            <Button
              onClick={() => setShowModal(true)}
              className='mt-10 mx-auto'
              width={200}
            >
              Modal
            </Button>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-5">
            Modal Title
          </h3>
          <p className="mb-5 font-normal text-gray-500">
           content1
          </p>
          <p className="mb-5 font-normal text-gray-500">
           content2
          </p>
        </div>
      </Modal>
  </div>
);
}
