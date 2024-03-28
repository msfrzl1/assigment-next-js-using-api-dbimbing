/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
   const resp = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.params.id}`, {
      headers: {
         apikey: 'w05KkI9AWhKxzvPFtXotUva-',
      },
   });
   return { props: { food: resp.data.data } };
}

export default function DetailToit({ food }) {
   const router = useRouter();
   const handleDelete = async () => {
      try {
         await axios.delete(`https://api-bootcamp.do.dibimbing.id/api/v1/delete-food/${food.id}`, {
            headers: {
               apikey: 'w05KkI9AWhKxzvPFtXotUva-',
               Authorization:
                  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q',
            },
         });
         router.push('/toit');
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div className='flex flex-col justify-center items-center min-h-screen bg-slate-200'>
         <div className='max-w-3xl bg-white shadow-md rounded-md overflow-hidden'>
            <img
               src={food.imageUrl}
               alt={food.name}
               className='w-96 h-64 object-cover rounded-t-md'
            />
            <div className='p-4'>
               <h1 className='text-xl font-bold mt-5'>{food.name}</h1>
               <p>
                  <span className='font-bold'>Description: </span>
                  {food.description}
               </p>

               <p>
                  <span className='font-bold'>Ingredients: </span>
                  {food.ingredients}
               </p>
               <p>
                  <span className='font-bold'>Rating: </span>
                  {food.rating}
               </p>
               <div className='flex justify-around mt-5 gap-3'>
                  <Link
                     href={`/toit`}
                     className='bg-gray-500 w-full py-2 rounded text-white font-bold hover:bg-gray-600 items-center justify-center flex'
                  >
                     <button>Back</button>
                  </Link>
                  <Link
                     href={`/edit/${food.id}`}
                     className='bg-blue-500 w-full py-2 rounded text-white font-bold hover:bg-blue-600 items-center justify-center flex'
                  >
                     <button>Edit</button>
                  </Link>
                  <button
                     onClick={handleDelete}
                     className='bg-red-500 w-full py-2 rounded text-white font-bold hover:bg-red-600'
                  >
                     Delete
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}
