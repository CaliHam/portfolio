import projectData from './projectsData.json'
import searchEngine from './assets/search-engine.png'

const Projects = () => {

  const projectBoxes = projectData.map((proj, i) => {
    return (
      <div className='flex flex-col' key={i}>
        <img src={proj.image} className='h-72 object-cover rounded object-top shadow-img' alt={proj.title} />
        <div className='flex font-title justify-between'>
          <h2 className='text-2xl'>{proj.title}</h2>
          <div className='flex'>
            <a href={proj.deployed}><u>Visit</u></a>
            <p>&nbsp;|&nbsp;</p>
            <a href={proj.github}><u>Repo</u></a>
          </div>
        </div>
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
        <p className='text-xl pt-10'>I've embarked on an exciting journey as a developer, and I'm thrilled to showcase my most recent applications. These projects represent my dedication to learning and my passion for creating innovative solutions.</p>
      </aside>
      <div className='grid grid-flow-col grid-rows-2 gap-16 p-20'>
        {projectBoxes}
      </div>
    </div>
  )
}

export default Projects