import sun from './assets/sun.png'
import api from './assets/api.png'
import approved from './assets/approved.png'
import development from './assets/development.png'

const Welcome = () => {
  return (
    <div className="bg-amber-50 w-full text-violet-950 flex h-screen">
      <div className="order-1 p-20 pr-5">
        <div className='flex justify-around w-72 items-center'>
          <img src={sun}/>
          <p className='text-2xl'>Callihan Herrmann</p>
        </div>
        <h1 className="text-5xl font-bold">
          Frontend Developer blending creativity, problem-solving, & social equity
        </h1> 
        <div className='flex items-center justify-around text-amber-50 pt-10'>
          <button className='bg-violet-300 rounded-2xl px-5 py-2'>Let's Connect</button>
          <button className='bg-pink-300 rounded-2xl px-5 py-2'>About Me</button>
        </div>
      </div>
      <aside className='flex flex-col justify-around order-2 pr-20'>
        <img className="w-80" src={approved}/>
        <img className="w-80" src={development}/>
        <img className="w-80" src={api}/>
      </aside>
    </div>
  )
}

export default Welcome