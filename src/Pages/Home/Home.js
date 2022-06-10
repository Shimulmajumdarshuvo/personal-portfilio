import React from 'react';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import About from '../About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import SkillSection from '../SkillSection/SkillSection';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <SkillSection></SkillSection>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};

export default Home;