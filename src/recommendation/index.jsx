import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import "./index.css";

import AuthorImg from '../images/author.png';

const Recommendation = () => {

    return (
        <>
            <div className="row about-expertise" data-animate-block>
                <div className="column lg-12">
                    <h2 className="text-pretitle with-line" data-animate-el>Recommendation</h2>
                </div>
            </div>

            <div className="row testimonials">
                <div className="column lg-12" data-animate-block>
                    <div className="swiper-container testimonial-slider" data-animate-el>
                        <div className="swiper-wrapper">
                            <Swiper autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }} modules={[Pagination, Autoplay]} pagination={true} effect="fade">
                                <SwiperSlide>
                                    <div className="testimonial-slider__slide swiper-slide">
                                        <div className="testimonial-slider__author">
                                            <img src={AuthorImg} alt="Author image" className="testimonial-slider__avatar" />
                                            <cite className="testimonial-slider__cite">
                                                <strong>Arne Everson</strong>
                                                <span>Learning management Systems Platform Owner, Kaplan Inc.</span>
                                            </cite>
                                        </div>
                                        <p>
                                            I have had the pleasure of working with Ajaykkumar to reivent our mobile app experience. Ajaykkumar was self-motivated, passionate, insightful, and extremely efficient as the lead developer on the app. Through the infrastructure updates, feature enhancements, and usability improvements that he developed, we were able to significantly increase the customer ratings on the app. I owe a debt of gratitude to Ajaykkumar for all that he has done and wish him the best as he pursues additional education to further improve his already stellar set of skills and capabilities.
                                        </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-slider__slide swiper-slide">
                                        <div className="testimonial-slider__author">
                                            <img src={AuthorImg} alt="Author image" className="testimonial-slider__avatar" />
                                            <cite className="testimonial-slider__cite">
                                                <strong>Oscar Velazquez</strong>
                                                <span>Product Owner, The Walt Disney Company</span>
                                            </cite>
                                        </div>
                                        <p>
                                            Ajay is one of the most exceptional self-sufficient professionals I have ever worked with. Ajay pays great attention to detail and takes ownership of his platform from a holistic perspective. He has a proven track record for delivering great products and features that are vital to the application. Truly a pleasure to work with him!
                                        </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-slider__slide swiper-slide">
                                        <div className="testimonial-slider__author">
                                            <img src={AuthorImg} alt="Author image" className="testimonial-slider__avatar" />
                                            <cite className="testimonial-slider__cite">
                                                <strong>Pandiarajan</strong>
                                                <span>Lead Consultant,  Thoughtworks</span>
                                            </cite>
                                        </div>
                                        <p>
                                            I have worked with Ajaykkumar in Ideas2IT. He is a smart and diligent person. He is proactive and takes ownership & pride on the things he works. Best part of working with him is, he is always reachable and have good problem solving skills. He is an asset to any organisation. I highly recommend him.
                                        </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-slider__slide swiper-slide">
                                        <div className="testimonial-slider__author">
                                            <img src={AuthorImg} alt="Author image" className="testimonial-slider__avatar" />
                                            <cite className="testimonial-slider__cite">
                                                <strong>Denis Chacko</strong>
                                                <span>Quality Analyst Manager,  Kaplan Inc</span>
                                            </cite>
                                        </div>
                                        <p>
                                            I really enjoyed working with Ajay on projects for the Kaplan Schweser Mobile app. Ajay is super talented and dedicated to his work.

                                            He consistently delivered great results. In my role as QA, I had a great working relationship with him. Ajay was impressive at fixing even the toughest bugs. He's also a good mentor who likes to share what he knows.

                                            What sets Ajay apart is his commitment to doing great work and staying updated on the latest industry trends. He not only stays informed but also brings new and advanced practices to our projects, making our work better overall.
                                        </p>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Recommendation;
