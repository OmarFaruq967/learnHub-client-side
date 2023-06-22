import React from 'react';

const AboutCourse = ({image, title, details}) => {
    return (
        <div className='mt-5 flex gap-5 py-8 px-8 cursor-pointer'>
            <div className='w-1/4 flex items-center '> 
                <img src={image} alt="" />
            </div>
            <div className=''>
                <h3 className='text-2xl font-bold text-left text-white '>{title}</h3>
                <h4 className='mt-3 text-left font-semibold text-white'> {details} </h4>
            </div>
        </div>
    );
};

export default AboutCourse;