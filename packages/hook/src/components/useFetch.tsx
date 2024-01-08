"use client"
import { useState, useEffect } from "react";
 export const useFetch = (url: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return data;
};
