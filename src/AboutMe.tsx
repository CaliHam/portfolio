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
            <p className="text-xl leading-relaxed indent-10">As a passionate front-end developer with experience in the startup environment, I bring a blend of technical expertise, collaborative spirit, and a strong foundation in customer-focused problem-solving. My journey began at the Turing School of Software and Design, where I transitioned from an academic background in Environmental Studies at UNC Greensboro to pursue my passion for software development. This shift reflects my drive to create meaningful impact through technology, combining my love for accessibility, innovation, and societal change.</p>
          </div>
        </div>
          <aside className='min-w-64 shrink-0 py-10 lg:pb-5'>
            <img src={profilePhoto} className='rounded-full object-cover shrink-0 hover:animate-rotate360 transition' alt='Callihan Herrmann profile photo'/>
          </aside>
      </section>
        <div className='px-10 pb-64 pt-0 md:px-20 md:pt-0 w-full flex flex-col flex-wrap'>
          <div className='lg:px-10 mb-5'>
            <p className="text-xl invisible xl:visible leading-relaxed indent-10">Most recently, I served as an Associate Frontend Developer at Astral Insights, LLC, where I led the front-end development for a complex application that integrated with multiple APIs to enrich lead data. Through technologies like React Native, TypeScript, and REST APIs, I ensured seamless user experiences while delivering clean, scalable code that improved the application’s stability and performance. My involvement in Scrum-driven projects further sharpened my ability to work efficiently within fast-paced, collaborative environments.</p>
          </div>
          <div className='lg:px-10'>
            <p className="text-xl invisible xl:visible leading-relaxed indent-10">With a unique combination of environmental awareness and a commitment to accessibility, I am eager to continue crafting user-centered solutions that contribute to a more inclusive and sustainable world.</p>
          </div>
        </div>
    </article>
  )
}

export default AboutMe