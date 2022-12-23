import React from 'react';
import { Vortex } from 'react-loader-spinner';

function Spinner({ message }) {
  return (

    <div className='flex flex-col justify-center items-center w-full h-full'>
      <Vortex/>

      <p className='text-lg text-center px-2'>{message}</p>
    </div>
  );
}

export default Spinner;