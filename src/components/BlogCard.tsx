import Link from 'next/link'
import React from 'react'

function BlogCard(props: any) {
  const { data } = props;
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (typeof window !== 'undefined' && document.startViewTransition) {
      e.preventDefault();
      document.startViewTransition(() => {
        window.location.href = '/blog/' + data.data.id;
      });
    }
    // Si no soporta ViewTransition, sigue el flujo normal
  };
  return (
    <div className="blogCard m-3 flex w-80 flex-col overflow-hidden border border-[#e0e0e0] bg-white">
      <img
        src={data.img}
        alt={data.data?.title || 'Imagen del blog'}
        className="h-48 w-full object-cover transition-all duration-500 view-transition-image"
      />
      <div className="flex flex-1 flex-col justify-between p-5">
        <h3 className="view-transition-text mb-2 min-h-[3rem] line-clamp-2 text-2xl text-black transition-all duration-500">{data.data.title}</h3>
        <Link href={"/blog/" + data.data.id} legacyBehavior>
          <button className="blogCard-btn w-full mt-2" onClick={handleClick}>Leer más</button>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard
