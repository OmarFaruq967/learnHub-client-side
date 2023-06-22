import React from 'react';
import AboutCourse from '../../Shared/AboutCard/AboutCourse';
import success from '../../../../public/Images/Icons/success.png'
import scedules from '../../../../public/Images/Icons/scedules.png'
import trust from '../../../../public/Images/Icons/trust.png'
import cruse from '../../../../public/Images/Icons/course.png'
import image1 from '../../../../public/Images/Images/image-1.webp'

const AboutCourses = () => {
    return (
        <div className="w-full h-full bg-cover bg-no-repeat bg-center" style={{  backgroundImage: `url(${image1})` }}>
            <div className=' my-20 grid grid-cols-2  md:grid-cols-4'>
            <div><AboutCourse image={success} title="3,000" details="SUCCESS STORIES"/></div>
            <div><AboutCourse image={scedules} title="1,000" details="SCHEDULES"/></div>
            <div><AboutCourse image={trust} title="320" details="TRUSTED TUTORS"/></div>
            <div><AboutCourse image={cruse} title="587" details="COURSES"/></div>
            
        </div>
        </div>
        
    );
};

export default AboutCourses;