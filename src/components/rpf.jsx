import React from 'react'
import { Link } from 'react-router-dom'

function rpf() {
  return (
<div>
    <div className="bg-black text-white text-3xl text-center h-16 flex items-center justify-center">
      Business Profile
    </div>

    <div className="bg-[#03E096] h-fit w-full relative pb-10">

    <div className='flex py-6 items-center'>
      <img className='h-16 max-sm:h-12 ml-5 rounded-full' src="images/rpfp.png" alt="" />
      <h1 className='text-3xl ml-10 max-sm:text-2xl'>Spice Rentals</h1>
      <Link
                className='text-4xl max-sm:text-3xl ml-auto mr-5 cursor-pointer'
                 to="/inbox"
                 state={{ name: 'Spice Rentals', imageUrl: 'images/rpfp.png', description: 'We are a professional auto rental business, We also offer a variety of vehicles' }}
               ><i className="fa fa-commenting "></i></Link>
    </div>

    <div className='bg-white p-5 rounded-lg flex my-5 m-auto w-[600px] max-sm:w-[360px]'>
    <p>We are a professional auto rental business. We also offer a variety of vehicles.</p>
    </div>

  <div className='flex justify-between'>
    <div className='p-3 text-white text-center m-auto bg-black w-[150px] rounded-xl'>
      <Link to='/contact'><h1 className='font-medium text-lg m-0'>Contact info</h1></Link>
    </div>
    <div className='p-3 text-white text-center m-auto bg-black w-[150px] rounded-xl'>
      <Link to='/requirements'><h1 className='cursor-pointer font-medium text-lg m-0'>Requirements</h1></Link>
    </div>
  </div>
    

    <div className='flex my-5'>
    <img className='my-10 mx-5 max-sm:h-[100px]' src="images/rental car.png" alt="" />
    <div className='float-right mt-10 max-sm:text-sm'><p className=''>Model Name: Toyota Camry <br />Capacity: 28 Miles per gallon <br />Color: Silver <br />Mileage: 50000m <br />Class: Sedan</p></div>
    </div>

    <div className='flex my-5'>
    <img className='my-10 max-sm:mt-14 mx-5 h-[150px] w-[266px] max-sm:h-[80px]' src="images/jeep.jpg" alt="" />
    <div className='float-right mt-10 max-sm:text-sm'><p className=''>Model Name: Jeep wrangler <br />Capacity: 20 Miles per gallon <br />Color: Red <br />Mileage: 15000m <br />Class: SUV</p></div>
    </div>

    <div className='flex  mt-5'>  
    <img className='my-10 max-sm:mt-14 mx-5 h-[150px] w-[266px] max-sm:h-[80px]' src="images/toyota.png" alt="" />
    <div className='float-right mt-10 max-sm:text-sm'><p className=''>Model Name: Toyota sienna <br />Capacity: 36 Miles per gallon <br />Color: Silver <br />Mileage: 100000m <br />Class: Van</p></div>
    </div>


    </div>
  </div>
  )
}

export default rpf