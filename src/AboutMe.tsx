import profilePhoto from './assets/profile-photo.png'

const AboutMe = () => {
  return (
    <div className="bg-pink-500 font-body text-amber-50 h-1/2 flex">
      <section className='order-1 p-20 w-2/3'>
        <h1 className="text-6xl font-title pb-10">
          Heyo, <span className='text-blue-700 font-bold'>Calli</span> here!
        </h1>
        <p className="text-xl">I am a software developer with an Environmental Studies background from UNC Greensboro. My career transition from environmental studies to software development was driven by my passion for problem-solving and creating positive change. Currently pursuing a degree from the Turing School of Software and Design, I find fulfillment in crafting seamless solutions that address real-world needs. Alongside my professional journey, I have expanded my communication skills through a minor in American Sign Language and am committed to inclusivity in tech solutions. While I enjoy video games in my free time, my true professional aspiration is to leverage technology for meaningful impact. I seek opportunities in collaborative, goal-oriented environments where I can contribute my problem-solving skills and technical expertise to make a positive difference in the community.</p>
      </section>
      <aside className='order-2 p-20'>
        <img src={profilePhoto} className='rounded-full object-cover' alt='Callihan Herrmann profile photo'/>
      </aside>
    </div>
  )
}

export default AboutMe