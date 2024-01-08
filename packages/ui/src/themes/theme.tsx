"use client"
import './theme.css'
import React,{ ReactNode, useState }from 'react';
import { CiDark, CiLight } from "react-icons/ci";

interface LayoutProps {
    children: ReactNode
  }
export const Theme: React.FC<LayoutProps> = ({ children }) => {
    const [theme,setTheme] = useState('Light')

    const handleThemesDark = () =>{
        setTheme("Dark")
    }

    const handleThemesLight = () =>{
        setTheme("Light")
    }
    return (
        <div className={` color-transition ${theme == "Light" ?  ('bg-white') :('bg-black')}`}>
           <div className='flex gap-5 justify-end p-10'>
           <button onClick={() =>handleThemesDark()} className=' bg-white border-black px-4 py-2 rounded-md border-2'><CiDark size={40} /></button>
           <button onClick={() =>handleThemesLight()} className=' bg-white border-black px-4 py-2 rounded-md border-2'><CiLight size={40}/></button>
           </div>
           <div className={` color-transition ${theme == "Light" ?  ('!text-black') :('!text-white')}`}>
           {children}
           </div> 
        </div>
    );
};
