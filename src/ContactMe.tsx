import email from './assets/email.png'
import phone from './assets/phone-call.png'
import resume from './assets/curriculum.png'
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'
import resumePDF from './assets/Herrmann_Callihan_Resume.pdf'
import githubPhoto from './assets/github-photo.png'

const ContactMe = () => {
  return (
    <div id='connect' className="bg-amber-50 flex flex-wrap lg:flex-nowrap items-center">
      <aside className="bg-pink-500 order-1 p-20 w-full object-center shrink-0 lg:w-1/3 lg:h-screen">
        <img src={githubPhoto} className='rounded w-80 h-auto object-center shrink-0' alt="Calli Profile Photo"/>
      </aside>
      <section className="order-2 p-10 pl-20 lg:p-20 lg:pl-40">
        <h1 className="text-6xl font-title text-pink-500 font-bold">Let's connect!</h1>
        <div className="font-body flex flex-col h-72 justify-between pt-20">
          <div className="flex items-center">
            <a href={resumePDF} target="_blank"><img src={resume} alt="resume icon"/></a><p className='pl-3 text-violet-950'>RESUME</p>
          </div>
          <div className="flex items-center">
            <img src={email} className='object-none' alt="email icon"/><div className='pl-3 text-violet-950'><p>EMAIL</p><p>callihanh.dev@gmail.com</p></div>
          </div>
          <div className="flex items-center">
            <img src={phone} className='object-none' alt="phone icon"/><div className='pl-3 text-violet-950'><p>PHONE</p><p>336-327-3502</p></div>
          </div>
        </div>
        <footer>
          <div className="flex pt-32 lg:pt-60 w-full justify-around">
            <a href='https://www.linkedin.com/in/callihan-herrmann/' target="_blank"><img src={linkedin} alt="linkedin logo" /></a>
            <a href='https://github.com/CaliHam/' target="_blank"><img src={github} alt="github logo" /></a>
          </div>
        </footer>
      </section>
    </div>
  )
}

export default ContactMe