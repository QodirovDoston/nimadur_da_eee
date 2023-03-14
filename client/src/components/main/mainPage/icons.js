import React, { useState } from 'react'
import Share from './img/icons/share-alt-solid.svg'
import Phone from './img/icons/phone-alt-solid.svg'
import Telegram from './img/icons/telegram-plane-brands.svg'
import Facebook from './img/icons/facebook-brands.svg'
import Instagram from './img/icons/instagram-brands.svg'
import Mail from './img/icons/envelope-regular.svg'

function Icons() {
    const [links, setLinks] = useState(false)
    const styles = {
        bottom: links ?  '0' : '-382%',
        right: links ?  '0' : '-300%',
    }
    
    return (
        <div className="main_area">
            <div className="glavni_links">
                <div>
                    <div className="glavni_icon" onClick={() => setLinks(!links)}>
                        <p className='message_number'>2</p>
                        <img src={Share} alt="" />
                        <p>
                            Hello
                        </p>
                    </div>
                    <div className="configs" style={styles}>
                        <div className="config_icon">
                            <a href="ordered">
                                <img src={Mail} alt=""  />
                            </a>
                        </div>
                        <div className="config_icon">
                            <a  href="tel:+998998107090">
                                <img src={Phone} alt=""  />
                            </a>
                        </div>
                        <div className="config_icon">
                            <a href="https://www.facebook.com/Supersiteuz/">
                                <img src={Facebook} alt=""  />
                            </a>
                        </div>
                        <div className="config_icon">
                            <a href="https://www.t.me/supersite_uz">
                                <img src={Telegram} alt=""  />
                            </a>
                        </div>
                        <div className="config_icon">
                            <a href="https://instagram.com/supersite.uz?utm_medium=copy_link">
                                <img src={Instagram} alt=""  />
                            </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Icons
