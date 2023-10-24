import profilePhoto from './assets/profile-photo.png'

const AboutMe = () => {
  return (
    <div id='about' className="bg-gradient-to-br from-pink-500 to-pink-400 font-body text-amber-50 h-1/2 flex flex-col">
      <section className='p-20 pb-0 flex'>
        <div className='pr-20 flex flex-col'>
          <h1 className="text-6xl font-title pl-20 pb-10">
            Heyo, <span className='text-blue-700 font-bold'>Calli</span> here!
          </h1>
        <div className='bg-violet-300 rounded-full px-16 py-10 my-5'><p className="text-xl text-blue-900 leading-relaxed indent-10">As a software developer and Environmental Studies graduate from UNC Greensboro, I've been driven by a love for problem-solving and a passion for creating change that benefits both people and our planet. My journey into technology was fueled by a desire to align my profession with my passion.</p></div>
        </div>
          <aside className='w-full min-w-64'>
            <img src={profilePhoto} className='rounded-full object-cover shrink-0' alt='Callihan Herrmann profile photo'/>
          </aside>
      </section>
        <div className='p-20 pt-0 w-full flex flex-col'>
          <div className='bg-blue-300 rounded-full px-16 py-10 my-5'><p className="text-xl text-violet-900 leading-relaxed indent-10">Transitioning from environmental studies to software development wasn't just about changing my career path; it was about empowering myself to make a meaningful impact. I recently graduated from the Turing School of Software and Design, where I honed my skills and collaborated on projects that addressed real-world challenges. I'm excited to leverage my problem-solving abilities and environmental awareness to contribute to innovative solutions in the tech industry.</p></div>
        </div>
    </div>
  )
}

export default AboutMe