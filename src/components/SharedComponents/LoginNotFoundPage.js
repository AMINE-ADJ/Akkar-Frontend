import React from 'react'

export default function LoginNotFoundPage() {
  return (
    <div className='bg-akkar-orange-second flex flex-col items-center gap-10 justify-center h-screen w-full font-akkar-bold text-akkar-black'>
        <h1 className='text-6xl'>NOT AUTHORIZED!</h1>
        <h3 className='text-5xl'>You are not logged in, Please Go back and login to continue!</h3>
    </div>
  )
}
