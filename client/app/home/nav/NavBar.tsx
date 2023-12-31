import Link from "next/link"
import Contenair from "../../home/Contenair"
import { Redressed } from "next/font/google"

const redressed=Redressed({subsets:["latin"],weight:["400"]})
const NavBar=()=>{

    return (
        /* //nav style */
        <div className="sticky top-0 w-full bg-slate-200 z-30 shadow-sm">
            {/* nav Padding */}
           
           <div className="py-4 border-b-[1px]">
                <Contenair>
                    <div className="flex items-center justify-between gap-3 md:gap-0">
                        <Link href="/" className={`${redressed.className} font-bold text-2xl`}>UnionMarket</Link>
                        <div><input
                         className="relative rounded-md shadow-sm"
                         placeholder="search..."
                         /></div>
                        <div className="flex items-center gap-8 md:gap-12">
                            <div>Cart</div>
                            <div>UserMenu </div>
                        </div>
                    </div>
                </Contenair> 
           </div>
        </div>
    )
}

export default NavBar