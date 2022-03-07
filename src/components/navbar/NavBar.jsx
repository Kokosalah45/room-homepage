import React from 'react'

const NavBar = () => {
  return (
    <nav className=" justify-center sm:justify-start p-12 flex text-white ">
        <h2 className="sm:mr-16 text-3xl font-semibold sm:mb-6/10">
          <a href="#">room</a> 
        </h2>
        <ul className='hidden sm:flex gap-8 text-xs items-center'>
          <li className='p-1 relative 
           flex
           flex-col
           gap-1
           items-center
           before:h-0.5 
           before:bg-white 
           before:rounded-md
           before:w-0 
           hover:before:w-full
           before:order-1
           before:transition-all
           before:delay-75'>
            <a href="#">home</a>
          </li>
          <li className='p-1 relative 
           flex
           flex-col
           gap-1
           items-center
           before:h-0.5 
           before:bg-white 
           before:rounded-md
           before:w-0 
           hover:before:w-full
           before:order-1
           before:transition-all
           before:delay-75'>
            <a href="#">shop</a>
          </li>
          <li className='p-1 relative 
           flex
           flex-col
           gap-1
           items-center
           before:h-0.5 
           before:bg-white 
           before:rounded-md
           before:w-0 
           hover:before:w-full
           before:order-1
           before:transition-all
           before:delay-75'>
            <a href="#">about</a>
          </li>
          <li className='p-1 relative 
           flex
           flex-col
           gap-1
           items-center
           before:h-0.5 
           before:bg-white 
           before:rounded-md
           before:w-0 
           hover:before:w-full
           before:order-1
           before:transition-all
           before:delay-75'>
            <a href="#">contact</a>
          </li>
        </ul>
    </nav>
  )
}

export default NavBar