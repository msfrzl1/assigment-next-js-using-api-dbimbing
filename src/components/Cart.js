import Link from 'next/link';

/* eslint-disable @next/next/no-img-element */
export default function Cart({ food }) {
   return (
      <>
         <Link
            href={`/toit/${food.id}`}
            className='border p-4 shadow-md rounded gap-3 flex flex-col hover:scale-105 duration-75 cursor-pointer bg-white'
         >
            <img
               src={food.imageUrl}
               alt=''
               className='w-full aspect-[4/3] object-cover rounded'
            />
            <h1 className='text-xl font-bold'>{food.name}</h1>
         </Link>
      </>
   );
}
