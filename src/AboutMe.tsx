import profilePhoto from './assets/profile-photo.png'

const AboutMe = () => {
  return (
    <article id='about' className="bg-svg font-body text-amber-50 h-auto w-auto flex flex-col flex-wrap">
      <section className='p-10 pb-0 md:p-20 md:pb-0 flex flex-col-reverse items-center lg:flex-row'>
        <div className='lg:pr-20 flex flex-col '>
          <h1 className="text-6xl font-title lg:pl-20 pb-10">
            Heyo, <span className='font-bold text-pink-400'>Calli</span> here!
          </h1>
          <div className='p-5 lg:px-10 mb-5'>
            <p className="text-xl leading-relaxed indent-10">As a software developer and Environmental Studies graduate from UNC Greensboro, I've been driven by a love for problem-solving and a passion for creating change that benefits both people and our planet. My journey into technology was fueled by a desire to align my profession with my passion.</p>
          </div>
        </div>
          <aside className='min-w-64 shrink-0 py-10 lg:pb-5'>
            <img src={profilePhoto} className='rounded-full object-cover shrink-0 hover:animate-rotate360 transition' alt='Callihan Herrmann profile photo'/>
          </aside>
      </section>
        <div className='px-10 pb-52 pt-0 md:px-20 md:pt-0 w-full flex flex-col flex-wrap'>
          <div className='lg:px-10'>
            <p className="text-xl invisible xl:visible leading-relaxed indent-10">Transitioning from environmental studies to software development wasn't just about changing my career path; it was about empowering myself to make a meaningful impact. I recently graduated from the Turing School of Software and Design, where I honed my skills and collaborated on projects that addressed real-world challenges. I'm excited to leverage my problem-solving abilities and environmental awareness to contribute to innovative solutions in the tech industry.</p>
          </div>
        </div>
    </article>
  )
}

export default AboutMe