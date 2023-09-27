import projectData from './projectsData.json'
import searchEngine from './assets/search-engine.png'

const Projects = () => {

  const projectBoxes = projectData.map(proj => {
    return (
      <div className='flex flex-col'>
        <img src={proj.image} className='h-72 object-cover rounded object-top shadow-img' alt={proj.title} />
        <h2 className='font-title text-2xl'>{proj.title}</h2>
        <hr />
        <p>{proj.description}</p>
      </div>
    )
  })

  return (
    <div className="bg-amber-50 flex text-violet-950 py-20">
      <aside className='flex flex-col p-20 items-center w-1/3'>
        <img src={searchEngine} className='w-52' alt='search logo' />
        <h1 className='font-title text-6xl my-5 font-bold'>Here we go!</h1>
        <p className='text-xl'>I have worked on many projects throughout my developer journey, please take a look at my most recent applications!</p>
      </aside>
      <div className='grid grid-flow-col grid-rows-2 gap-16 p-20'>
        {projectBoxes}
      </div>
    </div>
  )
}

export default Projects