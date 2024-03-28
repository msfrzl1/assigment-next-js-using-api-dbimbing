import { useRouter } from 'next/router';
import Input from './input/Input';
import Label from './input/Label';

const FormFood = ({ onSubmitForm, food, action, title }) => {
   const router = useRouter();

   const handleFormSubmit = async (e) => {
      e.preventDefault();
      const data = {
         name: e.target.name.value,
         description: e.target.description.value,
         ingredients: e.target.ingredients.value.split(','),
         imageUrl: e.target.imageUrl.value,
      };
      await onSubmitForm(data);
      if (action === 'create') {
         router.push('/toit');
      } else {
         router.push(`/toit/${food.id}`);
      }
   };

   return (
      <form onSubmit={handleFormSubmit}>
         <Label
            htmlFor='name'
            value='Name'
         />
         <Input
            name='name'
            placeholder='Food Name'
            defaultValue={food?.name}
         />
         <Label
            htmlFor='description'
            value='Description'
         />
         <Input
            name='description'
            placeholder='Food Description'
            defaultValue={food?.description}
         />
         <Label
            htmlFor='ingredients'
            value='Ingredients'
         />
         <Input
            name='ingredients'
            placeholder='Food Ingredients'
            defaultValue={food?.ingredients}
         />
         <Label
            htmlFor='imageUrl'
            value='Image Url'
         />
         <Input
            name='imageUrl'
            placeholder='Food Image Url'
            defaultValue={food?.imageUrl}
         />
         <button className='bg-indigo-800 hover:bg-indigo-900 px-3 py-2 rounded text-white font-bold mt-5'>
            {title} {food?.name}
         </button>
      </form>
   );
};

export default FormFood;
