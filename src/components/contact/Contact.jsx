/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react"
import "./contact.scss"
import { motion, useInView } from "framer-motion"
import emailjs from '@emailjs/browser'

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    }
  }
}

const Contact = () => {

  const ref = React.useRef()
  const formRef = React.useRef()
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const isInView = useInView(ref, {margin: "-100px"})

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mdw5cgp', 'template_oqkq8fn', formRef.current, 'bQ05P_zPRy2UpIeA7')
      .then((result) => {
          setSuccess(true)
      }, (error) => {
          setError(true)
      });
  };

  return (
    <motion.div ref={ref} className="contact" variants={variants} initial="initial" whileInView="animate">

      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's Work <motion.span whileHover={{color:"#00ff00"}}>Together</motion.span>!</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>OPDhaker2007@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+91 9301161940</span>
        </motion.div>
      </motion.div>

      <div className="formContainer">
        <motion.div
          className="phoneSvg"
          initial={{
            opacity: 1,
          }}
          whileInView={{
            opacity: 0,
          }}
          transition={{
            delay: 3,
            duration: 1,
          }}
        >
          <svg width="450px" height="450px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              stroke-width={0.2}
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              initial={{pathLength: 0}}
              animate={isInView && {pathLength: 1}}
              transition={{duration: 6}}
              d="M21 10H14.6C14.0399 10 13.7599 10 13.546 9.89101C13.3578 9.79513 13.2049 9.64215 13.109 9.45399C13 9.24008 13 8.96005 13 8.4V5M10 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.07989 21 8.2V17.8C21 18.9201 21 19.4802 20.782 19.908C20.5903 20.2843 20.2843 20.5903 19.908 20.782C19.4802 21 18.9201 21 17.8 21H6.2C5.07989 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V8.2C3 7.07989 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.49359 5.01338 5.01165 5.00082 6 5.00005M10 5V4.6C10 4.03995 10 3.75992 9.89101 3.54601C9.79513 3.35785 9.64215 3.20487 9.45399 3.10899C9.24008 3 8.96005 3 8.4 3H7.6C7.03995 3 6.75992 3 6.54601 3.10899C6.35785 3.20487 6.20487 3.35785 6.10899 3.54601C6 3.75992 6 4.03995 6 4.6V5.00005M10 5V15.4C10 15.9601 10 16.2401 9.89101 16.454C9.79513 16.6422 9.64215 16.7951 9.45399 16.891C9.24008 17 8.96005 17 8.4 17H7.6C7.03995 17 6.75992 17 6.54601 16.891C6.35785 16.7951 6.20487 16.6422 6.10899 16.454C6 16.2401 6 15.9601 6 15.4V5.00005M14 14H14.01V13.99H14V14ZM14 17H14.01V17.01H14V17ZM17 17H17.01V17.01H17V17ZM17 14H17.01V14.01H17V14Z"
            />
          </svg>
        </motion.div>
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{delay: 4, duration: 1}}
        >
          <input type="text" required placeholder="Name" name="from_name" />
          <input type="email" required placeholder="Email" name="from_email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button>Submit</button>
          {error && "Error Code: 999"}
          {success && "Success! I'll get back to you soon."}
        </motion.form>
      </div>

    </motion.div>
  )
}

export default Contact