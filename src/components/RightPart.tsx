import React from 'react';
import Home from 'components/Content/Home';
import About from 'components/Content/About';
import Skills from 'components/Content/Skills';
import Project from 'components/Content/Project';
import Contact from 'components/Content/Contact';

interface IProps {
    showLeftPart: boolean;
    setActiveTab: (value: string) => void;
}
const RightPart = ({ showLeftPart, setActiveTab }: IProps) => {
    return (
        <div className={`arlo_tm_rightpart ${showLeftPart ? 'opened' : ''}`}>
            <div className="rightpart_inner">
                <Home setActiveTab={setActiveTab} />
                {/* <!-- ABOUT --> */}
                <About />
                {/* <!-- /ABOUT --> */}

                {/* <!-- SKILLS --> */}
                <Skills />
                {/* <!-- /SKILLS --> */}

                {/* <!-- SERVICES --> */}
                <Project />
                {/* <!-- /SERVICES --> */}

                {/* <!-- CONTACT & FOOTER --> */}
                <Contact />
                {/* <!-- /CONTACT & FOOTER --> */}
            </div>
        </div>
    );
};

export default RightPart;
