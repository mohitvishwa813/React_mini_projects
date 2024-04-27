import React from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdMail } from "react-icons/md";

export default function ContactForm () {
  return (
    <section className="container1">
      <div className={styles.new_container}>
  <div className={`${styles.contact_form}`}>
    <div className={`${styles.top_btn}`}>
      <Button text="VIA Support CHAT" icon={<MdMessage fontSize="24px" />} />
      <Button text="VIA Call" icon={<IoMdCall fontSize="24px" />} />
    </div>
    <Button isOutline={true} text="VIA Email Form" icon={<MdMail fontSize="24px" />} />

    <form>
      <div className={styles.form_control}>
        <label htmlFor="name">name</label>
        <input type="text" name="name" />
      </div>
      <div className={styles.form_control}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
      </div>
      <div className={styles.form_control}>
        <label htmlFor="text">Address</label>
        <textarea name="text" rows={8} />
      </div>
      <div className="submit_btn">
        <Button text="Submit" />
      </div>
    </form>
  </div>
  <div className={`${styles.contact_image}`}>
    <img src="https://raw.githubusercontent.com/anshuopinion/React-10-Projects/f3baadbbaca5c4dab15b4a811e8649d1f9f79473/project-2/public/images/contact.svg" alt="#" />
  </div>
</div>
    </section>
  );
}
