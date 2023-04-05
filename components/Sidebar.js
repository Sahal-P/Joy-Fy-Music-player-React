import Image from "next/image"
import {
 
    DotsHorizontalIcon,
  } from "@heroicons/react/solid";
  import { FaMicrophoneAlt } from "react-icons/fa";
  import { RiCompass3Fill } from "react-icons/ri";
  import { RiHome4Fill } from "react-icons/ri";
  import { BsReception4 } from "react-icons/bs";
  import { AiFillClockCircle } from "react-icons/ai";
  import { HiDotsHorizontal } from "react-icons/hi";
  
function Sidebar() {

  return (
    
    <section className="fixed top-0 z-40 flex flex-col p-4 items-center bg-black w-[90px] h-screen space-y-8">
        <Image 
        src="https://media.discordapp.net/attachments/898544585167482891/900083852658225172/image0.png?width=619&height=637" 
        width={56} 
        height={56} 
        objectFit="contain"
        />
        <div className="flex flex-col space-y-8">
        <RiHome4Fill className="sidebarIcon text-2xl text-white opacity-[0.85]" />
        <RiCompass3Fill className="sidebarIcon text-2xl"  />
        <FaMicrophoneAlt className="sidebarIcon text-2xl" />
        <BsReception4 className="sidebarIcon text-2xl" />
        <AiFillClockCircle className="sidebarIcon text-2xl" />
        <HiDotsHorizontal className="sidebarIcon text-2xl" />
        </div>
    
    </section>
  )
}

export default Sidebar
