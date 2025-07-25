'use client';
import { JSX } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Props {
  path: string;
  icon: JSX.Element;
  title: string;
  subtitle?: string;
}

export const SideBarMenuItem = ({title, subtitle, icon, path}: Props) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link href={path} className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 ${isActive ? 'bg-blue-800' : 'hover:bg-white/5'} transition ease-linear duration-150`}>
      <div>
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="text-sm text-white/50 hidden md:block">{subtitle}</span>
      </div>
    </Link>
  )
}
