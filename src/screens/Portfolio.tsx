import { FloatButton } from 'antd';
import Preloader from '../components/Preloader';
import LeftPart from '../components/LeftPart';
import RightPart from '../components/RightPart';
import MobileMenu from '../components/Mobile/Menu';
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

const Portfolio = () => {
    const [showLeftPart, setShowLeftPart] = useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<string>('home');
    useEffect(() => {
        if (isMobile) setShowLeftPart(true);
    }, []);
    return (
        <div className="arlo_tm_wrapper_all">
            <div id="arlo_tm_popup_blog">
                <div className="container">
                    <div className="inner_popup scrollable"></div>
                </div>
                <span className="close">
                    <a href="#"></a>
                </span>
            </div>

            {/* <!-- PRELOADER --> */}
            <Preloader />
            {/* <!-- /PRELOADER --> */}

            {/* <!-- MOBILE MENU --> */}
            <MobileMenu />
            {/* <!-- /MOBILE MENU --> */}

            {/* <!-- CONTENT --> */}
            <div className="arlo_tm_content">
                {/* <!-- LEFTPART --> */}
                <LeftPart
                    showLeftPart={showLeftPart}
                    setShowLeftPart={setShowLeftPart}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                />
                {/* <!-- /LEFTPART --> */}

                {/* <!-- RIGHTPART --> */}
                <RightPart showLeftPart={showLeftPart} setActiveTab={setActiveTab} />
                {/* <!-- /RIGHTPART --> */}

                {/* <a className="arlo_tm_totop" href="#"></a> */}
                <FloatButton.BackTop onClick={() => setActiveTab('home')} />
            </div>
        </div>
    );
};

export default Portfolio;
