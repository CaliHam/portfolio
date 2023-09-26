import email from './assets/email.png'
import phone from './assets/phone-call.png'
import resume from './assets/resume.png'

const ContactMe = () => {
  return (
    <div className="bg-amber-50 flex">
      <aside className="bg-pink-500 order-1 p-20 w-1/3">
        <img src="" alt="Calli Profile Photo"/>
      </aside>
      <section className="order-2 p-20">
        <h1 className="text-6xl font-title text-pink-500 font-bold">Let's connect!</h1>
        <div className="font-body">
          <div className="flex">
            <img src={resume} alt="resume icon"/><p>RESUME</p>
          </div>
          <div className="flex ">
            <img src={email} alt="email icon"/><div><p>EMAIL</p><p>callihanh.dev@gmail.com</p></div>
          </div>
          <div className="flex">
            <img src={phone} alt="phone icon"/><div><p>PHONE</p><p>336-327-3502</p></div>
          </div>
        </div>
        <footer>
          <div className="flex pt-60">
            <img src="" alt="linkedin logo" />
            <img src="" alt="github logo" />
          </div>
        </footer>
      </section>
    </div>
  )
}

export default ContactMe