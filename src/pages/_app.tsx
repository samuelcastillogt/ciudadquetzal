import { apiService } from "@/services/api.service";
import { useStore } from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const {setBusines, setCategories, setPosts, posts, busines, categories} = useStore((state:any )=> state)
  const getData = async()=>{
    console.log("Llamado al API")
    const data = await apiService.getCategories()
    const dataBusiness = await apiService.getAllBusines()
    const posts = await apiService.getPosts()
    setPosts(posts)
    setBusines(dataBusiness)
    setCategories(data)
}
console.log(posts, busines, categories)
useEffect(() => {
  if(posts.length == 0 || busines.length== 0 || categories.length== 0){
    getData()
  }
    
},[])
  return <Component {...pageProps} />;
}
