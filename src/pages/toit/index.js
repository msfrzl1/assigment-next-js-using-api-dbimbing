import Cart from '@/components/Cart';
import axios from 'axios';

export async function getServerSideProps() {
   const resp = await axios.get('https://api-bootcamp.do.dibimbing.id/api/v1/foods', {
      headers: { apikey: 'w05KkI9AWhKxzvPFtXotUva-' },
   });
   return { props: { foods: resp.data.data || [] } };
}

export default function Toit({ foods }) {
   return (
      <div>
         <div className='grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-4 pt-24 pb-5 px-5 bg-slate-200'>
            {foods.map((food) => (
               <Cart
                  key={food.id}
                  food={food}
               />
            ))}
         </div>
      </div>
   );
}
