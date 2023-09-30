
import React from 'react'
import { Typography } from "@material-tailwind/react";
import insta from '../Asset/instagram.svg'
import fb from '../Asset/facebook.svg'
import pint from '../Asset/pinterest.svg'
import Twitt from '../Asset/x-twitter.svg'


<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
  integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>
function Footer() {

   const currentYear = new Date().getFullYear();
return(
  <div>

     <footer className="relative w-full bg-sky-950">
       <div className="mx-auto w-full max-w-7xl px-8 p-5">
         <div className="grid grid-cols-1 p-4 justify-between gap-4 ">
           <Typography variant="h5" className="mb-6 text-white">
             ShipQua
           </Typography>
           <div className="grid md:grid-cols-3 sm:grid-cols-3  text-white   gap4">
          
            <ul className='mb-3 text-md  '>
              <li className='mb-3 text-md  justify-center flex'><a href="#">Who We Are</a></li>
              <li className='mb-3 text-md  justify-center flex'><a href="#">FAQ</a></li>
              <li className='mb-3 text-md  justify-center flex'><a href="#">Terms & Condition</a></li>
             </ul>
             <ul>
             <li className='mb-3 text-md  justify-center flex'><a href="#">Contact Us</a></li>
              <li className='mb-3 text-md  justify-center flex'><a href="#">Track Your Order</a></li>
             </ul>
             <ul>
             <li className='mb-3 text-xl opacity-60 justify-center flex'>CUSTOMER CARE</li>
              <li className='mb-3 text-md  justify-center flex'>call : <a href="#"> +91 9877665432</a></li>
              <li className='mb-3 text-md  justify-center flex'>Email : <a href="#"> ShipQua28@gmail.com</a></li>
             </ul>
           </div>
         </div>
         <div className="mt-10 flex w-full text-gray-300 flex-col items-center gap-4  justify-center border-t border-blue-100 py-4 md:flex-row md:justify-between">
           <Typography
             variant="small"
             className="mb-4 text-center  font-normal text-blue-gray-900 md:mb-0"
           >
             &copy; {currentYear} <a href="https://material-tailwind.com/">ShipQua</a>. All
             Rights Reserved.
           </Typography> 
              
           
         </div>
         <div className='flex justify-center gap-4 '>
        
          <a href=""><img src={fb} alt="" /></a>
         <a href=""><img src={insta} alt="" /></a>
        <a href=""><img src={Twitt} alt="" /></a>
          <a href=""><img src={pint} alt="" /></a>
          
         </div>
       </div>
     </footer>
   

  </div>
  )
}

export default Footer
