import { TypeAnimation } from 'react-type-animation';
import CV from '@/assets/CV-WebDeveloper-PhamDaiHao.pdf';
import { useEffect, useRef } from 'react';
import Parallax from 'parallax-js';
import logo550 from '@/assets/img/about/550x640.jpg';
import imgAbout from '@/assets/img/about/2.jpg';

const About = () => {
    const sceneEl = useRef(null);

    useEffect(() => {
        if (sceneEl && sceneEl.current) {
            const parallaxInstance = new Parallax(sceneEl.current, {
                relativeInput: true,
                hoverOnly: true,
            });

            parallaxInstance.enable();

            return () => parallaxInstance.disable();
        }
    }, []);
    return (
        <div className="arlo_tm_section relative" id="about">
            <div className="arlo_tm_about_wrapper_all">
                <div className="container">
                    <div className="arlo_tm_title_holder">
                        <h3>About Me</h3>
                        <span>Main informations about me</span>
                    </div>
                    <div className="arlo_tm_about_wrap">
                        <div className="author_wrap">
                            <div className="leftbox">
                                <div ref={sceneEl} className="about_image_wrap parallax" data-relative-input="true">
                                    <div className="image layer" data-depth="0.2">
                                        <img src={logo550} alt="550x640" />
                                        <div
                                            className="inner"
                                            data-img-url={imgAbout}
                                            style={{ backgroundImage: `url(${imgAbout})` }}
                                        ></div>
                                    </div>
                                    <div className="border layer" data-depth="0.6">
                                        <img src={logo550} alt="550x640" />
                                        <div className="inner"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="rightbox">
                                <div className="arlo_tm_mini_title_holder">
                                    <h4>
                                        I'm a&nbsp;
                                        <TypeAnimation
                                            sequence={[
                                                'Backend Developer',
                                                1000,
                                                'Frontend Developer',
                                                1000,
                                                'Web Developer',
                                                1000,
                                            ]}
                                            wrapper="span"
                                            speed={50}
                                            style={{ color: '#e3872d' }}
                                            repeat={Infinity}
                                        />
                                    </h4>
                                </div>
                                <div className="definition">
                                    <p>
                                        Hi! My name is <strong>Pham Dai Hao</strong>. I am a Web Developer, and I'm very
                                        passionate and dedicated to my work.
                                    </p>
                                    <p>
                                        I have acquired the skills and knowledge necessary to make your project a
                                        success.
                                    </p>
                                </div>
                                <div className="about_short_contact_wrap">
                                    <ul>
                                        <li>
                                            <span>
                                                <label>Mail:</label>{' '}
                                                <a href="mailto:phamdaihao.dev@gmail">phamdaihao.dev&#64;gmail.com</a>
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <label>Study:</label> Open University
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <label>Github:</label>{' '}
                                                <a href="https://github.com/Haofphm4426">github.com/Haofphm4426</a>
                                            </span>
                                        </li>

                                        <li>
                                            <span>
                                                <label>Gender:</label> Male
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="buttons_wrap">
                                    <ul>
                                        <li>
                                            <a href={CV} download>
                                                <span>Download CV</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
