export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 z-50 w-full">
      <div className="flex-1">
        <a className="title text-xl px-2" href="#home">caroline robinson</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#home">home</a></li>
          <li><a href="#about">about me</a></li>
          <li><a href="#resume">resume</a></li>
          {/* <li><a href="#projects">projects</a></li> */}
        </ul>
      </div>
      
    </div>
  )
}