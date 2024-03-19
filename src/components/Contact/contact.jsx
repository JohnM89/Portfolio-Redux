import { useEffect, useState, useRef } from 'react'
import Loader from 'react-loaders'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters/animatedletters'
import './Contact.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [theme, setTheme] = useState('light'); // Theme state
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('your_service_id', 'template_YeJhZkgb', form.current, 'your_token')
      .then(
        (result) => {
          console.log(result.text)
          
        },
        (error) => {
          console.log(error.text)
          
        }
      )
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`container contact-page ${theme}`}>
      <div className="text-zone">
        {/* <button onClick={toggleTheme} className="theme-toggle-button">Toggle Theme</button> */}
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          I am on the lookout for freelance opportunities - big or small. If you have any questions, don't you hesitate, reach out! Contact me using the form below.
        </p>
        <div className="contact-form">
          <form ref={form} onSubmit={sendEmail}>
            <ul>
              <li className="half">
                <input placeholder="Name" type="text" name="name" required />
              </li>
              <li className="half">
                <input placeholder="Email" type="email" name="email" required />
              </li>
              <li>
                <input placeholder="Subject" type="text" name="subject" required />
              </li>
              <li>
                <textarea placeholder="Message" name="message" required></textarea>
              </li>
              <li>
                <input type="submit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className="info">
        John MacNeil,
        <br />
        Canada,
        <br />
        Toronto <br />
        <span>mjammer2@gmail.com</span>
      </div>
      <Loader type="pacman" />
    </div>
  )
}

export default Contact
