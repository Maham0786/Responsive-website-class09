import React from "react"
import Image from "next/image"
const Hero = () => {
    return (
<div className="my-[66px] md:w-[1030px] p-6 mx-auto md:h-[308px] flex flex-col-reverse md:flex-row items-center justify-evenly  md:justify-between">
    <div className=" w-[95%] md:w-[521px] h-[305px] flex flex-col justify-between items-start">
        <h1 className=" text-[24px] md:text-[40px] font-black mt-8">Hi, I am John, <br/>
        Creative Technologist</h1>
        <p className="text-[16px] font-normal">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
             Exercitation veniam consequat sunt nostrud amet</p>
        <button className="text-white rounded-sm shadow-md shadow-black/60 bg-red-400 h-[50px] w-[205px] text-[18px] font-normal">Download Resume</button>
    </div>
    <div className="w-[292px] h-[299px] relative" ><Image className="rounded-full z-50" src="/hero-image.jpeg" alt="hero-image" width={292} height={299}/></div>
    
</div>
    )
        
    
    
}
export default Hero