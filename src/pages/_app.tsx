import { apiService } from "@/services/api.service";
import { useStore } from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const {setBusines, setCategories} = useStore((state:any )=> state)
  const getData = async()=>{
    const data = await apiService.getCategories()
    const dataBusiness = await apiService.getAllBusines()
    setBusines(dataBusiness)
    setCategories(data)
}
useEffect(() => {
    getData()
},[])
  return <Component {...pageProps} />;
}
