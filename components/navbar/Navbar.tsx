import {HomeIcon} from '@primer/octicons-react'
import Link from "next/link"
import {ActiveLink} from "../../components";

interface INavItems {
  path: string;
  text: string;
}

const navItems: INavItems[] = [
  {path: '/about', text: 'About'},
  {path: '/pricing', text: 'Pricing'},
  {path: '/contact', text: 'Contact'},
]

export const Navbar = () => {
  return (
    <nav className="flex place-content-between bg-blue-800/30 p-2 m-2 rounded ">
      <Link href={'/'}>
        <HomeIcon size={16} />
      </Link>
      <ul className="flex gap-2">
        {navItems.map((item:INavItems) =><ActiveLink key={item.text} {...item} />)}
      </ul>
    </nav>
  )
}
