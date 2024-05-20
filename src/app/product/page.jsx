"use client"
import CarCard from '../../components/CarCard'
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper'; 
import { useSearchParams } from 'next/navigation'
import { fetchTemp4, fetchTemp1 } from '../../utils/index'
import { useCart } from '../context/CartContext';
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";




const Page = () => {
  const [translateXValue, setTranslateXValue] = useState(0); 
  const [allTemp1, setTemp1] = useState()
  const [allTemp2, setTemp2] = useState() 
  let b
  let b2
  const searchParams = useSearchParams()
  const search = searchParams.get('id')
  let imgs, title, price, desc, cat, id
  const { cart, addToCart } = useCart();

 










  const a = async () => {
    b = await fetchTemp4(search)
    setTemp1(b)

  }
  useEffect(() => {
    a()
  }, [])

  if (allTemp1) {
    id = allTemp1.id
    imgs = allTemp1.img
    cat = allTemp1.category
    title = allTemp1.title
    price = allTemp1.price
    desc = allTemp1.description
  }



  const a2 = async () => {
    b2 = await fetchTemp1(cat)
    setTemp2(b2)
  }
  useEffect(() => {
    a2()
  }, [cat])










  const fetchPrice = async () => {
    const response = await fetchTemp4(search);
    setTemp1(response);
  };

  useEffect(() => {
    fetchPrice();
  }, []);

  

  const sv = -8.3333333;

  const handleClick = (idx) => {
    setTranslateXValue(idx * sv);
  };








  console.log(cart);


  const isInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };




  return (
    <>
      <div className="sm:pb-20">
        <Menu />
        <link href="https://assets.bellroy.com" rel="preconnect" />
        <link href="https://bellroy.imgix.net" rel="preconnect" />


 


        <link
          href="css/webfonts-3e3c2400.css"
          rel="preload"
          as="style"
        />
        <link
          rel="stylesheet"
          href="css/webfonts-3e3c2400.css"
          media="print"
        />
        <link
          rel="stylesheet"
          href="css/style-4109db2b.css"
        />

        <link href="https://fonts.cdnfonts.com/css/lato" rel="stylesheet" />
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n\n.uploadcare--widget__button, .uploadcare--widget__button:hover {\n\tpadding: 10px;\n\tbackground-color: #d7d7d7; \n  color: #212529;\n  width:100%;\n}\n\n.uploadcare--widget__button:hover {\n\tbackground-color: #c1c1c1;\n  \n}\n\n\n"
          }}
        />




        <div className="ProductDetailWrapper">
          <div className="BreadcrumbsWrapper">
            <div className="br_flex br_px-6 xl:br_px-0 br_text-xs-sans-bold-stretched br_text-[12px] br_text-grey-400 br_h-12 br_items-center">

            </div>
          </div>
          <bellroy-product-detail
            data-filter-dimensions-style="WSSB,WSSB-CHA-213,WSSD-MIB-124,WSSB-BSH-102"
            data-default-sku="WSSB-BLACK"
            style={{}}
            data-updated-url="null"
          >
            <div className="ProductDetail">
              <div className="Layout br_contents">
                <unsafe-html style={{ display: "none" }} />
                <events-enabled data-events="custom.product.view" />
                <div className="Layout_TwoColumns br_edition-">
                  <section style={{ position: "relative" }}>
                    <span className="ProvidersIfSelectedProductMatchesFilter">
                      <div className="HtmlProductGallery">
                        <div className="HtmlProductGallery_GalleryWrapper">
                          <div
                            className="HtmlProductInfiniteGallery"
                            id="InfiniteGallery0"
                            style={{ width: "auto", height: "100%" }}
                          >
                            <style
                              type="text/css"
                              dangerouslySetInnerHTML={{
                                __html:
                                  "#InfiniteGallery0 .HtmlProductInfiniteGallery { }#InfiniteGallery0 .HtmlProductInfiniteGallery__Wrapper { position:relative;overflow:hidden;width:100%;height:100%}#InfiniteGallery0 .HtmlProductInfiniteGallery__Slides { position:absolute;top:0;width:1200%;height:100%;display:grid;grid-template-columns:repeat(12, 1fr);transition:transform 300ms ease;cursor:grab}#InfiniteGallery0 .HtmlProductInfiniteGallery__Slides--dragging { transition:none}#InfiniteGallery0 .HtmlProductInfiniteGallery__Slides_Slide { max-width:100%;max-height:100%;overflow:hidden;position:relative;user-drag:none;user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none}"
                              }}
                            />
                            <div className="HtmlProductInfiniteGallery__Wrapper">
                              <div
                                className="HtmlProductInfiniteGallery__Slides "
                                style={{ transform: `translateX(${translateXValue}%)` }}
                              >

                                {imgs && imgs?.length > 0 ? (

                                  imgs.map((item) => (
                                    <div key={item.id}>
                                      <div className="HtmlProductInfiniteGallery__Slides_Slide">
                                        <div className="Slide Slide--image">
                                          <img
                                            src={item}
                                            style={{ maxWidth: "100%", height: "auto" }}
                                          />
                                        </div>
                                      </div>

                                    </div>



                                  ))
                                ) : (

                                  <div className='container'>
                                    <h2 className='text-black text-xl dont-bold'>...</h2>

                                  </div>

                                )

                                }



                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="HtmlProductGallery_Thumbnails">

                          {imgs && imgs?.length > 0 ? (
                            imgs.map((item, idx) => (
                              <button key={idx} onClick={() => handleClick(idx)} className="Thumbnail Thumbnail--image">
                                <img
                                  src={item}
                                />
                              </button>
                            ))
                          ) : (

                            <div className='container'>
                              <h2 className='text-black text-xl dont-bold'>...</h2>

                            </div>

                          )

                          }
                        </div>
                      </div>
                    </span>
                  </section>
                  <section className="ProductSelector">
                    <span className="ProvidersSingleProduct--selected">
                      <h1>
                        {title}
                        <span
                          className="ProductSelector_EditionLabel"
                          style={{ margin: "0 0 0 3px" }}
                        />
                      </h1>
                    </span>
                    <div className="ApexPriceAndFreeShippingWrapper">
                      <span className="ProvidersSingleProduct--selected">
                        <div className="br_flex">
                          <span className="price">
                            <span className="price_value">${price}</span>
                          </span>
                        </div>
                      </span>
                      <div>
                        <div className="FreeShippingMessage FreeShippingMessage--empty" />
                      </div>
                    </div>
                    <hr />
                    <div className="ProductSelector_IntroBlurb">
                      <span className="ProvidersIfSelectedProductMatchesFilter">
                        <p>
                          {desc}
                        </p><br />
                      </span>
                    </div>

                    <div className="bagsFeaturesGrid__gridWrapper">

                      {isInCart(id) ? (
                        <center><h2 style={{ color: "green" }}>Added to the cart!</h2></center>
                      ) : (
                        <div className="">
                          <div className=""></div>
                          <div className="">
                            <span className="ProvidersSingleProduct--selected">
                              <button type="button" className="AddToCart HtmlProductAddToCart" style={{ borderRadius: "0" }} onClick={() => addToCart(allTemp1)} >
                                <span>Add To Cart</span>
                              </button>
                            </span>
                          </div>
                          <div className=""></div>
                        </div>

                      )}


                      <br />

                    </div>
 

                    <span className="ProvidersIfSelectedProductMatchesFilter">

                    </span>

                  </section>
                </div>
                <span className="ProvidersIfSelectedProductMatchesFilter">
                  <content-block slug="product-page-wssb">
                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          ".bagsFeaturesGrid{margin:0 auto;padding:30px 5%;background:#111622}.bagsFeaturesGrid__gridWrapper{max-width:1150px;margin:0 auto}.bagsFeaturesGrid__title{-webkit-font-smoothing:antialiased;text-align:center;padding:0 0 25px;margin:0 auto;color:#fff}.bagsFeaturesGrid__feature{background:inherit;display:grid;grid-template-s:auto;align-items:center;padding:5px 0}.bagsFeaturesGrid__feature--text{-webkit-font-smoothing:antialiased;text-align:center;padding:15px 0 20px;grid-:2}.bagsFeaturesGrid__feature--text a{color:inherit}.bagsFeaturesGrid__feature--text h3{color:#fff;padding-bottom:10px}.bagsFeaturesGrid__feature--text p{color:#eee}.bagsFeaturesGrid__feature--image{position:relative;width:100%;min-height:62vw}@media (min-width: 811px){.bagsFeaturesGrid__feature--image{min-height:28vw}}@media (min-width: 1460px){.bagsFeaturesGrid__feature--image{min-height:409px}}.bagsFeaturesGrid__feature--image img{width:100%;display:block}.bagsFeaturesGrid__feature--image--logo{position:absolute;bottom:3.5%;right:8%;width:15vw}.bagsFeaturesGrid__feature--image--logo img{width:100%}.bagsFeaturesGrid__feature--text--logo{width:100px;padding-top:30px}.bagsFeaturesGrid__feature--text--logo img{width:100%}@media (min-width: 811px){.bagsFeaturesGrid{padding:75px 10%}.bagsFeaturesGrid__title{padding:0 0 60px}.bagsFeaturesGrid__feature{display:grid;grid-template-columns:1fr 1fr;grid-template-s:auto;padding:30px 0}.bagsFeaturesGrid__feature--image--logo{width:7vw}.bagsFeaturesGrid__feature .left{padding-right:15%}.bagsFeaturesGrid__feature .right{padding-left:15%}.bagsFeaturesGrid__feature--text{-webkit-font-smoothing:antialiased;text-align:left;padding:0;grid-:auto}}\n"
                      }}
                    /> 

                    <style
                      dangerouslySetInnerHTML={{
                        __html:
                          ".ProductTile-SliderContainer--YMAL .ProductTile-SliderContainer-Title{height:auto;text-align:center;padding-bottom:10px}.ProductTile-SliderContainer--YMAL.ProductTile-SliderContainer{padding:40px 0 10px;background-color:#e9e9e9 ;display:flex;flex-direction:column;align-items:center}.ProductTile-SliderContainer--YMAL .ProductTile-Slider-prev-ar,.ProductTile-SliderContainer--YMAL .ProductTile-Slider-next-ar{height:25px;width:25px;border-top:2px solid #999;border-right:2px solid #999}.ProductTile-SliderContainer--YMAL .ProductTile-Slider-next-ar{transform:rotate(45deg);margin:0 15px 0 0}.ProductTile-SliderContainer--YMAL .ProductTile-Slider-prev-ar{transform:rotate(225deg);margin:0 0 0 15px}.ProductTile-SliderContainer--YMAL .ProductTile-Slider-prev,.ProductTile-SliderContainer--YMAL .ProductTile-Slider-next{height:430px;width:80px;cursor:pointer;background-color:transparent;transition:opacity .3s ease;display:none;border:none;padding:0;appearance:none;-webkit-appearance:none}.ProductTile-SliderContainer--YMAL .ProductTile-Slider-prev[disabled],.ProductTile-SliderContainer--YMAL .ProductTile-Slider-next[disabled]{opacity:0;pointer-events:none}@media (min-width: 700px){.ProductTile-SliderContainer--YMAL .ProductTile-Slider-prev,.ProductTile-SliderContainer--YMAL .ProductTile-Slider-next{display:flex;align-items:center;justify-content:center}}@media (min-width: 811px){.ProductTile-SliderContainer--YMAL .ProductTile-SliderContainer-Title{padding-bottom:30px}}.ProductTile-SliderContainer--YMAL .productRangeSlider{display:flex;align-items:center;max-width:1340px;width:100%;padding:5px;justify-content:space-between;margin:0 auto;min-height:145px}\n"
                      }}
                    />
                    <div
                      className="ProductTile-SliderContainer ProductTile-SliderContainer--YMAL"
                      data-product-list-category="ymal-slider"
                    >
                      <div className="ProductTile-SliderContainer-Title br_text-3xl-serif br_text-[#333]">
                        You might also like:
                      </div>












                      {allTemp2 && allTemp2?.length > 0 ? (
                        <section style={{ maxWidth: "100%" }}>

                          <Swiper
                            spaceBetween={50}
                            loop
                            modules={[Autoplay]}
                            autoplay={{
                              delay: 2000,
                              stopOnLastSlide: false,
                              reverseDirection: true
                            }}

                            breakpoints={{
                              150: {
                                slidesPerView: 1,
                              },
                              768: {
                                slidesPerView: 4,
                              },
                            }}
                          >
                            <div className='home__cars-wrapper'>
                              {allTemp2.map((temp) => (

                                <SwiperSlide key={temp.id}><CarCard temp={temp} /></SwiperSlide>

                              ))}
                            </div>
                          </Swiper>


                        </section>
                      ) : (
                        <div className='home___error-container'>
                          <h2 className='text-black text-xl dont-bold'>...</h2>

                        </div>
                      )

                      } 





                    </div>
                  </content-block>
                </span>
              </div>
            </div>
          </bellroy-product-detail>
        </div>

        <Footer />
      </div>


      <style
  dangerouslySetInnerHTML={{
    __html:
      "\n  @media only screen and (max-width: 600px) {\n#mylogo123 { \n  width:15em !important;\n}\n}\n"
  }}
/>





    </>

  )
}

export default Page