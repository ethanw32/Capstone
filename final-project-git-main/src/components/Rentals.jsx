import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import "./App.css";
import "./js/star";


const Rentals = () => {
  const [activeTab, setActiveTab] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Sync activeTab with current URL path
  useEffect(() => {
    if (location.pathname.includes("taxis")) {
      setActiveTab("taxis");
    } else if (location.pathname.includes("rentals")) {
      setActiveTab("rentals");
    }
  }, [location.pathname]);

  const handleClick = (tab, path) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
      navigate(path);
    }
  };

  return (
    <div>
      <div className="bg-[#03E096] h-fit w-full relative ">

      <div className="rounded-3xl font-medium bg-white text-lg h-10 w-40 m-auto">
      <div className="flex h-full">
        {/* Taxis Button */}
        <div
          onClick={() => handleClick("taxis", "/")}
          className={`w-1/2 h-full flex items-center justify-center cursor-pointer ${
            activeTab === "taxis"
              ? "bg-black text-white rounded-3xl"
              : "bg-white hover:bg-gray-200 rounded-3xl"
          } transition-all`}
        >
          Taxis
        </div>

        {/* Rentals Button */}
        <div
          onClick={() => handleClick("rentals", "/rentals")}
          className={`w-1/2 h-full flex items-center justify-center cursor-pointer ${
            activeTab === "rentals"
              ? "bg-black text-white rounded-3xl"
              : "bg-white hover:bg-gray-200 rounded-3xl"
          } transition-all`}
        >
          Rentals
        </div>
      </div>
    </div>
  

  <div className='bg-[#D9D9D9] w-28 h-7 rounded-2xl text-center m-auto mt-8'>Filters <i className='fa fa-search pl-4'></i></div>

  <div className='flex'>
    <img className='my-10 max-sm:mt-12 mx-5 max-sm:h-[100px]' src="images/rental.png" alt="" />
    <div className='float-right mt-10'><h1 className='font-bold text-xl'>Spice Rentals</h1> <p className='text-white'>We are a professional  auto rental business.
    We also offer a variety of vehicles</p>

    {/* Rateing stars */}
    <div className='stars mt-2'>
              {[...Array(5)].map((_, i) => (
                <i key={i} className='fa fa-star text-white-500'></i>
              ))}
            </div>
    </div>
   
  </div>

  <div className=''>
      <Link to='/rpf'>
      <button className='rounded-xl bg-[#FFFBFB] w-28 mx-5'>Profile</button></Link>
      <Link to="/inbox" state={{ name: 'Spice Rentals', imageUrl: 'images/rpfp.png', description: 'We are a professional auto rental business, We also offer a variety of vehicles' }}>
      <button className='rounded-xl bg-[#FFFBFB] w-28 mx-5'>Message</button></Link>
  </div>

  <div className='flex'>
    <img className='my-10 max-sm:mt-12  mx-5 max-sm:h-[100px]' src="images/rental.png" alt="" />
    <div className='float-right mt-10'><h1 className='font-bold text-xl'>Spice Rentals</h1> <p className='text-white'>We are a professional auto rental business.
    We also offer a variety of vehicles</p>

    {/* Rateing stars */}
    <div className='stars mt-2'>
              {[...Array(5)].map((_, i) => (
                <i key={i} className='fa fa-star text-white-500'></i>
              ))}
            </div>
    </div>
  </div>

  <div className=''>
      <Link to='/rpf'>
      <button className='rounded-xl bg-[#FFFBFB] w-28 mx-5'>Profile</button></Link>
      <Link to="/inbox" state={{ name: 'Spice Rentals', imageUrl: 'images/rpfp.png', description: 'We are a professional auto rental business, We also offer a variety of vehicles' }}>
      <button className='rounded-xl bg-[#FFFBFB] w-28 mx-5'>Message</button></Link>
  </div>

  <div className='flex'>
    <img className='my-10 max-sm:mt-12  mx-5 max-sm:h-[100px]' src="images/rental.png" alt="" />
    <div className='float-right mt-10'><h1 className='font-bold text-xl'>Spice Rentals</h1> <p className='text-white'>We are a professional  auto rental business.
    We also offer a variety of vehicles</p>

    {/* Rateing stars */}
    <div className='stars mt-2'>
              {[...Array(5)].map((_, i) => (
                <i key={i} className='fa fa-star text-white-500'></i>
              ))}
            </div>
    </div>
  </div>

  <div className='pb-10'>
      <Link to='/rpf'>
      <button className='rounded-xl bg-[#FFFBFB] w-28 mx-5'>Profile</button></Link>
      <Link to="/inbox" state={{ name: 'Spice Rentals', imageUrl: 'images/rpfp.png', description: 'We are a professional auto rental business, We also offer a variety of vehicles' }}>
      <button className='rounded-xl bg-[#FFFBFB] w-28 mx-5'>Message</button></Link>
  </div>
  
</div>

    </div>
  )
}

export default Rentals