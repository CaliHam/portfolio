import sun from './assets/sun.png'
import api from './assets/api.png'
import approved from './assets/approved.png'
import development from './assets/development.png'

const Welcome = () => {
  return (
    <section className="bg-amber-50 text-violet-950 flex h-auto w-screen font-body flex-col lg:flex-row">
      <div className="order-1 p-16 lg:p-28 pr-5 container mx-auto opacity-0 animate-fade-in">
        <div className='flex justify-around w-fit items-center'>
          <img className="w-12" src={sun} alt='light mode'/>
          <h1 className='text-3xl pl-2'>Callihan Herrmann</h1>
        </div>
        <h2 className="text-6xl my-20 font-title leading-normal">
          <span className="text-pink-400 font-bold">Frontend Developer</span> blending creativity, problem-solving, & social equity
        </h2> 
        <div className='flex items-center justify-around text-amber-50 pt-10'>
          <a href='#connect'><button className='bg-blue-500 rounded-full px-5 py-2 drop-shadow-md hover:scale-125 transition'>Let's Connect</button></a>
          <a href='#projects'><button className='bg-pink-400 rounded-full px-5 py-2 drop-shadow-md hover:scale-125 transition'>Projects</button></a>
        </div>
      </div>
      <div className='flex lg:flex-col items-center justify-around order-2 container mx-auto opacity-0 animate-fade-in'>
        <img className="w-60 hidden lg:block hover:translate-x-10 transition" src={approved} alt='computer approved'/>
        <img className="w-60 hidden md:block hover:-translate-x-10 transition" src={development} alt='development'/>
        <img className="w-60 hidden md:block hover:translate-x-10 transition" src={api} alt='api'/>
      </div>
    </section>
  )
}

export default Welcome