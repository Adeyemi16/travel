import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className="border-red-500 max-container flex flex-col gap-20 py-10 md:gap-28 lg:py-20 xl:flex-row border-2 border-red\">
       <div className="hero-map" />

       {/* Left */}
       <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
       <Image src="/camp.svg" alt='camp' width={50} height={50} className='absolute left-[-50px] top[-30px] w-10 lg:w-[50px]'/>
       <h1 className='bold-52 lg:bold-88'>Putuk camp Area</h1>
       <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
        We want to be on each of your journey seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app.
       </p>
       <div className="my11 flex flex-wrap gap-5"> 
        <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) =>(
                <Image src="/star.svg" key={index} alt='star' width={24} height={24}/>
            ))}
        </div>
        <p>
            198k
            <span className="regular-16 lg-regular-20 ml-1 underline">Excellent reviews</span>
        </p>
        <div className='flex flex-col w-full gap-3 sm:flex-row'>
            <Button type='button' title='Download App' variant='btn_green'/>

            <Button type='button' title='How we work?' variant='btn_white_text' icon='/play.svg'/>

        </div>
       </div>
       <div className="relative flex flex-1 items-start border-2 border-blue-500">
        <div className="relative z-20 w-[268px] flex-col gap-8 rounded-3xl bg-green-90 py-8"></div>
       </div>
       </div>
    </section>
  )
}

export default Hero