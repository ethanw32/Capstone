import React from 'react'
import { Link } from 'react-router-dom'

function header() {
  return (
<div className="flex flex-row items-center text-3xl bg-[#03E096] h-24 px-10">
  {/* Left Section */}
  <div className="font-bold text-black max-sm:text-2xl">
    <Link to='/'>IslandGo</Link>
  </div>

  {/* Right Section */}
  <div className="ml-auto text-xl text-white space-x-4">
   <Link to= '/signup'>Sign up</Link>
    <Link to= '/login'>log In </Link>
  </div>
</div>
  )
}

export default header