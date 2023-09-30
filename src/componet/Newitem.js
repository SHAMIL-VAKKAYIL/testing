import React from 'react'
import Newproducts from './NewitemContent'
function Newitem() {
  
   
    return (
    <div>
    <div className='w-[100%] h-10 bg-gray-100'>
      {/* create mepty space */}
    </div>
    <div className=' text-4xl bg-gray-100 flex justify-center'>
      <h1>Our new items</h1>
    </div>
    <div className="bg-gray-100">
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
     
    
      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
        {Newproducts.map((product) => (
          <div key={product.id} className="group ">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-sm bg-gray-200 lg:aspect-none group-hover:opacity-70  lg:h-80">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
             
              </div>
              <p className="text-sm font-medium text-gray-900">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    <div className='flex bg-gray-100 justify-center'>
        <button className=' mb-7 bg-sky-950 rounded-sm p-4 text-center text-white'><a href="Login">View more</a></button>
        </div>
        <div className=' flex w-[95%] ml-[3%] flex-col items-center justify-center   bg-gray-100 border-t  border-blue-200'>
      {/* create mepty space */}
    </div>
    </div>
    )
 
  
}

export default Newitem
