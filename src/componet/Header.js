import React from 'react'

function Header() {
  return (
    <div className='w-[100%] h-[550px] md:h-[550px] lg:-h-[550px] xl:-h-[550px] 2xl:h-[630px]  bg-sky-950'>
    
    <div className=" overflow-hidden bg-sky-900'">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className=" mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Summer styles are finally here
            </h1>
            <p className="mt-4 text-xl text-white">
              This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
              if you live or die.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              

              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-slate-200 px-8 py-3 text-center font-semibold text-sky-900' hover:bg-white"
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>



    </div>
  )
}

export default Header
