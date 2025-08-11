import React from 'react';
import Link from 'next/link';

function page() {
  return (
    <div className='bg-[] flex p-[35px] justify-between'>
      <p className='text-[32px] font-bold'>Homepage</p>
      <Link href="/login"><p className='text-[32px] font-bold'>Login</p></Link>
    </div>
  );
}

export default page;
