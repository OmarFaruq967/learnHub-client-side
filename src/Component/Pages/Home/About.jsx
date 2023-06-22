import React from 'react';
import about from '../../../../public/Images/Hero-Image/about.webp'
import Heading from '../../Shared/Heading/Heading';
import AboutCard from '../../Shared/AboutCard/AboutCard';
import book from '../../../../public/Images/Icons/Book.png'
import certificate from '../../../../public/Images/Icons/Certificate.png'
import expert from '../../../../public/Images/Icons/Userhead.png'

const About = () => {
    return (
        <div className='my-20 md:flex  gap-10'>
            <div className='md:w-1/2'>
                <img className='h-full w-full mb-5 ' src={about} alt="" />
            </div>
            <div className='md:w-1/2'>
                <Heading subtitle="LEARN ANYTHING" title="Benefits About Online Learning Expertise"/>
                <AboutCard image={book} title="Online Courses" details="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts." />
                <AboutCard image={certificate} title="Earn A Certificates" details="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."/>
                <AboutCard image={expert} title="Learn with Expert" details="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."/>
            </div>
        </div>
    );
};

export default About;