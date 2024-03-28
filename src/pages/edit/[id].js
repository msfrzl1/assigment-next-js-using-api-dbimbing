import FormFood from '@/components/FormFood';
import axios from 'axios';

export async function getServerSideProps(context) {
   const resp = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.params.id}`, {
      headers: {
         apikey: 'w05KkI9AWhKxzvPFtXotUva-',
      },
   });
   return { props: { food: resp.data.data } };
}

export default function Edit({ food }) {
   const handleEditFood = async (data) => {
      try {
         await axios.post(`https://api-bootcamp.do.dibimbing.id/api/v1/update-food/${food.id}`, data, {
            headers: {
               apikey: 'w05KkI9AWhKxzvPFtXotUva-',
               'Content-Type': 'application/json',
               Authorization:
                  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q',
            },
         });
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div className='bg-slate-200'>
         <div className='flex flex-col justify-center max-w-md mx-auto min-h-screen'>
            <div className='border p-4 shadow-md rounded-md bg-white'>
               <h1 className='text-3xl font-mono font-bold text-center mb-5'>Edit Food</h1>
               <FormFood
                  food={food}
                  onSubmitForm={handleEditFood}
                  action='edit'
                  title='Edit Form'
               />
            </div>
         </div>
      </div>
   );
}
