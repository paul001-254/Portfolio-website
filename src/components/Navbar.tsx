

const Navbar = () => {
  return (
    <>
        <div className="flex items-center justify-between p-10 lg:flex-row">
          <div className="text-white font-mono text-3xl tracking-wider items-center">PROBE</div>
          <div className="space-x-6 font-serif">
            <a href="#" className="transition duration-700 ease-in-out text-white font-arial hover:text-orange-400 rounded-full px-5 py-2 text-x1">Skills</a>
            <a href="#" className="text-white hover:text-orange-500 rounded-full px-5 py-2 text-x1 transition duration-700 ease-in-out">About</a>
            <a href="#" className="text-white hover:text-orange-500 rounded-full px-5 py-2 text-x1 transition duration-700 ease-in-out">Projects</a>
          </div>
        </div>
        
    </>
  )
}

export default Navbar
