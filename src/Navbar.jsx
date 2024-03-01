export default function Navbar() {
  return (
    <nav className="bg-primary-dark fixed top-0 w-full flex justify-between items-center px-10 py-3">
      <h1 className="logo text-primary-light text-3xl font-bold">Tokokue</h1>
      <input type="checkbox" id="check" className="hidden" />
      <label htmlFor="check" className="icons md:hidden">
        <i className="fas fa-bars text-white text-2xl" id="menu-icon"></i>
        <i className="fas fa-times text-white text-2xl hidden" id="close-icon"></i>
      </label>
      <div className="nav hidden md:flex">
        <a href="" className="text-primary-light font-bold px-4 py-2 rounded-lg">Home</a>
        <a href="" className="text-primary-light font-bold px-4 py-2 rounded-lg">About</a>
        <a href="" className="text-primary-light font-bold px-4 py-2 rounded-lg">Menu</a>
        <a href="" className="text-primary-light font-bold px-4 py-2 rounded-lg">Contact</a>
        <a href="" className="text-primary-light font-bold px-4 py-2 rounded-lg login">Log In</a>
      </div>
    </nav>
  )
}