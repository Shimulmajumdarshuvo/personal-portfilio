import React from 'react';


import About from '../About';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';
import SkillSection from '../SkillSection/SkillSection';

const Home = () => {
    return (
        <div>

            <About></About>
            <SkillSection></SkillSection>
            <Experience></Experience>
            <Projects></Projects>
            <Contact></Contact>


        </div>
    );
};

export default Home;