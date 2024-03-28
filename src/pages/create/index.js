import FormFood from '@/components/FormFood';
import axios from 'axios';

export default function Create() {
   const handleCreateFood = async (data) => {
      try {
         await axios.post('https://api-bootcamp.do.dibimbing.id/api/v1/create-food', data, {
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
               <h1 className='text-3xl font-mono font-bold text-center mb-5'>Create Form</h1>
               <FormFood
                  onSubmitForm={handleCreateFood}
                  action='create'
                  title='Create Form'
               />
            </div>
         </div>
      </div>
   );
}
