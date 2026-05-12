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
function Slider(props: ISlider) {
  const [timer, setTimmer] = useState<number>(0);
  const [post, setPost] = useState<ISliderCard>(props.posts[0]);
  const [animate, setAnimate] = useState(false);
  const { posts } = props;

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => {
      setAnimate(false);
      setTimeout(() => {
        if (timer === props.posts.length - 1) {
          setTimmer(0);
          setPost(props.posts[0]);
        } else {
          setTimmer(timer + 1);
          setPost(props.posts[timer + 1]);
        }
      }, 300); // tiempo de la animación
    }, 4700);
    return () => clearTimeout(timeout);
  }, [timer]);

  return (
    <Link href={post.url}>
      <div className="slider flex items-center justify-center py-6">
        <div
          className={`slider-card relative h-56 w-full max-w-2xl overflow-hidden border border-[#e0e0e0] transition-transform duration-300 ease-in-out md:h-72 ${animate ? 'animate-slide-left' : ''}`}
          style={{
            backgroundImage: `url(${post.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
          <div className="relative z-20 flex items-end h-full w-full">
            <p className="w-full p-6 text-left text-2xl text-white md:text-3xl">
              {posts[timer].title}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Slider
