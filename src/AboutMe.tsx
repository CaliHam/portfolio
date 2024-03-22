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
            <p className="text-xl leading-relaxed indent-10">As a recent graduate of the Turing School of Software and Design, I am a software developer with a keen passion for front-end development and a strong foundation in customer service. My academic journey at UNC Greensboro, where I earned a degree in Environmental Studies and a minor in American Sign Language, has imbued me with a deep-rooted passion for creating change that benefits both people and our planet. This unique combination of experiences has not only shaped my problem-solving skills but also fueled my dedication to accessibility in technology.</p>
          </div>
        </div>
          <aside className='min-w-64 shrink-0 py-10 lg:pb-5'>
            <img src={profilePhoto} className='rounded-full object-cover shrink-0 hover:animate-rotate360 transition' alt='Callihan Herrmann profile photo'/>
          </aside>
      </section>
        <div className='px-10 pb-52 pt-0 md:px-20 md:pt-0 w-full flex flex-col flex-wrap'>
          <div className='lg:px-10'>
            <p className="text-xl invisible xl:visible leading-relaxed indent-10">Transitioning from environmental studies to software development was a pivotal step in aligning my profession with my passion for meaningful impact. At Turing, I honed my technical skills and collaborated on projects that tackled real-world challenges, preparing me to contribute innovative solutions in the tech industry. I am eager to bring my blend of environmental awareness, commitment to societal impact, and technical acumen to a collaborative and innovative team, where I can make a significant difference.</p>
          </div>
        </div>
    </article>
  )
}

export default AboutMe