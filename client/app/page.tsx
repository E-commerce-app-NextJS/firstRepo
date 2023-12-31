import Image from 'next/image'
import Contenair from './home/Contenair'
import HomeBanner from './home/HomeBanner'

export default function Home() {
  return (
    <div>
     
      <div className='p-8'>
        <Contenair>
          <div>
          <HomeBanner/>
          </div>
        </Contenair>
      </div>

    </div>
      
  )
}
