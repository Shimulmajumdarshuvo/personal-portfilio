import React from 'react';


import About from '../About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import SkillSection from '../SkillSection/SkillSection';

const Home = () => {
    return (
        <div>

            <About></About>
            <SkillSection></SkillSection>
            <Projects></Projects>
            <Contact></Contact>


        </div>
    );
};

export default Home;