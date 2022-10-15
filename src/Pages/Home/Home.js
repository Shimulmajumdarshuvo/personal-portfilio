import React from 'react';


import About from '../About';
import AboutWork from '../AboutWork/AboutWork';
import Contact from '../Contact/Contact';
import DoWorking from '../DoWorking/DoWorking';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';
import WorkService from '../Service/WorkService';

import SkillSection from '../SkillSection/SkillSection';

const Home = () => {
    return (
        <div>

            <About></About>
            <AboutWork></AboutWork>
            <SkillSection></SkillSection>
            <Experience></Experience>
            <Education></Education>
            <DoWorking></DoWorking>
            <Projects></Projects>
            <WorkService></WorkService>
            <Contact></Contact>


        </div>
    );
};

export default Home;