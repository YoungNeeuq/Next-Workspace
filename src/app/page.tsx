'use client'
import {useFetch} from '@my-app/hook'
import {Theme,Footer, Header,Button} from '@my-app/ui'
import { Component, useState } from 'react';
export default function Home() {
  const data = useFetch("https://65336a41d80bd20280f67871.mockapi.io/text");
  return (
 <Theme>
<Button>123</Button>
  <Header/>
  
 <Footer/>
 </Theme>
  )
}
