import { IconSalad } from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
   const router = useRouter();

   const handleCreateFood = () => {
      router.push('/create');
   };

   return (
      <div className='fixed w-full top-0 bg-slate-900 text-white px-48 py-5 z-10'>
         <div className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
               <IconSalad />
               <h1 className='text-3xl font-mono font-bold'>Food App</h1>
            </div>
            <div className='gap-4 flex items-center'>
               <button
                  className='bg-indigo-800 hover:bg-indigo-900 px-3 py-2 rounded'
                  onClick={handleCreateFood}
               >
                  Create Food
               </button>
               <Link
                  href={'/toit'}
                  className='text-xl font-mono font-bold text-white'
               >
                  Toit
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
