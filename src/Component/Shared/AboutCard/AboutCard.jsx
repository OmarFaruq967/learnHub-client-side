import React from 'react';

const AboutCard = ({title, details, image }) => {
    return (
    <div className='mt-5 flex gap-5 bg-slate-200 py-8 px-8 hover:bg-[#fbbd23]  hover:text-black cursor-pointer'>
            <div className='w-1/4 flex items-center '> 
                <img src={image} alt="" />
            </div>
            <div className=''>
                <h3 className='text-xl font-bold text-left'>{title}</h3>
                <p className='mt-3 text-left font-medium'> {details} </p>
            </div>
        </div>
    );
};

export default AboutCard;