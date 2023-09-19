import sun from './assets/sun.png'
import api from './assets/api.png'
import approved from './assets/approved.png'
import development from './assets/development.png'

const Welcome = () => {
  return (
    <div className="bg-amber-50 text-violet-950 flex h-screen w-screen">
      <div className="order-1 p-28 pr-5 container mx-auto">
        <div className='flex justify-around w-80 items-center'>
          <img className="w-12" src={sun} alt='light mode'/>
          <p className='text-3xl'>Callihan Herrmann</p>
        </div>
        <h1 className="text-7xl my-20">
          <span className='text-pink-400 font-bold'>Frontend Developer</span> blending creativity, problem-solving, & social equity
        </h1> 
        <div className='flex items-center justify-around text-amber-50 pt-10'>
          <button className='bg-violet-300 rounded-2xl px-5 py-2'>Let's Connect</button>
          <button className='bg-pink-300 rounded-2xl px-5 py-2'>About Me</button>
        </div>
      </div>
      <aside className='flex flex-col items-center justify-around order-2 container mx-auto'>
        <img className="w-60" src={approved} alt='computer approved'/>
        <img className="w-60" src={development} alt='development'/>
        <img className="w-60" src={api} alt='api'/>
      </aside>
    </div>
  )
}

export default Welcome