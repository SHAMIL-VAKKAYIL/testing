import React from 'react'
import Categoryitems from './Categoryitems'
function Categories() {


  return (
    <div className='bg-gray-100 '>
      <div className='w-[100%] bg-gray-100 h-10'>
        {/* create empty space */}
        </div>
      <h1 className='text-center text-4xl  bg-gray-100'>Shop By Category</h1> 
        <div className="bg-gray-100">
          <div className="mx-auto max-w-2xl  px-4 py-10 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8 2xl:py-10 ">
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
              {Categoryitems.map((Categoryitems) => (
                <a key={Categoryitems.id} href={Categoryitems.href} className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-sm  bg-gray-100 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={Categoryitems.imageSrc}
                      alt={Categoryitems.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                    <h3 className="mt-4 text-sm justify-center flex  text-gray-700">{Categoryitems.name}</h3>
                  </div>
                  {/* <h3 className="mt-4 text-sm text-gray-700">{Categoryitems.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{Categoryitems.price}</p> */}
                </a>
              ))}
            </div>
          </div>
        </div>
       
       
    </div>
  )
}

export default Categories
