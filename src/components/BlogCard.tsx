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
    <div className="blogCard w-80 m-3 flex flex-col shadow-lg border border-gray-100 hover:shadow-xl transition rounded-xl overflow-hidden bg-white">
      <img
        src={data.img}
        alt={data.data?.title || 'Imagen del blog'}
        className="h-48 w-full object-cover transition-all duration-500 view-transition-image"
      />
      <div className="p-5 flex flex-col flex-1 justify-between">
        <h3 className="font-bold text-lg text-primary mb-2 line-clamp-2 min-h-[3rem] transition-all duration-500 view-transition-text">{data.data.title}</h3>
        <Link href={"/blog/" + data.data.id} legacyBehavior>
          <button className="blogCard-btn w-full mt-2" onClick={handleClick}>Leer más</button>
        </Link>
      </div>
    </div>
  );
}

export default BlogCard