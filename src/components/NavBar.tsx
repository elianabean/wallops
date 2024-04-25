import { 
  BrowserRouter as Router, Routes, 
  Route, Link
} from "react-router-dom"; 

function NavBar() {
  return (
    <nav className="bg-black/[0.02] border-b-2 border-white/20 dark:bg-opacity-100 bg-opacity-90 z-50 top-0 w-[100vw] fixed h-[10vh]">
    <div className="h-full max-w-screen-xl flex flex-col md:flex-row justify-center py-6 w-full items-center md:justify-between md:mx-auto md:p-4">
      <Link to="/">
      <div className="flex items-center md:space-x-3">
          <p className="text-2xl font-semibold font-playfairDisplay text-white">Wallops</p>
          
      </div></Link>
    
      <div className="hidden w-full md:block md:w-auto font-ptSans">
        <ul className="font-medium flex flex-col p-4 md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0">
          <li>
            <Link to="/">
            <div className="leading-none block md:bg-transparent text-white hover:text-dark-blue md:p-0" aria-current="page">
                <p className="relative group">
                    <span>gallery</span>
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-dark-blue dark:bg-yellow2 group-hover:w-1/2 group-hover:transition-all duration-200 mt-0.5"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-dark-blue dark:bg-yellow2 group-hover:w-1/2 group-hover:transition-all duration-200 mt-0.5"></span>
                </p>
            </div>
            </Link>
          </li>
          <li>

            <Link to="/">
            <div className="leading-none block md:border-0 md:p-0 text-white hover:text-dark-blue hover:dark:text-yellow2 ">
                <p className="relative group">
                    <span>contact</span>
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-dark-blue dark:bg-yellow2 group-hover:w-1/2 group-hover:transition-all duration-200 mt-0.5"></span>
                    <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-dark-blue dark:bg-yellow2 group-hover:w-1/2 group-hover:transition-all duration-200 mt-0.5"></span>
                </p>
            </div>
            </Link>
          </li>          
        </ul>
      </div>
    </div>
    </nav>
  )
}

export default NavBar;