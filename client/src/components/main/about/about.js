import React, { useContext } from 'react'
import AboutImg from './img/200296600955_169023.jpg'
import { GlobalState } from '../../../GlobalState'


function About({ bagckroungs, imgStyles }) {

    const state = useContext(GlobalState)
    const [language] = state.postAPI.language

    return (
        <div className="about_blogs" style={bagckroungs}>
            <div className="heading">
                <h2 style={bagckroungs}>
                    {language ? 'About' : 'О НАС'}
                </h2>
            </div>
            <div className="about_infos">
                <div className="content_about">
                    <h4 style={{ marginBottom: '15px' }}>
                        {language ? 'Our history ' : 'Наша история'}
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', marginBottom: '5px' }}>
                        <p>
                            {language ? 'The company started with 2 people - founder and programmer' : 'Компания началась с 2 человек - основатель и программист'
                            }
                        </p>
                    </div>
                    <p style={{ marginBottom: '5px' }}>
                        {
                            language ?
                                'We rented a room, renovated it and started work. Soon things went uphill because of word of mouth. With each completed project and a satisfied client, our team expanded.'
                                :
                                'Арендовали помещение, отремонтировалии и начали работу. Вскоре дела пошли в гору из-за сарафанного радио. С каждым завершённым проектом и довольным клиентом наша команда расширялась.'
                        }
                    </p>
                    <p style={{ marginBottom: '5px' }}>
                        {language ?
                            'Now there are 15 of us: programmers, developers, web designers, managers and many others.'
                            :
                            'Сейчас нас стало уже 15 человек: программисты, разработчики, веб дизайнеры, менеджеры и многие другие.'
                        }
                    </p>
                    <p style={{ marginBottom: '10px' }}>
                        {language ?
                            'On May 24, 2021, we celebrated our third anniversary in our new and modern office.'
                            :
                            '24 мая 2021 года мы отпраздновали наше трёхлетие в нашем новом и современном офисе. '
                        }
                    </p>
                    <p style={{ marginBottom: '10px' }}>
                        {language ?
                            'We are interested in providing you with'
                            :
                            'Мы заинтересованы в том, чтобы предоставить Вам'
                        }
                    </p>
                    <p style={{ marginBottom: '5px' }}>
                        {language ?
                            '• dizzying results'
                            :
                            '• головокружительные результаты'
                        }
                    </p>
                    <p style={{ marginBottom: '5px' }}>
                        {language ?
                            '• as soon as possible and'
                            :
                            '• в кратчайшие сроки и'
                        }
                    </p>
                    <p style={{ marginBottom: '5px' }}>
                        {language ?
                            '• for reasonable prices'
                            :
                            '• за разумные цены'
                        }
                    </p>
                </div>
                <div className="about_img" style={imgStyles}>
                    <img src={AboutImg} alt="" style={{ width: '100%', objectFit: 'cover', }} />
                </div>
            </div>
        </div>
    )
}

export default About
