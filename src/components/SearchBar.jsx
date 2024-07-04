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

  const { setLocations, latLon, setLatLon } = useContext(AppContext);
  const submit = async (searchData) => {
    if (searchData.location) {
      const data = await getLonLat(searchData.location);
      console.log(data);
      setLocations(data)
    }
  };
  return (
    <>
      <form noValidate onSubmit={handleSubmit(submit)}>
        <div
          className='flex justify-center gap-1 '
        >
          <input
            type='text'
            name=''
            id=''
            className='rounded-md pl-2 bg-slate-900 border border-blue-400 placeholder-slate-400'
            placeholder='Search location'


            {...register('location')}
          />
          <button className=' bg-slate-900 border border-blue-400 p-2 rounded-md text-slate-400'>Search</button>
        </div>
      </form>
    </>
  );
}

export default SearchBar;
