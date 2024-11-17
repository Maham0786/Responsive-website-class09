import React from "react";
import Link from "next/link";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer =()=>{
    return(
        <div className="h-[242px] flex flex-col text-center items-center space-y-6 justify-center ">
            <div className="flex flex-row space-x-4">
             <Link href="https://www.instagram.com/mahayyyy_27/"><FaSquareInstagram className="w-[30px] h-[30px]" /></Link>
    <Link href="https://www.linkedin.com/in/maham-waheed-422200336/"><FaLinkedin className="w-[30px] h-[30px]"/></Link>
            <FaTwitter className="w-[30px] h-[30px]"/>
            </div>
            <p className="text-center font-semibold md:font-semibold text-[22px]" >Copyright @2024 all rights reserved </p>
            
        </div>

    )
}
export default Footer