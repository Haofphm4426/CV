import { Flex } from 'antd';
import { DiReact } from 'react-icons/di';
import { DiNodejsSmall } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiBootstrap } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { SiJquery } from 'react-icons/si';

const Skills = () => {
    return (
        <div className="arlo_tm_section" id="skills">
            <div className="arlo_tm_skills_wrap">
                <div className="container">
                    <div className="arlo_tm_title_holder">
                        <h3>Skills</h3>
                        <span>Programming Languages & Tools</span>
                    </div>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <SiJavascript color="#f0db4f" title="Javascript" />
                        </li>
                        <li className="list-inline-item">
                            <SiTypescript color="#007acc" title="TypeScript" />
                        </li>
                        <li className="list-inline-item">
                            <SiReact color="#61dafb" title="ReactJS" />
                        </li>
                        <li className="list-inline-item">
                            <SiNodedotjs color="#5fa04e" title="NodeJS" />
                        </li>
                        <li className="list-inline-item">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                <title>Java</title>
                                <path
                                    d="M11.622 24.74s-1.23.748.855.962c2.51.32 3.847.267 6.625-.267a10.02 10.02 0 0 0 1.763.855c-6.25 2.672-14.16-.16-9.244-1.55zm-.8-3.473s-1.336 1.015.748 1.23c2.725.267 4.862.32 8.55-.427a3.26 3.26 0 0 0 1.282.801c-7.534 2.244-15.976.214-10.58-1.603zm14.747 6.09s.908.748-1.015 1.336c-3.58 1.07-15.014 1.39-18.22 0-1.122-.48 1.015-1.175 1.7-1.282.695-.16 1.07-.16 1.07-.16-1.23-.855-8.175 1.763-3.526 2.51 12.77 2.084 23.296-.908 19.983-2.404zM12.2 17.633s-5.824 1.39-2.084 1.87c1.603.214 4.755.16 7.694-.053 2.404-.214 4.81-.64 4.81-.64s-.855.374-1.443.748c-5.93 1.55-17.312.855-14.052-.748 2.778-1.336 5.076-1.175 5.076-1.175zm10.42 5.824c5.984-3.1 3.206-6.09 1.282-5.717-.48.107-.695.214-.695.214s.16-.32.534-.427c3.794-1.336 6.786 4.007-1.23 6.09 0 0 .053-.053.107-.16zm-9.83 8.442c5.77.374 14.587-.214 14.8-2.94 0 0-.427 1.07-4.755 1.87-4.916.908-11.007.8-14.587.214 0 0 .748.64 4.542.855z"
                                    fill="#4e7896"
                                />
                                <path
                                    d="M18.996.001s3.313 3.366-3.152 8.442c-5.183 4.114-1.175 6.465 0 9.137-3.046-2.725-5.236-5.13-3.74-7.373C14.294 6.893 20.332 5.3 18.996.001zm-1.7 15.335c1.55 1.763-.427 3.366-.427 3.366s3.954-2.03 2.137-4.542c-1.656-2.404-2.94-3.58 4.007-7.587 0 0-10.953 2.725-5.717 8.763z"
                                    fill="#f58219"
                                />
                            </svg>
                        </li>
                        <li className="list-inline-item">
                            <SiMongodb color="#4faa41" title="MongoDB" />
                        </li>
                        <li className="list-inline-item">
                            <GrMysql color="#00618a" title="MySQL" />
                        </li>
                        <li className="list-inline-item">
                            <SiHtml5 color="#e54d26" title="HTML5" />
                        </li>
                        <li className="list-inline-item">
                            <SiCss3 color="#3d8fc6" title="CSS3" />
                        </li>
                        <li className="list-inline-item icon_customize">
                            <svg
                                color="#1fa6ca"
                                fill="#000000"
                                width="55px"
                                height="55px"
                                viewBox="0 0 24 24"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <title>Material UI</title>
                                <path d="M0 2.475v10.39l3 1.733V7.67l6 3.465 6-3.465v3.465l-6 3.463v3.464l6 3.463 9-5.195V9.402l-3 1.733v3.463l-6 3.464-3-1.732 6-3.465V2.475L9 7.67 0 2.475zm24 0-3 1.73V7.67l3-1.732V2.474z" />
                            </svg>
                        </li>
                        <li className="list-inline-item icon_customize">
                            <SiBootstrap color="#712cf9" title="Bootstrap" size={55} />
                        </li>
                        <li className="list-inline-item">
                            <SiGithub color="#181616" title="Github" />
                        </li>
                    </ul>

                    <p className="icon" style={{ marginBottom: '.5rem' }}>
                        <DiReact color="#47CEF6" size={25} />
                        <strong>Front-end:&nbsp;</strong>
                        TypeScript, ReactJS, Material UI, Bootstrap, Axios and other technologies.
                    </p>
                    <p className="icon" style={{ marginBottom: '.5rem' }}>
                        <DiNodejsSmall color="#88C048" size={25} />
                        <strong>Back-end:&nbsp;</strong>
                        Node.JS, ExpressJS, Java, Spring Boot, Spring Security, Spring Data JPA, MongoDB, MySQL and
                        other technologies.
                    </p>
                    <p className="icon">
                        <strong>Other:&nbsp;</strong>
                        Good understanding of OOP methodologies, SOLID principles, JWT, Git/ GitFlow
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Skills;
