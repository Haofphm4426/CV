import desktopLogo from '@/assets/img/logo/dev.png';
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { RiCodeSSlashFill } from 'react-icons/ri';
import { SiGithub } from 'react-icons/si';

interface IProps {
    showLeftPart: boolean;
    setShowLeftPart: (value: boolean) => void;
    activeTab: string;
    setActiveTab: (value: string) => void;
}
const LeftPart = ({ showLeftPart, setShowLeftPart, activeTab, setActiveTab }: IProps) => {
    useEffect(() => {
        const { hash } = window.location;
        if (hash) {
            setActiveTab(hash.slice(1));
            const section = document.querySelector(`${hash}`);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, []);
    return (
        <div className={`arlo_tm_leftpart_wrap ${showLeftPart ? 'opened' : ''}`}>
            <div className="leftpart_inner">
                <div className="logo_wrap icon">
                    <a href="#">
                        <RiCodeSSlashFill size={100} color="#e3872d" />
                    </a>
                </div>

                <div className="menu_list_wrap">
                    <ul className="anchor_nav">
                        <li>
                            <a
                                href="#home"
                                className={activeTab === 'home' ? 'active' : ''}
                                onClick={() => setActiveTab('home')}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className={activeTab === 'about' ? 'active' : ''}
                                onClick={() => setActiveTab('about')}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#skills"
                                className={activeTab === 'skills' ? 'active' : ''}
                                onClick={() => setActiveTab('skills')}
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className={activeTab === 'projects' ? 'active' : ''}
                                onClick={() => setActiveTab('projects')}
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className={activeTab === 'contact' ? 'active' : ''}
                                onClick={() => setActiveTab('contact')}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="leftpart_bottom">
                    <div className="social_wrap">
                        <ul>
                            <li>
                                <a href="https://github.com/Haofphm4426" target="_blank" className="icon">
                                    <SiGithub color="white" size={30} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {!isMobile && (
                    <a
                        className={`arlo_tm_resize ${showLeftPart ? 'opened' : ''}`}
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            setShowLeftPart(!showLeftPart);
                        }}
                    >
                        <i className={`xcon-angle-left ${showLeftPart ? 'opened' : ''}`}></i>
                    </a>
                )}
            </div>
        </div>
    );
};

export default LeftPart;
