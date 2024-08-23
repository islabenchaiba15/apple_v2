import { navLists } from '../constants'
import { appleImg, bagImg, searchImg } from '../utils'

function Navbar() {
  return (
    <div className='flex justify-between gap-10 items-center sm:px-10 px-5 py-5 w-full mw-auto relative mx-auto max-w-[1200px]'>
        <img src={appleImg} alt={'logo'} width={14} height={18} />
        <div className="flex gap-8 items-center justify-between max-sm:hidden">
            {navLists.map((nav,index)=>(
                <div key={index} className="px-2 text-sm cursor-pointer text-gray-400 hover:text-white ">{nav}</div>
            ))}
        </div>
        <div className="flex items-center justify-between gap-7">
            <img src={searchImg} alt={'logo'} width={18} height={18} />
            <img src={bagImg} alt={'logo'} width={14} height={18} />
        </div>
    </div>
  )
}

export default Navbar