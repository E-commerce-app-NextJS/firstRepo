'use client'
import { Redressed } from "next/font/google"
import Contenair from "../../Contenair";
import { SliceText } from "../../SliceText"
import { Product } from "@/app/types/products";
import React, { useEffect, useState } from "react";

const redressed=Redressed({subsets:["latin"],weight:["400"]})

const Men=()=>{

    const [data, setData] = useState<Product[]>([]);
    const [showHide,setShowHide]=useState(true)
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch("http://localhost:8000/products/category/"+1);
            const data = await res.json();
            setData(data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, []);

    return (
        <div>
             <Contenair>

             <div className="mt-10">
             <img src="https://www.alexinternational.ro/wp-content/uploads/2016/02/BANNER-MENS-CLOTHING.jpg"/>
            </div>

             <div className="flex  justify-center items-center mt-10 mb-10">
                <h1 className={`${redressed.className} font-extrabold text-4xl border-2`}>Men's Products</h1>
             </div>

            <div className="grid grid-cols-4 gap-4">

                {showHide===true?data.slice(0,8).map((el:any,i:number)=>{


                    return (

                        <div className="max-w-sm rounded overflow-hidden shadow-lg" key={i}>
                        <img className="w-full" src={el.image} alt="Sunset in the mountains"/>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{el.name}</div>
                            <p className="text-gray-700 text-base">
                            {SliceText(el.description)}
                            </p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Men</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#suit</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                        </div>

                    )
                }):data.slice(0,data.length-1).map((el:any,i:number)=>{


                  return (

                      <div className="max-w-sm rounded overflow-hidden shadow-lg" key={i}>
                      <img className="w-full" src={el.image} alt="Sunset in the mountains"/>
                      <div className="px-6 py-4">
                          <div className="font-bold text-xl mb-2">{el.name}</div>
                          <p className="text-gray-700 text-base">
                          {SliceText(el.description)}
                          </p>
                      </div>
                      <div className="px-6 pt-4 pb-2">
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Men</span>
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#suit</span>
                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                      </div>
                      </div>

                  )
              })
    }
            </div>
            
            <div className=" flex  justify-center items-center mb-10 mt-10">
            <button className=" bg-transparent hover:bg-slate-700 text-slate-700 font-semibold
                 hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent 
                 rounded " onClick={()=>setShowHide(!showHide)}>
                 See All Products
                </button>
            </div>

             


             </Contenair>
             
        </div>
    )
}

export default Men