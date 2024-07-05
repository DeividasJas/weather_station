import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { getLonLat } from '../services/get.mjs';
function SearchBar() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { setLocations, setShowLocations } = useContext(AppContext);
  const submit = async (searchData) => {
    if (searchData.location) {
      const data = await getLonLat(searchData.location);
      setLocations(data);
      setShowLocations(true);
    }
  };
  return (
    <>
      <form noValidate onSubmit={handleSubmit(submit)}>
        <div className='flex justify-center gap-1 '>
          <input
            type='text'
            autoComplete='off'
            className='rounded-md pl-2 bg-slate-900 border border-blue-400 text-slate-400 placeholder-slate-400'
            placeholder='Search location'
            {...register('location'
            // , { required: 'Please enter the location' }
            )}
          />
          <button className=' bg-slate-900 border border-blue-400 p-2 rounded-md text-slate-400'>
            Search
          </button>
        </div>
          {/* {errors.location && <p className='text-center mt-2 text-red-300 text-lg'>{errors.location.message}</p>} */}
      </form>
    </>
  );
}

export default SearchBar;
