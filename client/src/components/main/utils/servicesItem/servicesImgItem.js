import React from 'react'
import BtnReander from './BtnReander'


function CategoryItem({category, bagckroungBox, button, deleteProduct, language}) {
   
    let styles = false

    styles = !styles
    return (
        <>
            {
                styles ? <div className="cart_services" style={bagckroungBox} >
                            <div className="services_img">
                                <img src={category.media.url} alt="" />
                            </div>
                            <div className="services_box">
                                <h2>{language ? `${category.titleEng}` : `${category.title}`}</h2>
                                <p>
                                    {
                                    language ? `${category.contentEn}` : `${category.contentRu}`
                                    }
                                </p>
                                <div className="icon_info">
                                    <div className="icon_cart" style={button}>
                                        <img src={category.type1.url} alt="" />
                                        <h2>
                                            {
                                                category.services1
                                            }
                                        </h2>
                                    </div>
                                    <div className="icon_cart" style={button}>
                                        <img src={category.type2.url} alt="" />
                                        <h2>
                                            {
                                                category.services2
                                            }
                                        </h2>
                                    </div>
                                    <div className="icon_cart" style={button}>
                                        <img src={category.type3.url} alt="" />
                                        <h2>
                                            {
                                                category.services3
                                            }
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
            
                       : <div className="cart_services" style={bagckroungBox}>
                            <div className="services_box">
                                <h2>{language ? `${category.titleEng}` : `${category.title}`}</h2>
                                <p>
                                    {
                                    language ? `${category.contentEn}` : `${category.contentRu}`
                                    }
                                </p>
                                <div className="icon_info">
                                    <div className="icon_cart" style={button}>
                                        <img src={category.type1.url} alt="" />
                                        <h2>
                                            {
                                                category.services1
                                            }
                                        </h2>
                                    </div>
                                    <div className="icon_cart" style={button}>
                                        <img src={category.type2.url} alt="" />
                                        <h2>
                                            {
                                                category.services2
                                            }
                                        </h2>
                                    </div>
                                    <div className="icon_cart" style={button}>
                                        <img src={category.type3.url} alt="" />
                                        <h2>
                                            {
                                                category.services3
                                            }
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="services_img">
                                <img src={category.media.url} alt="" />
                            </div>
                        </div>
            }
            <BtnReander deleteProduct={deleteProduct} product={category} />
        </>
        
    )
}

export default CategoryItem