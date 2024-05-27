
import React from 'react'
import flowerSummer from '../assets/image/flowerSummer.jpg'
import image4 from '../assets/image/image4.jpg'
import images from '../assets/image/images.jpg'
import images2 from '../assets/image/images2.jpg'
import images3 from '../assets/image/images3.jpg'
import images5 from '../assets/image/images5.jpg'
import fox from'../assets/image/fox.jpg'
import greenBG from '../assets/image/greenBG.jpg'
import facebook from '../assets/image/facebook.png'
import ig from '../assets/image/ig.png'
import pinterest from '../assets/image/pinterest.png'
import twitter from '../assets/image/twitter.png'
import threeH from "../assets/image/threeH.png";
import close from "../assets/image/close.png";
import { useState } from 'react'
const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showImages, setShowImages] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const btn = document.getElementById('menu-btn')
  const menu = document.getElementById('menu')

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle(hidden)
  }
  const toggleImages = () => {
    setShowImages(!showImages);
  };
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };
  /*function handle click*/
  
  return (
    <>

        
        <section id="hero">
            <div className="container max-w-6xl mx-auto px-6 py-12">

                <nav className='flex items-center justify-between font-bold text-white'>
                      <div className='font-alata items-center justify-between font-bold text-white text-4xl'>LOOP</div>
                        
                        <div className="hidden h-10 font-alata md:flex md:space-x-8">
                          <div className="group">
                            <a href="#">Home</a>
                            <div className="mx-2 group-hover:border-b group-hover:border-blue-50">

                            </div>

                          </div>

                          <div className="group">
                            <a href="#">News</a>
                            <div className="mx-2 group-hover:border-b group-hover:border-blue-50">

                            </div>

                          </div>

                          <div className="group">
                            <a href="#">Vistit Us</a>
                            <div className="mx-2 group-hover:border-b group-hover:border-blue-50">

                            </div>

                          </div>

                          <div className="group">
                            <a href="#">Digital Assets</a>
                            <div className="mx-2 group-hover:border-b group-hover:border-blue-50">

                            </div>

                          </div>

                          <div className="group">
                            <a href="#">Contact Us</a>
                            <div className="mx-2 group-hover:border-b group-hover:border-blue-50">

                            </div>

                          </div>
                        </div>
                        {/* Hamburger button */}
                      <div className="md:hidden">
                      {!isMenuOpen && (
                        <button
                        id="menu-btn"
                         type='button'
                         className="z-40 block hamburger md:hidden focus:outline-none bg-slate-100"
                         onClick={toggleMenu}
                         >
                          
                          <img src={threeH} alt="" />
                        </button>
                      )}
                       {isMenuOpen && (
                        <button
                         id="menu-btn"
                         type='button'
                         className=" z-40 block hamburger md:hidden focus:outline-none"
                         onClick={toggleMenu}
                         >
                         <img src={close} alt="" />
                        </button>
                       )}

                      </div>
                </nav>
    {/* Mobile menu*/}
    {isMenuOpen && (
    <div id="menu" className=" md:hidden absolute top-0 bottom-0 left-0 flex flex-col 
    self-end w-full  min-h-screen py-1 pt-20 pl-12 space-y-3 text-lg text-white 
    uppercase bg-green-800 ">
      <a href="#" className='hover:text-red-400'>Home</a>
      <a href="#" className='hover:text-red-400'>News</a>
      <a href="#" className='hover:text-red-400'>Visit Us</a>
      <a href="#" className='hover:text-red-400'>Digital Assets</a>
      <a href="#" className='hover:text-red-400'>Contact Us</a>
    </div>
    )}

                <div className="max-w-lg mt-10 mb-50 p-10 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
                Immerse yourself in a historical place.
                </div>
            </div>
        </section>

{/*section feature  */}
        <section id="feature">

{/*feature container */}
          <div className="relative container flex flex-col max-w-6xl mx-auto
           my-32 px-6 text-gray-900 md:flex-row md:px-0">
      
       {/* image */}
            <img src={flowerSummer} 
            className=' w-[62%]'
            alt="" />

 {/*text container */}
  <div className="top-10 pr-50 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
      <h2 className="max-w-lg mt-10 mb-6 font-san text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
      the beauty of nature
      </h2>
      <p className="max-w-md text-center md:text-left">
      Nature's beauty is an eternal marvel, captivating our senses with
       its majestic mountains, serene rivers, and vibrant sunsets.
        From the delicate petals of a flower to the rhythmic melodies of birdsong, it offers a sanctuary of tranquility amidst life's chaos,
       reminding us to pause and marvel at its boundless wonders.
      </p>
  </div>   

          </div>
        </section>

        {/*creation section */}
        <section id="creation">

          {/*creation container */}
          <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">

            {/*creation header */}
            <div className="flex justify-center mb-20 md:justify-between">
              <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
              Places to visit
              </h2>
    {/*creation button */}

    <button className=" btn hidden md:block" onClick={toggleImages}>
      See All
    </button>
            </div>
     {/*items container */}
     {showImages && (
     <div className="items-container">

        {/* 1 items */}
        <div className="group item ">
          {/* Desktop items */}
          <img src= { fox } alt=""
          className='hidden w-full duration-200 md:block group-hover:scale-110' />
{/* Mobile items */}
<img src= { image4 } alt=""
          className='w-full md:hidden' />

        {/* items gradient */} 

        <div className="item-gradient"></div> 
      {/* items text */}
    <h5>Nature beauty</h5>
        </div>

        {/* 2 items */}
        <div className="group item ">
          {/* Desktop items */}
          <img src= { images2 } alt=""
          className='hidden w-full duration-200 md:block group-hover:scale-110' />
{/* Mobile items */}
<img src= { images2 } alt=""
          className='w-full md:hidden' />

        {/* items gradient */} 

        <div className="item-gradient"></div> 
      {/* items text */}
    <h5>River flow</h5>

        </div>

        {/* 3 items */}
        <div className="group item ">
          {/* Desktop items */}
          <img src= { images3 } alt=""
          className='hidden w-full duration-200 md:block group-hover:scale-110' />
{/* Mobile items */}
<img src= { images3 } alt=""
          className='w-full md:hidden' />

        {/* items gradient */} 

        <div className="item-gradient"></div> 
      {/* items text */}
    <h5>Mountain</h5>

        </div>

        {/* 4 items */}
        <div className="group item ">
          {/* Desktop items */}
          <img src= { images5 } alt=""
          className='hidden w-full duration-200 md:block group-hover:scale-110' />
{/* Mobile items */}
<img src= { images5 } alt=""
          className='w-full md:hidden' />

        {/* items gradient */} 

        <div className="item-gradient"></div> 
      {/* items text */}
    <h5>volcano</h5>

        </div>
     </div>
     )}

        {/*items container 2 */}
        {showImages && (
        <div className="items-container mt-10">

{/* 1 items */}
<div className="group item ">
  {/* Desktop items */}
  <img src= { fox } alt=""
  className='hidden w-full duration-200 md:block group-hover:scale-110' />
{/* Mobile items */}
<img src= { image4 } alt=""
  className='w-full md:hidden' />

{/* items gradient */} 

<div className="item-gradient"></div> 
{/* items text */}
<h5>Nature beauty</h5>
</div>

{/* 2 items */}
<div className="group item ">
  {/* Desktop items */}
  <img src= { images2 } alt=""
  className='hidden w-full duration-200 md:block group-hover:scale-110' />
{/* Mobile items */}
<img src= { images2 } alt=""
  className='w-full md:hidden' />

{/* items gradient */} 

<div className="item-gradient"></div> 
{/* items text */}
<h5>Nature beauty</h5>

</div>

{/* 3 items */}
<div className="group item ">
  {/* Desktop items */}
  <img src= { images3 } alt=""
  className='hidden w-full duration-200 md:block group-hover:scale-110' />
{/* Mobile items */}
<img src= { images3 } alt=""
  className='w-full md:hidden' />

{/* items gradient */} 

<div className="item-gradient"></div> 
{/* items text */}
<h5>Nature beauty</h5>

</div>

{/* 4 items */}
<div className="group item ">
  {/* Desktop items */}
  <img src= { images5 } alt=""
  className='hidden w-full duration-200 md:block group-hover:scale-110' />
{/* Mobile items */}
<img src= { images5 } alt=""
  className='w-full md:hidden' />

{/* items gradient */} 

<div className="item-gradient"></div> 
{/* items text */}
<h5>Nature beauty</h5>

</div>
</div>
        )}
     
{/*bottom button */}
<div className="flex justify-center mt-10 md:hidden">
  <button className="btn w-full md:hidden" onClick={toggleImages}>Seel All</button>
</div>
          </div>
        </section>


{/*section feature  */}
<section id="feature">

{/*feature container */}
          <div className="relative container flex flex-col max-w-6xl mx-auto
           my-32 px-6 text-gray-900 md:flex-row md:px-0">
      
       {/* image */}
            <img src={greenBG} 
            className=' w-[62%]'
            alt="" />

 {/*text container */}
  <div className="top-10 pr-50 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
      <h2 className="max-w-lg mt-10 mb-6 font-san text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left">
      Embracing Nature's Symphony
      </h2>
      <p className="max-w-md text-center md:text-left">
      Nature's ever-changing canvas, painted with the vibrant hues of sunrise and the gentle whispers of wind through ancient trees,
       evokes a profound sense of wonder, inviting us to pause, reflect, and reconnect with the essence of our existence.
      </p>
  </div>   

          </div>
        </section>
      
        <footer className="bg-green-700">
        {/* container */}
      <div className="container max-w-6xl py-10 mx-auto">
                {/*footer flex container */}
            <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
                {/* menu $ logo container*/}
                <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
                  <div className="h-8">
                  <div className='font-alata items-center justify-between font-bold text-white text-4xl'>LOOP</div>
                  </div>
                   <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                                 
                                   {/* item 1*/}
                    <div className="h-10 group">
                      <a href="#">About</a>
                      <div className="mx-2 group-hover:border-b group-hover:border-blue-50">

                      </div>
                    </div>

                                   {/* item 2*/}
                      <div className="h-10 group">
                      <a href="#">Location</a>
                      <div className="mx-2 group-hover:border-b group-hover:border-blue-50">

                      </div>
                    </div>

                                   {/* item 3*/}
                                   <div className="h-10 group">
                      <a href="#">FAQ</a>
                      <div className="mx-2 group-hover:border-b group-hover:border-blue-50">

                      </div>
                    </div>

                                   {/* item 4*/}
                                   <div className="h-10 group">
                      <a href="#">Feedback</a>
                      <div className="mx-2 group-hover:border-b group-hover:border-blue-50">

                      </div>
                    </div>

                   </div>

                </div>
   
                {/* social $ copy container */}
                <div className="flex flex-col items-start justify-between space-y-4 text-white">
                  {/* icon container */}
                  <div className="flex items-center justify-center space-x-4 md:justify-end">
                    {/* icon 1 */}
                    <div className="h-8 w-8 group">
                      <a href="#"> 
                      <img src= {facebook} alt="" />

                      </a>
                    </div>
               {/* icon 2 */}
               <div className="h-8 w-8 group">
                      <a href="#"> 
                       <img src= {ig} alt="" />

                      </a>
                    </div>

                     {/* icon 3 */}
                     <div className="h-8 w-8 group">
                      <a href="#"> 
                     <img src={pinterest} alt="" />

                      </a>
                    </div>
                     {/* icon 4 */}
                     <div className="h-8 w-8 group">
                      <a href="#"> 
                      <img src={twitter} alt="" />
                      </a>
                    </div>
                  </div>
       {/* copy */}

       <div className="font-bold">
        &copy; 2024 loop. All Right Reserved
       </div>

                </div>

            </div>


      </div>



        </footer>

    </>
  )
}
export default Hero