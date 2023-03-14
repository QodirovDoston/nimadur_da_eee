import React from 'react'
import Slider from 'infinite-react-carousel';
function ProductItem({product, bagckroungBox, button, language}) {

    const style1 = {
        display:  product.media ? "inline-block" : "none"
    }
    const style2 = {
        display:  product.type1 ? "inline-block" : "none"
    }
    const style3 = {
        display:  product.type2 ? "inline-block" : "none"
    }
    const style4 = {
        display:  product.type3 ? "inline-block" : "none"
    }
    return (
        <>
        <a href={`${product.links}`}>
            <div className="portfolio_cart">
                <div className="portfolio_img" style={button}>
                    <Slider autoplay="true" >
                        <div className="carousel_cart" style={style1} >
                            <img src={product.media.url} alt="" />
                        </div>
                        <div className="carousel_cart" style={style2} >
                            <img src={product.type1.url} alt="" />
                        </div>
                        <div className="carousel_cart" style={style3} >
                            <img src={product.type2.url} alt="" />
                        </div>
                        <div className="carousel_cart" style={style4} >
                            <img src={product.type3.url} alt="" />
                        </div>
                    </Slider>
                </div>
                <div className="portfolio_infos" style={bagckroungBox}>
                    <h2 title={product.title}>{product.title}</h2>
                    <p>{language ? product.descriptionEn : product.descriptionRu}</p>
                </div>
            </div>        
        </a>
        </>
        
    )
}

export default ProductItem
