import React, {useContext, useState} from 'react'
import { useTranslation } from 'react-i18next'
import {GlobalState} from '../../../GlobalState'
import Icons from '../mainPage/icons'
import Alert from './Alert'

import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';

init("user_E0PjxNuAo7oDQbNzceM0b");

export default function ContactUs() {
    const [data, setData] = useState(false)

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_m56mfbm', 'template_3khrmbx', e.target, 'user_HK8d5Kk5nfpjKhHsMc7SU')
      .then(() => {
          setData('Send you message')
      }, (error) => {
          setData(error.text)
      });
      e.target.reset()
  }

    const state = useContext(GlobalState)
    const {t} = useTranslation();
    const [colors] = state.postAPI.colors

    const button ={
        background: colors ? "#1ABC9C" : "gold"
    }
    
    const bagckroungs ={
        background: colors ? "#fff" : "#222121",
        color: colors ? "black" : "white"
    }
    const bagckrounds ={
        background: colors ? "#fff" : "#151515",
        color: colors ? "black" : "white"
    }

    const title = "New Message"


  return (
      <div className="ordered_req" style={bagckrounds}>
          <Alert data={data} colors={colors} />
          <Icons />
          
          <div className="order_form_input" style={bagckroungs}>
          <div className="title_ordered">
            <h3>
            {t('connect.title')}
            </h3>
          </div>
            <form className="contact-form" onSubmit={sendEmail}>
                
                <div className="row">
                    <input type="hidden" name="subject" value={title} style={bagckrounds} />
                </div>
                
                <div className="row">
                    <label>{t('connect.1')}</label>
                    <input type="text" name="name" style={bagckrounds} required />
                </div>
                <div className="row">
                    <label>{t('connect.2')}</label>
                    <input type="tel" name="number" style={bagckrounds} required />
                </div>
                <button type="submit" style={button} >Send</button>
            </form>
          </div>
        
      </div>
    
  );
}