import Link from 'next/link'
import React, { useEffect, useState } from 'react'
export interface ISliderCard{
    title: string
    img: string
    url: string
}
export interface ISlider{
    posts: ISliderCard[]
}
function Slider(props:ISlider) {
    const [timer, setTimmer] = useState<number>(0)
    const [post, setPost] = useState<ISliderCard>(props.posts[0])
    const {posts} = props
    useEffect(() => {
        setTimeout(()=>{
            if(timer == props.posts.length-1){
                setTimmer(0)
                setPost(props.posts[0])
            }else{
                setTimmer(timer + 1)
                setPost(props.posts[timer +1])
            }
        }, 5000)
    }, [timer])
  return (
    <Link href={post.url}>
        <div className='slider flex justify-center items-center'>
        <div className="slider-card" style={{backgroundImage: `url(${post.img})`, backgroundSize: "cover", backgroundPosition: "center"}}>
        <p className='bg-[rgba(256,256,256,0.5)] p-5 font-bold'>{posts[timer].title}</p>
        </div>
 
    </div>
    </Link>

  )
}

export default Slider