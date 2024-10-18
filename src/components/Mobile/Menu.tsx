import { useState } from 'react';
import { RiCodeSSlashFill } from 'react-icons/ri';
const MobileMenu = () => {
    const [activeTab, setActiveTab] = useState<string>('home');
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const style = {
        overflow: 'hidden',
        display: isOpen ? 'block' : 'none',
        transition: '2s',
    };
    return (
        <div className="arlo_tm_mobile_header_wrap">
            <div className="main_wrap">
                <div className="logo icon">
                    <a href="#">
                        <RiCodeSSlashFill size={25} color="#e3872d" />
                    </a>
                </div>
                <div className="arlo_tm_trigger">
                    <div className={`hamburger hamburger--collapse-r ${isOpen ? 'is-active' : ''}`}>
                        <div className="hamburger-box">
                            <div
                                className="hamburger-inner"
                                onClick={() => {
                                    setIsOpen(!isOpen);
                                }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="arlo_tm_mobile_menu_wrap" style={style}>
                <div className="mob_menu">
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
            </div>
        </div>
    );
};

export default MobileMenu;
