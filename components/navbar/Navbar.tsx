export const Navbar = () => {
  return (
    <nav className="flex place-content-between bg-blue-800/30 p-2 m-2 rounded ">
      <span className="mr-2">Home</span>
      <ul className="flex gap-2">
        <li><a className="mr-2" href="/about">About</a></li>
        <li><a className="mr-2" href="/pricing">Pricing</a></li>
        <li><a className="mr-2" href="/contact">Contact</a></li>
      </ul>
    </nav>
  )
}
