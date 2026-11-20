import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="bg-slate-900
                        text-white
                        p-5
                        flex
                        justify-between
                        items-center">

            
    
      <Link to="/" className="text-2xl font-bold">
        Drive<span className="text-orange-500">Easy</span>
      </Link>

       
      <div className="flex gap-6 items-center">

        <Link to="/">Home</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/login">Login</Link>

        <Link
          to="/register"
          className="bg-orange-500 px-5 py-2 rounded-lg">
        
          Get Started
        </Link>

      </div>
    </nav>
  );
}

export default Navbar;
    



