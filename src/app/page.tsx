'use client'
import {useFetch} from '@my-app/hook'
import {Theme,Footer, Header} from '@my-app/ui'
import { Component, useState } from 'react';
export default function Home() {
  const [data] = useFetch("https://65336a41d80bd20280f67871.mockapi.io/text");
  return (
 <Theme>

  <Header/>
  {data &&
  // @ts-ignore
    data.map((item) => {
      return <p key={item.id}>{item.name}</p>;
    })}
 <Footer/>
 </Theme>
  )
}
