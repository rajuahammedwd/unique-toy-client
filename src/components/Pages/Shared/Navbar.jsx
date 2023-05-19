
import logo from '../../../assets/Logo.png'
const Navbar = () => {

    const navbar= <>
      <li><a href="">Home</a></li>
      <li><a href="">All Toys</a></li>
      <li><a href="">My Toys</a></li>
      <li><a href="">Add a Toys</a></li>
      <li><a href="">Blog</a></li>
      
    </>

    return (
        <div className="navbar bg-base-100 px-5">

            {/* Nav Item */}
            <div className="navbar lg:w-1/4">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navbar}
                    </ul>
                </div>
                {/* Logo Section */}
                <div className='lg:flex'>
                    <img src={logo} style={{width:70}} alt="" />
                    <h2 className='lg:text-3xl font-bold lg:ml-2'>Unique Toys</h2>
                </div>
            </div>
            <div className="navbar lg:w-2/4 hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navbar}
                </ul>
            </div>
            <div className="navbar lg:w-1/4 gap-2 justify-end">
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Navbar;