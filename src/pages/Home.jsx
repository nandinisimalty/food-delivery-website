import React from 'react'
import Nav from '../components/Nav'
import { categories } from '../Category'
function Home() {
  return (
    <div className=' bg-slate-200 w-full min-h-screen'>
      <Nav/>
      <div className='flex flex-wrap justify-center items-center gap-10 w-full'>
        {categories.map((item)=>{
          return <div className='w-34 h-28 bg-white flex flex-col items-start p-5 text-20 
          font-semibold text-grey-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200'>
            {item.icon}
            {item.name}
          </div>
        })}
      </div>

      <div>
        <Card/>
      </div>
    </div>
  )
}

export default Home
