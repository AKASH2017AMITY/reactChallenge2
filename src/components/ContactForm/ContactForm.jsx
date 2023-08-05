import React from 'react'
import styles from "./Contactform.module.css"
// import Button from '../Button/Button'



function ContactForm() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.contactForm}>

        
        </div>
        <div className={styles.contactImage}>
          <img id={styles.mainImage} src="/images/mainImage.jpg" alt="MainImage" />
        </div>
      </section>

    </>
  )
}

export default ContactForm