import Image from 'next/image'
import Contenair from './home/Contenair'
import HomeBanner from './home/HomeBanner'
import Allproducts from './home/Allproducts'
import CategoryNav from './home/CategoryNav'

export default function Home() {
  return (
    <div>
     
      <div className='p-8'>
        <Contenair>
          <div>
          <CategoryNav/>
          <HomeBanner/>
          <Allproducts/>
          </div>
        </Contenair>
      </div>

    </div>
      
  )
}
