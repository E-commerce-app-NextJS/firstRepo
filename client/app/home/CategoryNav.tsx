


const CategoryNav=()=>{

    return (
        <ul className="flex items-center justify-between bg-slate-700 mb-50px pt-1 pb-1">
        <li className="mr-6">
          <a className="text-white hover:bg-slate-500 font-bold rounded-full text-2xl" href="/home/men">Men</a>
        </li>
        <li className="mr-6">
          <a className="text-white hover:bg-slate-500 font-bold rounded-full text-2xl" href="/home/women">Women</a>
        </li>
        <li className="mr-6">
          <a className="text-white hover:bg-slate-500 font-bold rounded-full text-2xl" href="/home/kids">Kids</a>
        </li>
        <li className="mr-6">
          <a className="text-white hover:bg-slate-500 font-bold rounded-full text-2xl" href="/home/babies">Babies</a>
        </li>
      </ul>
    )
}

export default CategoryNav