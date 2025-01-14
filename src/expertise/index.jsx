import React from "react";
import "./index.css";

const Expertise = () => {
    return (
        <>
            <div className="row about-expertise" data-animate-block>
                <div className="column lg-12">
                    <h2 className="text-pretitle with-line" data-animate-el>Expertise</h2>
                </div>
            </div>

            <div className="row about-timelines" data-animate-block>
                <div className="column lg-6 tab-12">
                    <h2 className="text-pretitle" data-animate-el>
                        Experience
                    </h2>
                    <div className="timeline" data-animate-el>
                        <div className="timeline__block">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <h4 className="timeline__title">Kaplan Inc, India</h4>
                                <h5 className="timeline__meta">Senior Software Engineer</h5>
                                <p className="timeline__timeframe">February 2021 - December 2023</p>
                            </div>
                            <div className="timeline__desc">
                                <p style={{ wordSpacing: '4px', textAlign: 'justify'}}>At Kaplan, I played a pivotal role in revolutionizing educational technology through the Kaplan Schweser App. As a Senior Software Engineer, I led the development of cross-platform applications that transformed student engagement. My work resulted in a 60% increase in user interaction, combining React Native expertise with robust architecture to deliver seamless learning experiences across web and mobile platforms.</p>
                            </div>
                        </div>

                        <div className="timeline__block">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <h4 className="timeline__title">Mobile Premier League, India</h4>
                                <h5 className="timeline__meta">Software Engineer</h5>
                                <p className="timeline__timeframe">February 2020 - February 2021</p>
                            </div>
                            <div className="timeline__desc">
                                <p style={{ wordSpacing: '4px', textAlign: 'justify'}}>During my time at MPL, one of India's leading mobile gaming platforms, I specialized in creating high-performance gaming interfaces. My focus on optimization and user experience contributed to the platform's rapid growth, ensuring smooth gameplay experiences for millions of users across both Android and iOS platforms.</p>
                            </div>
                        </div>

                        <div className="timeline__block">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <h4 className="timeline__title">Traform Travel Technologies, India</h4>
                                <h5 className="timeline__meta">Software Engineer</h5>
                                <p className="timeline__timeframe">June 2019 - February 2020</p>
                            </div>
                            <div className="timeline__desc">
                                <p style={{ wordSpacing: '4px', textAlign: 'justify'}}>At Traform, I helped build the future of travel management technology. My contributions led to a 40% reduction in post-release defects and a 30% improvement in backend performance. I combined front-end expertise with backend optimization to create a more efficient travel management platform.</p>
                            </div>
                        </div>

                        <div className="timeline__block">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <h4 className="timeline__title">Ideas2IT technologies, India</h4>
                                <h5 className="timeline__meta">Software Engineer</h5>
                                <p className="timeline__timeframe">September 2017 - June 2019</p>
                            </div>
                            <div className="timeline__desc">
                                <p style={{ wordSpacing: '4px', textAlign: 'justify'}}>My journey began at Ideas2IT, where I developed diverse solutions from e-commerce platforms to data analytics dashboards. Leading front-end development efforts, I improved code quality metrics by 25% and significantly boosted client satisfaction ratings by 50%, while establishing robust coding standards and review processes.</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="column lg-6 tab-12">
                    <h2 className="text-pretitle" data-animate-el>
                        Education
                    </h2>
                    <div className="timeline" data-animate-el>
                        <div className="timeline__block">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <h4 className="timeline__title">National College of Ireland, Ireland</h4>
                                <h5 className="timeline__meta">Master in Data Analytics</h5>
                                <p className="timeline__timeframe">January 2025</p>
                            </div>
                            <div className="timeline__desc">
                                <p style={{ wordSpacing: '4px', textAlign: 'justify'}}>Enhanced my technical expertise with advanced studies in Data Analytics, successfully combining my software engineering background with data science capabilities. This program equipped me with the skills to build more intelligent, data-driven applications and make informed decisions through statistical analysis. The blend of analytics and software development has broadened my ability to create comprehensive technical solutions that derive meaningful insights from data.</p>
                            </div>
                        </div>

                        <div className="timeline__block">
                            <div className="timeline__bullet"></div>
                            <div className="timeline__header">
                                <h4 className="timeline__title">Anna university, India</h4>
                                <h5 className="timeline__meta">Bachelor of Engineering in Electronics and Communication</h5>
                                <p className="timeline__timeframe">May 2017</p>
                            </div>
                            <div className="timeline__desc">
                                <p style={{ wordSpacing: '4px', textAlign: 'justify'}}>My technical foundation began at Anna University, where I completed my bachelor's degree in Electronics and Communication Engineering. This comprehensive program provided me with strong analytical skills and technical fundamentals that I later leveraged to excel in software development. The program's rigorous curriculum in engineering principles helped shape my systematic approach to problem-solving in software development.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Expertise;
