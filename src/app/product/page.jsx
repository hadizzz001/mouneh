// app/page.js
"use client";
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
  const [allTemp1, setTemp1] = useState();
  const [allTemp2, setTemp2] = useState();
  const [quantity, setQuantity] = useState(1);  // Add quantity state
  const searchParams = useSearchParams();
  const search = searchParams.get('id');
  const { cart, addToCart } = useCart();

  useEffect(() => {
    const fetchData = async () => {
      const temp1Data = await fetchTemp4(search);
      setTemp1(temp1Data);
    };
    fetchData();
  }, [search]);

  useEffect(() => {
    if (allTemp1?.category) {
      const fetchCategoryData = async () => {
        const temp2Data = await fetchTemp1(allTemp1.category);
        setTemp2(temp2Data);
      };
      fetchCategoryData();
    }
  }, [allTemp1]);

  const handleClick = (idx) => {
    setTranslateXValue(idx * -8.3333333);
  };

  const isInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  const id = allTemp1?.id;
  const imgs = allTemp1?.img;
  const title = allTemp1?.title;
  const price = allTemp1?.price;
  const desc = allTemp1?.description;

  return (
    <>
      <div className="sm:pb-20">
        <Menu />
        <link href="https://assets.bellroy.com" rel="preconnect" />
        <link href="https://bellroy.imgix.net" rel="preconnect" />
        <link href="css/webfonts-3e3c2400.css" rel="preload" as="style" />
        <link rel="stylesheet" href="css/webfonts-3e3c2400.css" media="print" />
        <link rel="stylesheet" href="css/style-4109db2b.css" />
        <link href="https://fonts.cdnfonts.com/css/lato" rel="stylesheet" />

        <div className="ProductDetailWrapper">
          <div className="BreadcrumbsWrapper">
            <div className="br_flex br_px-6 xl:br_px-0 br_text-xs-sans-bold-stretched br_text-[12px] br_text-grey-400 br_h-12 br_items-center">
            </div>
          </div>
          <bellroy-product-detail data-filter-dimensions-style="WSSB,WSSB-CHA-213,WSSD-MIB-124,WSSB-BSH-102" data-default-sku="WSSB-BLACK" style={{}} data-updated-url="null">
            <div className="ProductDetail">
              <div className="Layout br_contents">
                <div className="Layout_TwoColumns br_edition-">
                  <section style={{ position: "relative" }}>
                    <span className="ProvidersIfSelectedProductMatchesFilter">
                      <div className="HtmlProductGallery">
                        <div className="HtmlProductGallery_GalleryWrapper">
                          <div className="HtmlProductInfiniteGallery" id="InfiniteGallery0" style={{ width: "auto", height: "100%" }}>
                            <div className="HtmlProductInfiniteGallery__Wrapper">
                              <div className="HtmlProductInfiniteGallery__Slides" style={{ transform: `translateX(${translateXValue}%)` }}>
                                {imgs?.length > 0 ? imgs.map((item, idx) => (
                                  <div key={idx} className="HtmlProductInfiniteGallery__Slides_Slide">
                                    <div className="Slide Slide--image">
                                      <img src={item} style={{ maxWidth: "100%", height: "auto" }} />
                                    </div>
                                  </div>
                                )) : (
                                  <div className='container'>
                                    <h2 className='text-black text-xl dont-bold'>...</h2>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="HtmlProductGallery_Thumbnails">
                          {imgs?.length > 0 ? imgs.map((item, idx) => (
                            <button key={idx} onClick={() => handleClick(idx)} className="Thumbnail Thumbnail--image">
                              <img src={item} />
                            </button>
                          )) : (
                            <div className='container'>
                              <h2 className='text-black text-xl dont-bold'>...</h2>
                            </div>
                          )}
                        </div>
                      </div>
                    </span>
                  </section>
                  <section className="ProductSelector">
                    <span className="ProvidersSingleProduct--selected">
                      <h1>{title}</h1>
                    </span>
                    <div className="ApexPriceAndFreeShippingWrapper">
                      <span className="ProvidersSingleProduct--selected">
                        <div className="br_flex">
                          <span className="price">
                            <span className="price_value">${price}</span>
                          </span>
                        </div>
                      </span>
                    </div>
                    <hr />
                    <div className="ProductSelector_IntroBlurb">
                      <span className="ProvidersIfSelectedProductMatchesFilter">
                        <p>{desc}</p><br />
                      </span>
                    </div>

                    <div className="bagsFeaturesGrid__gridWrapper">
                      {isInCart(id) ? (
                        <center><h2 style={{ color: "green" }}>Added to the cart!</h2></center>
                      ) : (
                        <>
                          <div>
                            <label>
                              Quantity:
                              <input
                                type="number"
                                min="1"
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                              />
                            </label>
                          </div>
                          <div>
                            <span className="ProvidersSingleProduct--selected">
                              <button
                                type="button"
                                className="AddToCart HtmlProductAddToCart"
                                style={{ borderRadius: "0" }}
                                onClick={() => addToCart(allTemp1, null, quantity)}  // Pass the quantity to addToCart
                              >
                                <span>Add To Cart</span>
                              </button>
                            </span>
                          </div>
                        </>
                      )}
                      <br />
                    </div>
                  </section>
                </div>
                <span className="ProvidersIfSelectedProductMatchesFilter">
                  <content-block slug="product-page-wssb">
                    <div className="ProductTile-SliderContainer ProductTile-SliderContainer--YMAL" data-product-list-category="ymal-slider">
                      <div className="ProductTile-SliderContainer-Title br_text-3xl-serif br_text-[#333]">You might also like:</div>
                      {allTemp2?.length > 0 ? (
                        <section style={{ maxWidth: "100%" }}>
                          <Swiper spaceBetween={50} loop modules={[Autoplay]} autoplay={{ delay: 2000, stopOnLastSlide: false, reverseDirection: true }} breakpoints={{ 150: { slidesPerView: 1 }, 768: { slidesPerView: 4 } }}>
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
                      )}
                    </div>
                  </content-block>
                </span>
              </div>
            </div>
          </bellroy-product-detail>
        </div>
        <Footer />
      </div>
      <style dangerouslySetInnerHTML={{ __html: "\n  @media only screen and (max-width: 600px) {\n#mylogo123 { \n  width:15em !important;margin-top: 4em;\n}\n}\n" }} />
    </>
  );
}

export default Page;
