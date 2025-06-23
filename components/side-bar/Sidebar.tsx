import Image from "next/image"

// components
import { SideBarMenuItem } from "../side-bar";

import { IoBrowsersOutline, IoCalculator, IoLogoReact } from "react-icons/io5";

const navItems = [
  { title: "Dashboard", subtitle: 'Visualización', icon: <IoBrowsersOutline size={24}/>, path: "/dashboard/main" },
  { title: "Settings", subtitle: 'Contador Client Side', icon: <IoCalculator size={24}/>, path: "/dashboard/counter" },
  { title: "Pokemons", subtitle: 'Gestión de Pokemons', icon: <IoLogoReact size={24}/>, path: "/dashboard/pokemons" }
];

export const Sidebar = () => {


  return (
    <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0">

      <div id="logo" className="my-4 px-6">
        <h1 className="flex gap-2 items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="inline-block text-blue-500" />
          Dash
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">Manage your actions and activities</p>
      </div>

      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image 
              className="rounded-full w-8 h-8" 
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c" 
              alt="User avatar" 
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Edward Tompson
          </span>
        </a>
      </div>
      
      <div id="nav" className="w-full px-6">
        
      {navItems.map((item, index) => (
          <SideBarMenuItem 
            key={index} 
            {...item}
          />
      ))}

      </div>
    </div>
  )
}
