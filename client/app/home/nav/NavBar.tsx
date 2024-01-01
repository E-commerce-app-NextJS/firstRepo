import Link from "next/link"
import Contenair from "../../home/Contenair"
import { Redressed } from "next/font/google"
import { FaCartPlus } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

const redressed=Redressed({subsets:["latin"],weight:["400"]})
const NavBar=()=>{

    return (
        /* //nav style */
        <div className="sticky top-0 w-full bg-slate-200 z-30 shadow-sm">
            {/* nav Padding */}
           
           <div className="py-4 border-b-[1px]">
                <Contenair>
                    <div className="flex items-center justify-between gap-3 md:gap-0">
                        <Link href="/" className={`${redressed.className} font-bold text-3xl `}>UnionMarket</Link>
                        <Link href="/" className={`${redressed.className} font-bold text-2xl hover:bg-slate-300 rounded-full`}>Home</Link>
                        <Link href="/home/contact" className={`${redressed.className} font-bold text-2xl hover:bg-slate-300 rounded-full`}>Contact</Link>
                        <Link href="/home/about" className={`${redressed.className} font-bold text-2xl hover:bg-slate-300 rounded-full`}>About</Link>
                        <div>
                            
                        <input
                         className="relative rounded-md shadow-sm"
                         placeholder="search..."
                         />
                         <button className="bg-slate-700 hover:bg-slate-500 text-white font-bold py-1/2 px-1 rounded-full">search</button>
                         </div>

                        <div className="flex items-center gap-8 md:gap-12">
                        <Link href='/components/auth/Login'><FaCartPlus size='25' /></Link>    
                        <Link href='/components/auth/Login'><FaUserCircle  size='25'/></Link>    
                        </div>
                    </div>
                </Contenair> 
           </div>
        </div>
    )
}

export default NavBar